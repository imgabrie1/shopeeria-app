import { loginSchema } from "@/schemas/login.schema";
import { z } from "zod";

export type LoginData = z.infer<typeof loginSchema>