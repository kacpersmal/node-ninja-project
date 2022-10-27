import QueryHandler from '../../../abstraction/features/QueryHandler';
import { BaseClient } from '../../../db/DatabaseClient';
import DbQuery from '../../../db/DbQuery';

export interface CreateUserCommand {
  email: string;
  password_hash: string;
  role_id: string;
}

export interface CreateUserResult {}

class CreateUser extends QueryHandler<CreateUserResult, CreateUserCommand> {
  async HandleAsync(query: CreateUserCommand): Promise<CreateUserResult> {
    const qr = new DbQuery(
      BaseClient,
      `INSERT INTO auth.users(email,password_hash,role_id)
    VALUES ($1, $2,$3);
    `,
      {},
    );

    const res = await qr.ExecuteAsync([query.email, query.password_hash, query.role_id]);
    return res;
  }
}

export default new CreateUser();
