import { z } from "zod"
import { productSchema } from "./schema"

export type IProduct = z.infer<typeof productSchema>
