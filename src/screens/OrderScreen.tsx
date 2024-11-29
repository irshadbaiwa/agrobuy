import { View } from "react-native";
import { ScreenLayout } from "../components/layouts/ScreenLayout";
import HeaderText from "../components/typography/Heading";
import CustomText from "../components/typography/CustomText";
import { Icon } from "../components/ui/Icon";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import colors from "tailwindcss/colors";

const OrderScreen = () => {
  return (
    <ScreenLayout
      title={
        <View className="flex flex-row gap-2 items-baseline">
          <HeaderText>Orders</HeaderText>
          <Icon name="cart-outline" />
        </View>
      }
    >
      <View className="flex-1 flex flex-col items-center justify-center">
        <Icon name="construct-outline" iconSize="xl" />
        <CustomText>Under development</CustomText>
      </View>
    </ScreenLayout>
  );
};

export const orderScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ focused }) => {
    return focused ? (
      <Icon name="cart" variant="primary" />
    ) : (
      <Icon name="cart-outline" />
    );
  },
  tabBarActiveTintColor: colors.green[900],
};

export default OrderScreen;
