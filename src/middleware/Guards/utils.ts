import { Request } from 'express';

const ADMIN_ROLE = 'admin';
const USER_ROLE = 'user';

function GetTokenFromRequest(req: Request) {
  const authHeader = req.headers['authorization']?.trim();
  const headerData = authHeader && authHeader.split(' ');
  if (headerData && headerData[1]) return headerData[1];
  return undefined;
}

export { GetTokenFromRequest, ADMIN_ROLE, USER_ROLE };
