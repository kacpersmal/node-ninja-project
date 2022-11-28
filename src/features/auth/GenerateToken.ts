import config from 'config';
import jwt from 'jsonwebtoken';

const GenerateToken = (user: { email: string; user_role: string; id: string }) => {
  return jwt.sign(user, config.get('JWT.key'), { expiresIn: config.get('JWT.expiration') });
};

export default GenerateToken;
