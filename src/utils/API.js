import axios from "axios";
const API_URL = `https://course-api.com/react-store-products`;

export async function getAllProducts() {
    try {
        const response = await axios.get(API_URL);
        return response.data.slice(0, 4);
      } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
}

