"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables from .env file
const prisma = new client_1.PrismaClient();
const fetchProductData = async () => {
    try {
        const response = await axios_1.default.get("https://dummyjson.com/products");
        console.log(response.data.products); // Log data to verify
        return response.data.products;
    }
    catch (error) {
        console.error("Error fetching product data:", error);
        return [];
    }
};
const storeData = async () => {
    const products = await fetchProductData();
    for (const product of products) {
        try {
            await prisma.product.create({
                data: {
                    title: product.title,
                    description: product.description,
                    category: product.category,
                    price: product.price,
                    discount: product.discountPercentage,
                    rating: product.rating,
                    stock: product.stock,
                    tags: product.tags,
                    sku: product.sku,
                    weight: product.weight,
                    dimensions: product.dimensions,
                    warrantyInformation: product.warrantyInformation,
                    shippingInformation: product.shippingInformation,
                    availabilityStatus: product.availabilityStatus,
                    returnPolicy: product.returnPolicy,
                    minimumOrderQuantity: product.minimumOrderQuantity,
                    meta: product.meta,
                    images: product.images,
                    thumbnail: product.thumbnail,
                },
            });
            console.log(`Product "${product.title}" stored successfully.`);
        }
        catch (error) {
            console.error(`Error storing product "${product.title}":`, error);
        }
    }
};
storeData()
    .catch((e) => {
    console.error(e);
    prisma.$disconnect();
})
    .finally(() => {
    prisma.$disconnect();
});
