import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { navRoutes } from "./NavRoutes";
import HomeScreen, { homeScreenOptions } from "../screens/HomeScreen";
import SearchScreen, { searchScreenOptions } from "../screens/SearchScreen";
import TrendScreen, { trendScreenOptions } from "../screens/TrendScreen";
import OrderScreen, { orderScreenOptions } from "../screens/OrderScreen";
import ProfileScreen, { profileScreenOptions } from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={navRoutes.home}
      screenOptions={{
        headerShown: false,
        animation: "fade",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name={navRoutes.home}
        component={HomeScreen}
        options={homeScreenOptions}
      />
      <Tab.Screen
        name={navRoutes.search}
        component={SearchScreen}
        options={searchScreenOptions}
      />
      <Tab.Screen
        name={navRoutes.trends}
        component={TrendScreen}
        options={trendScreenOptions}
      />
      <Tab.Screen
        name={navRoutes.orders}
        component={OrderScreen}
        options={orderScreenOptions}
      />
      <Tab.Screen
        name={navRoutes.profile}
        component={ProfileScreen}
        options={profileScreenOptions}
      />
    </Tab.Navigator>
  );
}
