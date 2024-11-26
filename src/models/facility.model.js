import { client } from "../db.js";

export const FacilityModel = {
  async createFacility(name, facility_type, longitude, latitude) {
    const query = `
      INSERT INTO facilities (name, facility_type, longitude, latitude)
      VALUES ($1, $2, $3, $4)
      RETURNING id, name, facility_type, longitude, latitude;
    `;
    const values = [name, facility_type, longitude, latitude];
    const result = await client.query(query, values);
    return result.rows[0];
  },

  async getAllFacilities() {
    const query = "SELECT id, name, facility_type, longitude, latitude FROM facilities;";
    const result = await client.query(query);
    return result.rows;
  },

  async getFacilityById(id) {
    const query = "SELECT id, name, facility_type, longitude, latitude FROM facilities WHERE id = $1;";
    const result = await client.query(query, [id]);
    return result.rows[0];
  }
};
