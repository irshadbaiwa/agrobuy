import { ScrollView, View } from "react-native";
import { productCategories } from "../../constants/productCategories";
import { CategoryCard } from "../ui/CategroyCard";
import { selectedCategory } from "../../recoil/atoms";
import { useRecoilValue } from "recoil";

export const CategorySelector = () => {
  const categorySelected = useRecoilValue(selectedCategory).title;

  return (
    <View>
      <ScrollView
        nestedScrollEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {Object.keys(productCategories).map((category, index) => (
          <CategoryCard
            key={index}
            {...productCategories[category]}
            isActive={categorySelected === productCategories[category]?.title}
          />
        ))}
      </ScrollView>
    </View>
  );
};
