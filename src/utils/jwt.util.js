import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const SECRET_KEY = process.env.JWT_SECRET;

export const JWTUtil = {
  generateToken(payload, expiresIn = "1h") {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
  },

  verifyToken(token) {
    return jwt.verify(token, SECRET_KEY);
  }
};
