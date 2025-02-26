import { z } from "zod";




export const productSchema = z.object({
    id: z.number(),
    productName: z.string().max(45).min(2),
    description: z.string().max(120).min(2),
    category: z.array(z.string()),
    img: z.string(),
    link: z.string(),
    price: z.number()
})

