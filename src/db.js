import pkg from 'pg'; // Impor default
const { Client } = pkg;

import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from './config/index.js';

const client = new Client({
  host: DB_HOST,       
  port: 5432,          
  user: DB_USER,        
  password: DB_PASSWORD, 
  database: DB_NAME     
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => {
    console.error('Connection error', err.stack);
    console.error(`Host: ${client.host}, Port: ${client.port}`);
    console.error(`User: ${client.user}, Database: ${client.database}`);
  });

export { client };
