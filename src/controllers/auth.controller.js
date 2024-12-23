import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model.js";
import { JWTUtil } from "../utils/jwt.util.js";

export const AuthController = {
  async register(req, res) {
    try {
      const { name, age, email, password } = req.body;

      const existingUser = await UserModel.findByEmail(email);
      if (existingUser) return res.status(400).json({ error: "Email already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await UserModel.createUser(name, age, email, hashedPassword);

      return res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await UserModel.findByEmail(email);
      if (!user) return res.status(404).json({ error: "User not found" });

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) return res.status(401).json({ error: "Invalid credentials" });

      const token = JWTUtil.generateToken({ id: user.id, email: user.email });

      return res.status(200).json({ message: "Login successful", data: { token, id: user.id, name: user.name } });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async getAllUsers(req, res) {
    try {
      const users = await UserModel.getAllUsers();

      return res.status(200).json({
        message: "Users fetched successfully",
        users,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  async updateProfile(req, res) {
    try {
      const { id } = req.params; 
      const { name, password } = req.body;

      if (!name || !password) {
        return res.status(400).json({ error: "Name and password are required" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const updatedUser = await UserModel.updateUserProfile(id, name, hashedPassword);

      return res.status(200).json({
        message: "Profile updated successfully",
        user: updatedUser,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};
