import { JWTUtil } from "../utils/jwt.util.js";

export const AuthMiddleware = {
  verifyToken(req, res, next) {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized: Token not provided" });

    try {
      const decoded = JWTUtil.verifyToken(token);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
  }
};
