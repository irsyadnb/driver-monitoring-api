import { client } from "../db.js";

export const TripModel = {
  async createTrip(user_id, start_location, start_time) {
    const query = `
      INSERT INTO trip (user_id, start_location, start_time, trip_status)
      VALUES ($1, $2, $3, 'STARTED')
      RETURNING id, user_id, start_location, start_time, trip_status;
    `;
    const values = [user_id, start_location, start_time];
    const result = await client.query(query, values);
    return result.rows[0];
  },

  async getAllTripsByUserId(user_id) {
    const query = "SELECT id, user_id, start_location, end_location, start_time, end_time, trip_status FROM trip WHERE user_id = $1;;";
    const result = await client.query(query, [user_id]);
    return result.rows;
  },

  async getTripById(id) {
    const query = "SELECT id, user_id, start_location, end_location, start_time, end_time, trip_status FROM trip WHERE id = $1;";
    const result = await client.query(query, [id]);
    return result.rows[0];
  },

  async updateTrip(id, end_location, end_time) {
    const query = `
      UPDATE trip
      SET
          end_location = $2,
          end_time = $3,
          trip_status = 'COMPLETED'
      WHERE id = $1
      RETURNING id, user_id, start_location, end_location, start_time, end_time, trip_status;
    `;
    const values = [id, end_location, end_time];
    const result = await client.query(query, values);
    return result.rows[0];
  },
};
