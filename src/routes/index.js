import { Router } from "express";
import { AuthRoute } from "./auth.route.js";
import { VehicleRoute } from "./vehicle.route.js";
import { CompanyRoute } from "./company.route.js";
import { TripRoute } from "./trip.route.js";
import { HealthReportRoute } from "./health-report.route.js";
import { FacilityRoute } from "./facility.route.js";

export default class AppRouter {
  constructor() {
    this.router = Router();

    this.router.use("/auth", new AuthRoute().router);
    this.router.use("/vehicle", new VehicleRoute().router);
    this.router.use("/company", new CompanyRoute().router);
    this.router.use("/trip", new TripRoute().router);
    this.router.use("/health-report", new HealthReportRoute().router);
    this.router.use("/facility", new FacilityRoute().router);
  }

  getRouter() {
    return this.router
  }
}
