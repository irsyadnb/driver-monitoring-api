import { Router } from "express";
import { CompanyController } from "../controllers/company.controller.js";

export class CompanyRoute {
  constructor() {
    this.router = Router();
    this.#initializeRoutes();
  }

  #initializeRoutes() {
    this.router.post("/", CompanyController.createCompany); 
    this.router.get("/", CompanyController.getAllCompanies);
    this.router.get("/:id", CompanyController.getCompanyById);
  }
}
