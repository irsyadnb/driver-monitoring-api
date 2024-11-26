import { Router } from "express";
import { VehicleController } from "../controllers/vehicle.controller.js";

export class VehicleRoute {
  constructor() {
    this.router = Router();
    this.#initializeRoutes();
  }

  #initializeRoutes() {
    this.router.post("/", VehicleController.createVehicle);  
    this.router.get("/", VehicleController.getAllVehicles); 
    this.router.get("/:id", VehicleController.getVehicleById); 
  }
}
