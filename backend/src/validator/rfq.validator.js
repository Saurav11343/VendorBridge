import { z } from "zod";

export const createRFQSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters"),

  description: z.string().trim().min(5, "Description is required"),

  deadline: z.string().datetime("Invalid deadline").or(z.date()),

  attachment: z.string().trim().optional(),

  items: z
    .array(
      z.object({
        itemName: z.string().trim().min(1, "Item name is required"),

        quantity: z
          .number({
            required_error: "Quantity is required",
          })
          .positive("Quantity must be greater than 0"),

        unit: z.string().trim().min(1, "Unit is required"),

        specification: z.string().trim().optional(),
      }),
    )
    .min(1, "At least one item is required"),

  vendorIds: z
    .array(z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid vendor id"))
    .min(1, "At least one vendor must be assigned"),
});
