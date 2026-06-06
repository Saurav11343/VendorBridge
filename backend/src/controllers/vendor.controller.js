import Vendor from "../models/vendor.model.js";

export const createVendor = async (req, res) => {
  try {
    const {
      companyName,
      contactPerson,
      email,
      phone,
      gstNumber,
      category,
      address,
    } = req.body;

    const existingVendor = await Vendor.findOne({
      email,
    });

    if (existingVendor) {
      return res.status(400).json({
        success: false,
        message: "Vendor already exists",
      });
    }

    const vendor = await Vendor.create({
      companyName,
      contactPerson,
      email,
      phone,
      gstNumber,
      category,
      address,
    });

    return res.status(201).json({
      success: true,
      vendor,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      vendors,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);

    if (!vendor) {
      return res.status(404).json({
        success: false,
        message: "Vendor not found",
      });
    }

    return res.status(200).json({
      success: true,
      vendor,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      vendor,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateVendorStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const vendor = await Vendor.findByIdAndUpdate(
      req.params.id,
      {
        status,
      },
      {
        new: true,
      },
    );

    return res.status(200).json({
      success: true,
      vendor,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteVendor = async (req, res) => {
  try {
    await Vendor.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Vendor deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const searchVendors = async (req, res) => {
  try {
    const { search, category, status } = req.query;

    const query = {};

    if (search) {
      query.$or = [
        {
          companyName: {
            $regex: search,
            $options: "i",
          },
        },
        {
          contactPerson: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    if (category) {
      query.category = category;
    }

    if (status) {
      query.status = status;
    }

    const vendors = await Vendor.find(query);

    return res.status(200).json({
      success: true,
      vendors,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
