import { TripModel } from "../models/trip.model.js";

export const TripController = {
  async createTrip(req, res) {
    try {
      const { user_id, start_location, end_location, start_time, end_time, trip_status } = req.body;

      const newTrip = await TripModel.createTrip(user_id, start_location, end_location, start_time, end_time, trip_status);

      return res.status(201).json({
        message: "Trip created successfully",
        trip: newTrip
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  async getAllTrips(req, res) {
    try {
      const trips = await TripModel.getAllTrips();
      return res.status(200).json({
        message: "Trips fetched successfully",
        trips
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  async getTripById(req, res) {
    try {
      const { id } = req.params;
      const trip = await TripModel.getTripById(id);
      if (!trip) return res.status(404).json({ message: "Trip not found" });

      return res.status(200).json({
        message: "Trip fetched successfully",
        trip
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};