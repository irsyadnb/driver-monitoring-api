import { client } from "../db.js";

export const UserModel = {
  async createUser(name, email, hashedPassword) {
    const query = `
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING id, name, email, created_at;
    `;
    const values = [name, email, hashedPassword];
    const result = await client.query(query, values);
    return result.rows[0];
  },

  async findByEmail(email) {
    const query = "SELECT * FROM users WHERE email = $1;";
    const result = await client.query(query, [email]);
    return result.rows[0];
  },

  async getAllUsers() {
    const query = "SELECT id, name, email, created_at FROM users;";
    const result = await client.query(query);
    return result.rows;
  }
};
