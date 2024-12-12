import { TripModel } from "../models/trip.model.js";

export const TripController = {
  async createTrip(req, res) {
    try {
      const { user_id, start_location, start_time } = req.body;

      const newTrip = await TripModel.createTrip(user_id, start_location, start_time);

      return res.status(201).json({
        message: "Trip created successfully",
        data: newTrip
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  async getAllTrips(req, res) {
    try {
      const trips = await TripModel.getAllTrips();
      return res.status(200).json({
        message: "Trips fetched successfully",
        data: trips
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  async getTripById(req, res) {
    try {
      const { id } = req.params;
      const trip = await TripModel.getTripById(id);
      if (!trip) return res.status(404).json({ error: "Trip not found" });

      return res.status(200).json({
        message: "Trip fetched successfully",
        data: trip
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  async updateTrip(req, res) {
    try {
      const { id } = req.params; 
      const { end_location, end_time } = req.body;

      const updatedTrip = await TripModel.updateTrip(id, end_location, end_time);

      if (!updatedTrip) return res.status(404).json({ error: "Trip not found" });

      return res.status(200).json({
        message: "Trip updated successfully",
        data: updatedTrip,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};
