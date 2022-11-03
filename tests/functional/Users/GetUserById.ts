import { GetUserById, HardDeleteUser, InsertUser } from '../../../src/data/user';
import { HashPassword } from '../../../src/features/auth';
import SUPERTEST, { GetAdminToken, USER_ROLE_ID } from '../utill';

const GetUserByIdTests = () => {
  it('Get user Authorized', async () => {
    const userEmail = 'newuser@test.com';
    const user = await InsertUser(userEmail, await HashPassword('test1234'), USER_ROLE_ID);
    try {
      const token = await GetAdminToken();
      const response = await SUPERTEST.get(`/users/${user.id}`).set({ Authorization: token });
      expect(response.status).toBe(200);
      expect(response.body.id).toBe(user.id);
      expect(response.body.email).toBe(userEmail);
      expect(response.body.role_id).toBe(USER_ROLE_ID);
    } finally {
      HardDeleteUser(user.id);
    }
  });
};

export default GetUserByIdTests;
