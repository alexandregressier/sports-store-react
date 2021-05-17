import { DataType } from "./domain"

const protocol = "http"
const hostname = "localhost"
const port = 3500

export const RestUrls = {
    [DataType.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
    [DataType.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
}