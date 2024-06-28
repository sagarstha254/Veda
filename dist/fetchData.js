"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const fetchProductData = async () => {
    try {
        const response = await axios_1.default.get("https://dummyjson.com/products");
        return response.data.products;
    }
    catch (error) {
        console.error("Error fetching product data:", error);
        return [];
    }
};
fetchProductData().then((data) => console.log(data));
exports.default = fetchProductData;
