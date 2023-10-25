import { z } from "zod";

export const validationSchema = z.object({
  name: z.string().nonempty("name is required").min(4, "at least 4 character"),
  email: z.string().nonempty("email is required").email("valid email only"),
  phone: z.string().nonempty("phone number is required"),
  plan: z.union([z.literal("Arcade"), z.literal("Advanced"), z.literal("Pro")]),
  planLength: z.boolean(),
  isLargerStorage: z.boolean(),
  isCustomizableProfile: z.boolean(),
  isOnlineService: z.boolean(),
});
