import { FacilityModel } from "../models/facility.model.js";

export const FacilityController = {
  async createFacility(req, res) {
    try {
      const { name, facility_type, longitude, latitude } = req.body;

      const newFacility = await FacilityModel.createFacility(name, facility_type, longitude, latitude);

      return res.status(201).json({
        message: "Facility created successfully",
        data: newFacility
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  async getAllFacilities(req, res) {
    try {
      const facilities = await FacilityModel.getAllFacilities();
      return res.status(200).json({
        message: "Facilities fetched successfully",
        data: facilities
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  async getFacilityById(req, res) {
    try {
      const { id } = req.params;
      const facility = await FacilityModel.getFacilityById(id);
      if (!facility) return res.status(404).json({ error: "Facility not found" });

      return res.status(200).json({
        message: "Facility fetched successfully",
        data: facility
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
};
