import { Router } from "express";
import { FacilityController } from "../controllers/facility.controller.js";

export class FacilityRoute {
  constructor() {
    this.router = Router();
    this.#initializeRoutes();
  }

  #initializeRoutes() {
    this.router.post("/", FacilityController.createFacility); 
    this.router.get("/", FacilityController.getAllFacilities);
    this.router.get("/:id", FacilityController.getFacilityById);
  }
}
