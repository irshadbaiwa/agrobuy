import { Pressable, View } from "react-native";
import { ScreenLayout } from "../components/layouts/ScreenLayout";
import HeaderText from "../components/typography/Heading";
import { Icon } from "../components/ui/Icon";
import { useNavigation } from "@react-navigation/native";
import { navRoutes } from "../navigation/NavRoutes";
import CustomText from "../components/typography/CustomText";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import colors from "tailwindcss/colors";

const SearchScreen = () => {
  const navigation = useNavigation();
  const goToProducts = () => {
    // @ts-ignore
    navigation.navigate(navRoutes.product);
  };
  return (
    <ScreenLayout
      title={
        <View className="flex flex-row gap-2 items-baseline">
          <HeaderText>Search</HeaderText>
          <Icon name="search" />
        </View>
      }
    >
      <Pressable onPress={goToProducts}>
        <CustomText>products</CustomText>
      </Pressable>
      <View className="h-screen w-full bg-blue-600 rounded-3xl" />
      <View className="h-screen w-full bg-green-600 rounded-3xl mt-6" />
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
