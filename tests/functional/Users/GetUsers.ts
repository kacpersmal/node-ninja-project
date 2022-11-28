import SUPERTEST, { GetAdminToken } from '../utill';

const GetUsersTests = () => {
  it('Gets user list unathorized', async () => {
    const response = await SUPERTEST.get('/users');
    expect(response.status).toBe(401);
  });

  it('Gets user list authorized', async () => {
    const token = await GetAdminToken();
    const response = await SUPERTEST.get('/users').set({ Authorization: token });
    expect(response.status).toBe(200);
  });
};

export default GetUsersTests;
