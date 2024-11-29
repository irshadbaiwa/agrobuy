import { ImageSourcePropType } from "react-native";

export const productCategories: Record<
  "all" | "oil" | "meat" | "fruits" | "bakery" | string,
  { title: string; imageSrc: ImageSourcePropType; apiCategory: string }
> = {
  all: {
    title: "All",
    imageSrc: require("../../assets/categories/fruits.png"),
    apiCategory: "all",
  },
  oil: {
    title: "Cooking Oil & Ghee",
    imageSrc: require("../../assets/categories/oil.png"),
    apiCategory: "jewelery",
  },
  meat: {
    title: "Meat & Fish",
    imageSrc: require("../../assets/categories/meat.png"),
    apiCategory: "electronics",
  },
  fruits: {
    title: "Fresh Fruits & Vegetable",
    imageSrc: require("../../assets/categories/fruits.png"),
    apiCategory: "women's clothing",
  },
  bakery: {
    title: "Bakery & Snacks",
    imageSrc: require("../../assets/categories/bakery.png"),
    apiCategory: "men's clothing",
  },
};
