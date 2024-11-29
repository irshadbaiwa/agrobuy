import fakeStoreApi from "./axios";
import { categoryMapping } from "./categoriesServices";

export const getProducts = async (category?: string) => {
  const endpoint =
    category && category.toLowerCase() !== "all"
      ? `/products/category/${category}`
      : `/products`;
  const response = await fakeStoreApi.get(endpoint);

  return response.data.map((item: any) => ({
    ...item,
    category: categoryMapping[item.category]?.title || item.category,
    apiCategory: item.category,
  }));
};

export const getProductById = async (id: string) => {
  const response = await fakeStoreApi.get(`/products/${id}`);
  const item = response.data;

  return {
    ...item,
    category: categoryMapping[item.category]?.title || item.category,
    apiCategory: item.category,
  };
};

export const getAllProducts = async () => {
  const response = await fakeStoreApi.get("/products");

  return response.data.map((item: any) => ({
    ...item,
    category: categoryMapping[item.category]?.title || item.category,
    apiCategory: item.category,
  }));
};

export const productsQueryKey = "PRODUCTS";
