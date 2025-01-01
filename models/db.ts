import { Pool } from "pg";

let globalPool: Pool;

export function getDb() {
  if (!globalPool) {
    const connectionString = process.env.POSTGRES_URL;
    console.log("connectionString", connectionString);

    globalPool = new Pool({
      // connectionString,
      // user: 'postgres', // 数据库用户名
      // host: 'your-database-host.supabase.co', // Supabase 数据库的 URL
      // database: 'postgres', // 数据库名称
      // password: 'your-database-password', // 数据库密码
      // port: 5432, // 默认 PostgreSQL 端口
    });
  }

  return globalPool;
}
