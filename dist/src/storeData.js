var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
const prisma = new PrismaClient();
const fetchProductData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get("https://dummyjson.com/products");
        console.log(response.data.products); // Log data to verify
        return response.data.products;
    }
    catch (error) {
        console.error("Error fetching product data:", error);
        return [];
    }
});
const storeData = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield fetchProductData();
    for (const product of products) {
        try {
            yield prisma.product.create({
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
});
storeData()
    .catch((e) => {
    console.error(e);
    prisma.$disconnect();
})
    .finally(() => {
    prisma.$disconnect();
});
//# sourceMappingURL=storeData.js.map