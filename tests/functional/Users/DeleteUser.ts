import { GetUserById, HardDeleteUser, InsertUser } from '../../../src/data/user';
import { HashPassword } from '../../../src/features/auth';
import SUPERTEST, { GetAdminToken, USER_ROLE_ID } from '../utill';

const DeleteUserTests = () => {
  it('Delete User', async () => {
    const newUser = await InsertUser('newuserdel@test.com', await HashPassword('test1234'), USER_ROLE_ID);
    try {
      const token = await GetAdminToken();
      const response = await SUPERTEST.delete(`/users/${newUser.id}`).set({ Authorization: token });
      expect(response.status).toBe(200);
      expect((await GetUserById(newUser.id)).delete_date).not.toBe(undefined);
    } finally {
      HardDeleteUser(newUser.id);
    }
  });

  it('User not found', async () => {
    const token = await GetAdminToken();
    const response = await SUPERTEST.delete(`/users/a1236969-800a-486d-bdbe-4eda9314ce8f`).set({ Authorization: token });
    expect(response.status).toBe(404);
  });
};

export default DeleteUserTests;
