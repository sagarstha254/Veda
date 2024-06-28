import axios from "axios";

const fetchProductData = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return [];
  }
};
fetchProductData().then((data) => console.log(data));
export default fetchProductData;
