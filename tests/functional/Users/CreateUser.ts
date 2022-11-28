import { HardDeleteUser, InsertUser } from '../../../src/data/user';
import { HashPassword } from '../../../src/features/auth';
import SUPERTEST, { GetAdminToken, USER_ROLE_ID } from '../utill';

const CreateUserTests = () => {
  it('Create basic user', async () => {
    let userId = '';
    try {
      const token = await GetAdminToken();
      const response = await SUPERTEST.post('/users')
        .send({ email: 'newuser@test.com', password: 'test1234', role_id: USER_ROLE_ID })
        .set({ Authorization: token });
      userId = response.body.id;
      expect(response.status).toBe(200);
    } finally {
      HardDeleteUser(userId);
    }
  });

  it('User exists', async () => {
    const newUser = await InsertUser('newuser@test.com', await HashPassword('test1234'), USER_ROLE_ID);
    try {
      const token = await GetAdminToken();

      const response = await SUPERTEST.post('/users')
        .send({ email: 'newuser@test.com', password: 'test1234', role_id: USER_ROLE_ID })
        .set({ Authorization: token });
      expect(response.status).toBe(400);
    } finally {
      HardDeleteUser(newUser.id);
    }
  });

  it('Invalid body', async () => {
    const token = await GetAdminToken();
    const response = await SUPERTEST.post('/users').send({ email: 'newuser@test.com', password: 'test1234' }).set({ Authorization: token });
    expect(response.status).toBe(400);
  });

  it('Unathorized', async () => {
    const response = await SUPERTEST.post('/users').send({ email: 'newuser@test.com', password: 'test1234' });
    expect(response.status).toBe(401);
  });
};

export default CreateUserTests;
