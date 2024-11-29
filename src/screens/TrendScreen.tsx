import { View } from "react-native";
import { ScreenLayout } from "../components/layouts/ScreenLayout";
import HeaderText from "../components/typography/Heading";
import CustomText from "../components/typography/CustomText";
import { Icon } from "../components/ui/Icon";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import colors from "tailwindcss/colors";

const TrendScreen = () => {
  return (
    <ScreenLayout
      title={
        <View className="flex flex-row gap-2 items-center">
          <HeaderText>Trend</HeaderText>
          <Icon name="trending-up" />
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

export const trendScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ focused }) => {
    return focused ? (
      <Icon name="trending-up" variant="primary" />
    ) : (
      <Icon name="trending-up" />
    );
  },
  tabBarActiveTintColor: colors.green[900],
};

export default TrendScreen;
