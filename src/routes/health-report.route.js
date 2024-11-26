import { Router } from "express";
import { HealthReportController } from "../controllers/health-report.controller.js";

export class HealthReportRoute {
  constructor() {
    this.router = Router();
    this.#initializeRoutes();
  }

  #initializeRoutes() {
    this.router.post("/", HealthReportController.createHealthReport);
    this.router.get("/", HealthReportController.getAllHealthReports);
    this.router.get("/:id", HealthReportController.getHealthReportById);
  }
}
