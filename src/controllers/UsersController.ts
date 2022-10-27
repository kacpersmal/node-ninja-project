import { NextFunction, Response, Request } from 'express';
import BaseController from '../abstraction/BaseController';
import GetAllUsers, { GetAllUsersResult } from '../features/User/GetAllUsers/GetAllUsers';
import CreateUser, { CreateUserCommand } from '../features/User/CreateUser/CreateUser';
import bcrypt from 'bcrypt';
import GetSingleUserByEmail from '../features/User/GetSingleUserByEmail/GetSingleUserByEmail';
import ApiError from '../abstraction/ApiError';
import GetUserRoleById from '../features/UserRoles/GetUserRoleById/GetUserRoleById';

class UsersController extends BaseController {
  public async GetAllUsers(req: Request, res: Response<GetAllUsersResult[]>, next: NextFunction) {
    const resp = await GetAllUsers.HandleAsync({});
    super.Send(res, resp);
  }

  public async CreateNewUser(req: Request, res: Response, next: NextFunction) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    if ((await GetSingleUserByEmail.HandleAsync({ email: req.body.email })) != undefined)
      return super.Error(res, new ApiError('User with given email already exists!'));

    if ((await GetUserRoleById.HandleAsync({ id: req.body.role_id })) == undefined) return super.Error(res, new ApiError('User role does not exists'));

    const createUserCommand: CreateUserCommand = {
      email: req.body.email,
      role_id: req.body.role_id,
      password_hash: hashedPassword,
    };

    const resp = await CreateUser.HandleAsync(createUserCommand);

    return super.Send(res, {});
  }
}

export default UsersController;
