import { Router } from "express";

export class AuthRoute {
  constructor() {
    this.router = Router();
    this.#initializeRoutes();
  }

  #initializeRoutes() {
    this.router.post("/register", (req, res) => {});

    this.router.post("/login", (req, res) => {});

    this.router.post("/logout", (req, res) => {});

    this.router.post("/refresh-token", (req, res) => {});
  }
}
