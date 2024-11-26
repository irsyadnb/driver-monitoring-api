import { client } from "../db.js";

export const CompanyModel = {
  async createCompany(name, phone_number) {
    const query = `
      INSERT INTO company (name, phone_number)
      VALUES ($1, $2)
      RETURNING id, name, phone_number;
    `;
    const values = [name, phone_number];
    const result = await client.query(query, values);
    return result.rows[0];
  },

  async getAllCompanies() {
    const query = "SELECT id, name, phone_number FROM company;";
    const result = await client.query(query);
    return result.rows;
  },

  async getCompanyById(id) {
    const query = "SELECT id, name, phone_number FROM company WHERE id = $1;";
    const result = await client.query(query, [id]);
    return result.rows[0];
  }
};
