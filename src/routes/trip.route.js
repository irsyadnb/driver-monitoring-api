import { Router } from "express";
import { TripController } from "../controllers/trip.controller.js";

export class TripRoute {
  constructor() {
    this.router = Router();
    this.#initializeRoutes();
  }

  #initializeRoutes() {
    this.router.post("/", TripController.createTrip);  
    this.router.get("/", TripController.getAllTrips); 
    this.router.get("/:id", TripController.getTripById);
  }
}
