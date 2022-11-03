import supertest from 'supertest';
import app from '../../app';

const SUPERTEST = supertest(app);

const USER_ROLE_ID = 'a1421fe7-5052-414d-835c-fa560c46a24a';
const ADMIN_ROLE_ID = '089dfb3e-cd0d-4c0a-951a-54d5635b1870';

const ADMIN_USER_ID = 'a2aa6969-800a-486d-bdbe-4eda9314ce8f';

const GetAdminToken = async () => {
  const response = await SUPERTEST.post('/auth').send({ email: 'admin@test.com', password: 'test1234' });
  return `Bearer ${response.body.token}`;
};

export { GetAdminToken, USER_ROLE_ID, ADMIN_ROLE_ID, ADMIN_USER_ID };
export default SUPERTEST;
