import { HealthReportModel } from "../models/health-report.model.js";

export const HealthReportController = {
  async createHealthReport(req, res) {
    try {
      const { user_id, health_type } = req.body;

      const newHealthReport = await HealthReportModel.createHealthReport(user_id, health_type);

      return res.status(201).json({
        message: "Health report created successfully",
        data: newHealthReport
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  async getAllHealthReports(req, res) {
    try {
      const healthReports = await HealthReportModel.getAllHealthReports();
      return res.status(200).json({
        message: "Health reports fetched successfully",
        data: healthReports
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  async getHealthReportById(req, res) {
    try {
      const { id } = req.params;
      const healthReport = await HealthReportModel.getHealthReportById(id);
      if (!healthReport) return res.status(404).json({ error: "Health report not found" });

      return res.status(200).json({
        message: "Health report fetched successfully",
        data: healthReport
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
};
