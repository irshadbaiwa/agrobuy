import { atom } from "recoil";

export const selectedCategory = atom<{ title: string; apiCategory: string }>({
  key: "SELECTED_CATEGORY",
  default: { title: "All", apiCategory: "all" },
});
