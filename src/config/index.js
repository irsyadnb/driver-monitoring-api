import { config } from "dotenv"
config()

export const {
  API_PORT,
  SOCKET_PORT,
  VERSION
} = process.env