import { z } from "zod";

export const userSchema = z.object({
    email: z.string().email("email inválido"),

    name: z.string().min(3, "nome muito curto").max(255, "nome muito longo"),

    password: z.string().min(6, "senha muito curta").max(255, "senha muito longa"),

    admin: z.boolean().default(false),

    // favorites: Favorite[],

    // createdAt: Date | string,

    // updatedAt: Date | string,

    // deletedAt: Date | string,

})