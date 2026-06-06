import RFQ from "../models/rfq.model.js";
import RFQItem from "../models/rfqItem.model.js";
import RFQVendor from "../models/rfqVendor.model.js";

export const createRFQ = async (req, res) => {
  try {
    const { title, description, deadline, attachment, items, vendorIds } =
      req.body;

    const rfq = await RFQ.create({
      title,
      description,
      deadline,
      attachment,
      createdBy: req.user._id,
    });

    if (items?.length) {
      const rfqItems = items.map((item) => ({
        rfqId: rfq._id,
        itemName: item.itemName,
        quantity: item.quantity,
        unit: item.unit,
        specification: item.specification,
      }));

      await RFQItem.insertMany(rfqItems);
    }

    if (vendorIds?.length) {
      const rfqVendors = vendorIds.map((vendorId) => ({
        rfqId: rfq._id,
        vendorId,
      }));

      await RFQVendor.insertMany(rfqVendors);
    }

    return res.status(201).json({
      success: true,
      message: "RFQ created successfully",
      rfq,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to create RFQ",
    });
  }
};
