import QueryHandler from '../../../abstraction/features/QueryHandler';
import { BaseClient } from '../../../db/DatabaseClient';
import DbQuery from '../../../db/DbQuery';

interface GetUserRoleByIdQuery {
  id: string;
}

export interface GetUserRoleByIdResponse {
  id: string;
  name: string;
}

class GetUserRoleById extends QueryHandler<GetUserRoleByIdResponse, GetUserRoleByIdQuery> {
  async HandleAsync(query: GetUserRoleByIdQuery): Promise<GetUserRoleByIdResponse> {
    const dbQuery = new DbQuery<GetUserRoleByIdResponse>(
      BaseClient,
      `SELECT id,name FROM auth.user_roles WHERE id=$1
    ;`,
      {},
    );
    const res = await dbQuery.ExecuteAsync([query.id]);
    return res[0] ?? undefined;
  }
}

export default new GetUserRoleById();
