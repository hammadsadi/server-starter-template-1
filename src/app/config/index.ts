import dotenv from 'dotenv';
import path from 'path';
// Config Dotenv
dotenv.config({ path: path.join((process.cwd(), '.env')) });
export default {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
};
