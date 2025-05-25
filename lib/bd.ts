import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Masters',
  password: '123',
  port: 5432,
});

export { pool };
