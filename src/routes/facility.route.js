import { Router } from "express";
import { FacilityController } from "../controllers/facility.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";

export class FacilityRoute {
  constructor() {
    this.router = Router();
    this.#initializeRoutes();
  }

  #initializeRoutes() {
    this.router.post("/", AuthMiddleware.verifyToken, FacilityController.createFacility); 
    this.router.get("/", AuthMiddleware.verifyToken, FacilityController.getAllFacilities);
    this.router.get("/:id", AuthMiddleware.verifyToken, FacilityController.getFacilityById);
  }
}
