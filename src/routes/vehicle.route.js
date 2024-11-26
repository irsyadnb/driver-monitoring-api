import { Router } from "express";
import { VehicleController } from "../controllers/vehicle.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";

export class VehicleRoute {
  constructor() {
    this.router = Router();
    this.#initializeRoutes();
  }

  #initializeRoutes() {
    this.router.post("/", AuthMiddleware.verifyToken, VehicleController.createVehicle);  
    this.router.get("/", AuthMiddleware.verifyToken, VehicleController.getAllVehicles); 
    this.router.get("/:id", AuthMiddleware.verifyToken, VehicleController.getVehicleById); 
  }
}
