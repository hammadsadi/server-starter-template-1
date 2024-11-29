import dotenv from 'dotenv';
import path from 'path';
// Config Dotenv
dotenv.config({ path: path.join((process.cwd(), '.env')) });
export default {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND,
  DEFAULT_PASS: process.env.DEFAULT_PASS,
};
