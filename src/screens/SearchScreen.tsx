import { Pressable, TextInput, View } from "react-native";
import { ScreenLayout } from "../components/layouts/ScreenLayout";
import { Icon } from "../components/ui/Icon";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import colors from "tailwindcss/colors";
import { useRecoilState } from "recoil";
import { searchQuery } from "../recoil/atoms";
import { CategoriesFound } from "../components/search/CategoriesFound";
import { ProductsFound } from "../components/search/ProductsFound";

const SearchScreen = () => {
  const [search, setSearch] = useRecoilState(searchQuery);

  return (
    <ScreenLayout
      title={
        <View className="flex flex-row gap-2 items-center">
          <TextInput
            placeholder="Search..."
            className="h-11 px-2 border border-slate-300 rounded-md flex-1"
            onChangeText={setSearch}
            value={search}
          />
          <Pressable className="h-full bg-white border border-slate-300 px-2 py-1 items-center justify-center rounded-md">
            <Icon name="filter-outline" variant="primary" />
          </Pressable>
        </View>
      }
    >
      <CategoriesFound />
      <ProductsFound />
    </ScreenLayout>
  );
};

export const searchScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ focused }) => {
    return focused ? (
      <Icon name="search" variant="primary" />
    ) : (
      <Icon name="search-outline" />
    );
  },
  tabBarActiveTintColor: colors.green[900],
};

export default SearchScreen;
