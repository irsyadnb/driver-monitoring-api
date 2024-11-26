import { Router } from "express";
import { CompanyController } from "../controllers/company.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";

export class CompanyRoute {
  constructor() {
    this.router = Router();
    this.#initializeRoutes();
  }

  #initializeRoutes() {
    this.router.post("/", AuthMiddleware.verifyToken, CompanyController.createCompany); 
    this.router.get("/", AuthMiddleware.verifyToken, CompanyController.getAllCompanies);
    this.router.get("/:id", AuthMiddleware.verifyToken, CompanyController.getCompanyById);
  }
}
