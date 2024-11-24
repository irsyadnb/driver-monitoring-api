import { Router } from "express";
import { AuthRoute } from "./auth.route.js";

export default class AppRouter {
  constructor() {
    this.router = Router();

    this.router.use("/auth", new AuthRoute().router);
  }

  getRouter() {
    return this.router
  }
}
