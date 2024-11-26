import { client } from "../db.js";

export const VehicleModel = {
  async createVehicle(name, plat_nomor, company_id) {
    const query = `
      INSERT INTO vehicle (name, plat_nomor, company_id)
      VALUES ($1, $2, $3)
      RETURNING id, name, plat_nomor, company_id;
    `;
    const values = [name, plat_nomor, company_id];
    const result = await client.query(query, values);
    return result.rows[0];
  },

  async getAllVehicles() {
    const query = "SELECT id, name, plat_nomor, company_id FROM vehicle;";
    const result = await client.query(query);
    return result.rows;
  },

  async getVehicleById(id) {
    const query = "SELECT id, name, plat_nomor, company_id FROM vehicle WHERE id = $1;";
    const result = await client.query(query, [id]);
    return result.rows[0];
  }
};
