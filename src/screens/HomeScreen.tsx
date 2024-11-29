import { Pressable, StyleSheet, View } from "react-native";
import { ScreenLayout } from "../components/layouts/ScreenLayout";
import HeaderText from "../components/typography/Heading";
import { Icon } from "../components/ui/Icon";
import { useNavigation } from "@react-navigation/native";
import { navRoutes } from "../navigation/NavRoutes";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import colors from "tailwindcss/colors";
import { ProductsGrid } from "../components/home/ProductsGrid";
import { CategorySelector } from "../components/home/CategorySelector";

const HomeScreen = () => {
  const nav = useNavigation();
  const goToNotifications = () => {
    // @ts-ignore
    nav.navigate(navRoutes.notification);
  };

  return (
    <ScreenLayout
      title={
        <View className="flex flex-row gap-2 items-baseline">
          <View className="flex-1">
            <HeaderText
              className="font-bold"
              variant="subtitle"
              numberOfLines={1}
            >
              Agrobuy
            </HeaderText>
          </View>
          <Pressable onPress={goToNotifications}>
            <Icon
              name="notifications-outline"
              iconSize="default"
              variant="emphasized"
            />
          </Pressable>
        </View>
      }
    >
      {/* Categories */}
      <CategorySelector />

      {/* Products */}
      <ProductsGrid />
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {},
});

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
