import { Pressable, View } from "react-native";
import { ScreenLayout } from "../components/layouts/ScreenLayout";
import HeaderText from "../components/typography/Heading";
import { Icon } from "../components/ui/Icon";
import { useNavigation } from "@react-navigation/native";
import { navRoutes } from "../navigation/NavRoutes";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import CustomText from "../components/typography/CustomText";
import colors from "tailwindcss/colors";

const HomeScreen = () => {
  const nav = useNavigation();
  const goToOrders = () => {
    // @ts-ignore
    nav.navigate(navRoutes.orders);
  };
  return (
    <ScreenLayout
      title={
        <View className="flex flex-row gap-2 items-baseline">
          <View className="flex-1">
            <HeaderText numberOfLines={1}>Welcome 👋</HeaderText>
          </View>
          <Pressable onPress={goToOrders}>
            <Icon name="cart-outline" iconSize="lg" />
          </Pressable>
        </View>
      }
    >
      <View className="h-screen w-full bg-blue-600 rounded-3xl" />
      <View className="h-screen w-full bg-green-600 rounded-3xl mt-6" />
    </ScreenLayout>
  );
};

export const homeScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ focused }) => {
    return focused ? (
      <Icon name="home" variant="primary" />
    ) : (
      <Icon name="home-outline" />
    );
  },
  tabBarActiveTintColor: colors.green[900],
};

export default HomeScreen;
