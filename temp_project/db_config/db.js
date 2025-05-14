import { Pool } from "pg";


export const db = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port:process.env.DB_PORT, 
    max: parseInt(process.env.DB_MAX_CONNECTION),          
    
  });