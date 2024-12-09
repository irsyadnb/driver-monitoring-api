import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";

export class AuthRoute {
  constructor() {
    this.router = Router();
    this.#initializeRoutes();
  }

  #initializeRoutes() {
    
    this.router.post("/register", AuthController.register);
    this.router.post("/login", AuthController.login);
    this.router.put("/profile/:id", AuthMiddleware.verifyToken, AuthController.updateProfile);

    this.router.post("/logout", (req, res) => {});
    this.router.post("/refresh-token", (req, res) => {});

    //testing
    this.router.get("/users", AuthController.getAllUsers);
    
    // tes
    this.router.get("/dashboard", (req, res) => {
      res.json({ message: "You are authorized", user: req.user });
    });
  }
}
