import SUPERTEST from '../utill';

const AuthTests = () => {
  it('Authorize fail invalid body', async () => {
    const response = await SUPERTEST.post('/auth');
    expect(response.status).toBe(400);
  });

  it('Authorize all valid', async () => {
    const response = await SUPERTEST.post('/auth').send({ email: 'admin@test.com', password: 'test1234' });
    expect(response.status).toBe(200);
  });

  it('Authorize invalid credentials', async () => {
    const response = await SUPERTEST.post('/auth').send({ email: 'admineeee@test.com', password: 'qwe' });
    expect(response.status).toBe(400);
  });
};

export default AuthTests;
