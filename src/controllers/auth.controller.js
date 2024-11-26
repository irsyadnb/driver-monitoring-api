import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model.js";
import { JWTUtil } from "../utils/jwt.util.js";

export const AuthController = {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      const existingUser = await UserModel.findByEmail(email);
      if (existingUser) return res.status(400).json({ message: "Email already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await UserModel.createUser(name, email, hashedPassword);

      return res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await UserModel.findByEmail(email);
      if (!user) return res.status(404).json({ message: "User not found" });

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) return res.status(401).json({ message: "Invalid credentials" });

      const token = JWTUtil.generateToken({ id: user.id, email: user.email });

      return res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
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
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};
