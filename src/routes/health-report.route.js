import { Router } from "express";
import { HealthReportController } from "../controllers/health-report.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";

export class HealthReportRoute {
  constructor() {
    this.router = Router();
    this.#initializeRoutes();
  }

  #initializeRoutes() {
    this.router.post("/", AuthMiddleware.verifyToken, HealthReportController.createHealthReport);
    this.router.get("/", AuthMiddleware.verifyToken, HealthReportController.getAllHealthReports);
    this.router.get("/:id", AuthMiddleware.verifyToken, HealthReportController.getHealthReportById);
  }
}
