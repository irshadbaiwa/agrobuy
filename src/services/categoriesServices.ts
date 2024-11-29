import { productCategories } from "../constants/productCategories";
import fakeStoreApi from "./axios";

export const categoryMapping: { [key: string]: any } = {
  "men's clothing": productCategories.bakery,
  "women's clothing": productCategories.fruits,
  electronics: productCategories.meat,
  jewelery: productCategories.oil,
};

export const getCategories = async () => {
  const response = await fakeStoreApi.get("/products/categories");

  return response.data;
};

export const categoriesQueryKey = "CATEGORIES";
