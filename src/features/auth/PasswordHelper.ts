import bcrypt from 'bcrypt';

const HashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

const ComparePasswords = async (password: string, password_hash: string) => {
  return await bcrypt.compare(password, password_hash);
};

export { HashPassword, ComparePasswords };
