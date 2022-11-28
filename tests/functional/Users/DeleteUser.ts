import { GetUserById, HardDeleteUser, InsertUser } from '../../../src/data/user';
import { HashPassword } from '../../../src/features/auth';
import SUPERTEST, { GetAdminToken, GetCustomToken, USER_ROLE_ID } from '../utill';

const DeleteUserTests = () => {
  it('Delete User as admin', async () => {
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

  it('Delete User as basic owner', async () => {
    const userEmail = 'newuserdel@test.com';
    const userPassword = 'test1234';
    const userRole = USER_ROLE_ID;
    const newUser = await InsertUser(userEmail, await HashPassword(userPassword), userRole);

    try {
      const token = await GetCustomToken(userEmail, userPassword);
      const response = await SUPERTEST.delete(`/users/${newUser.id}`).set({ Authorization: token });
      expect(response.status).toBe(200);
      expect((await GetUserById(newUser.id)).delete_date).not.toBe(undefined);
    } finally {
      HardDeleteUser(newUser.id);
    }
  });

  it('Delete User as basic not owner', async () => {
    const userEmail = 'newuserdel@test.com';
    const userPassword = 'test1234';
    const userRole = USER_ROLE_ID;
    const newUser = await InsertUser(userEmail, await HashPassword(userPassword), userRole);

    const userEmailSecond = 'newuserdelsecond@test.com';
    const userPasswordSecond = 'test1234';
    const userRoleSecond = USER_ROLE_ID;
    const newUserSecond = await InsertUser(userEmailSecond, await HashPassword(userPasswordSecond), userRoleSecond);

    try {
      const token = await GetCustomToken(userEmailSecond, userPasswordSecond);
      const response = await SUPERTEST.delete(`/users/${newUser.id}`).set({ Authorization: token });
      expect(response.status).toBe(403);
      expect((await GetUserById(newUser.id)).delete_date).not.toBe(undefined);
    } finally {
      HardDeleteUser(newUser.id);
      HardDeleteUser(newUserSecond.id);
    }
  });

  it('User not found', async () => {
    const token = await GetAdminToken();
    const response = await SUPERTEST.delete(`/users/a1236969-800a-486d-bdbe-4eda9314ce8f`).set({ Authorization: token });
    expect(response.status).toBe(404);
  });
};

export default DeleteUserTests;
