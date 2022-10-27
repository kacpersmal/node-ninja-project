import QueryHandler from '../../../abstraction/features/QueryHandler';
import DatabaseClient, { BaseClient } from '../../../db/DatabaseClient';
import DbQuery from '../../../db/DbQuery';
import config from 'config';

interface GetAllUsersQuery {}

interface GetAllUsersResult {
  id: string;
  email: string;
  creation_date: Date;
  role_id: string;
}

class GetAllUsers extends QueryHandler<GetAllUsersResult[], GetAllUsersQuery> {
  async HandleAsync(query: GetAllUsersQuery): Promise<GetAllUsersResult[]> {
    const qr = new DbQuery<GetAllUsersResult>(BaseClient, 'SELECT id,email,creation_date,role_id FROM auth.users WHERE delete_date IS NULL', {});
    const res = await qr.ExecuteAsync();

    return res;
  }
}

export { GetAllUsersQuery, GetAllUsersResult };
export default new GetAllUsers();
