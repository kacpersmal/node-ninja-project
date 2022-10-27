import { Request } from 'express';

function GetTokenFromRequest(req: Request) {
  const authHeader = req.headers['authorization']?.trim();
  const headerData = authHeader && authHeader.split(' ');
  if (headerData && headerData[1]) return headerData[1];
  return undefined;
}

export { GetTokenFromRequest };
