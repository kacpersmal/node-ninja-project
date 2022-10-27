import QueryHandler from '../../../abstraction/features/QueryHandler';
import { BaseClient } from '../../../db/DatabaseClient';
import DbQuery from '../../../db/DbQuery';
interface Query {
  email: string;
}

export interface GetSingleUserByEmailResponse {
  id: string;
  email: string;
  password_hash: string;
  role_id: string;
  creation_date: Date;
  user_role: string;
}

class GetSingleUserByEmail extends QueryHandler<GetSingleUserByEmailResponse, Query> {
  async HandleAsync(query: Query): Promise<GetSingleUserByEmailResponse> {
    const dbQuery = new DbQuery<GetSingleUserByEmailResponse>(
      BaseClient,
      `SELECT auth.users.id,auth.users.email,auth.users.password_hash,auth.users.role_id,auth.user_roles.name as user_role FROM auth.users 
    INNER JOIN auth.user_roles
    ON auth.users.role_id = auth.user_roles.id
    WHERE email = $1 AND delete_date IS NULL
    ;`,
      {},
    );
    const res = await dbQuery.ExecuteAsync([query.email]);

    return res[0] ?? undefined;
  }
}

export default new GetSingleUserByEmail();
