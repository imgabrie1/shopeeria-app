
import { userSchema } from "@/app/profile/schema";
import { z } from "zod";

export type UserData = z.infer<typeof userSchema>

