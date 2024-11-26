import { CompanyModel } from "../models/company.model.js";

export const CompanyController = {
  async createCompany(req, res) {
    try {
      const { name, phone_number } = req.body;

      const newCompany = await CompanyModel.createCompany(name, phone_number);

      return res.status(201).json({
        message: "Company created successfully",
        company: newCompany
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  async getAllCompanies(req, res) {
    try {
      const companies = await CompanyModel.getAllCompanies();
      return res.status(200).json({
        message: "Companies fetched successfully",
        companies
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  async getCompanyById(req, res) {
    try {
      const { id } = req.params;
      const company = await CompanyModel.getCompanyById(id);
      if (!company) return res.status(404).json({ message: "Company not found" });

      return res.status(200).json({
        message: "Company fetched successfully",
        company
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};
