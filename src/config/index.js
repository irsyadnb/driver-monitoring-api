import { config } from "dotenv"
config()

export const {
  API_PORT,
  SOCKET_PORT,
  VERSION,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
} = process.env