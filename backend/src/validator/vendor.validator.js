import { z } from "zod";

export const vendorSchema = z.object({
  companyName: z
    .string()
    .trim()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name cannot exceed 100 characters"),

  contactPerson: z
    .string()
    .trim()
    .min(2, "Contact person name must be at least 2 characters")
    .max(50, "Contact person name cannot exceed 50 characters"),

  email: z.string().trim().email("Invalid email address"),

  phone: z
    .string()
    .trim()
    .regex(
      /^[6-9]\d{9}$/,
      "Phone number must be a valid 10-digit Indian mobile number",
    ),

  gstNumber: z
    .string()
    .trim()
    .regex(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      "Invalid GST number",
    ),

  category: z.string().trim().min(2, "Category is required"),

  address: z
    .string()
    .trim()
    .min(5, "Address must be at least 5 characters")
    .max(300, "Address cannot exceed 300 characters"),

  rating: z.number().min(0).max(5).optional(),

  status: z.enum(["active", "inactive", "blocked"]).optional(),
});
