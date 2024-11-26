import { client } from "../db.js";

export const HealthReportModel = {
  async createHealthReport(user_id, date, health_type) {
    const query = `
      INSERT INTO health_report (user_id, date, health_type)
      VALUES ($1, $2, $3)
      RETURNING id, user_id, date, health_type, created_at, updated_at;
    `;
    const values = [user_id, date, health_type];
    const result = await client.query(query, values);
    return result.rows[0];
  },

  async getAllHealthReports() {
    const query = "SELECT id, user_id, date, health_type, created_at FROM health_report;";
    const result = await client.query(query);
    return result.rows;
  },

  async getHealthReportById(id) {
    const query = "SELECT id, user_id, date, health_type, created_at FROM health_report WHERE id = $1;";
    const result = await client.query(query, [id]);
    return result.rows[0];
  }
};
