import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { navRoutes } from "./NavRoutes";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import TrendScreen from "../screens/TrendScreen";
import OrderScreen from "../screens/OrderScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={navRoutes.home}
      screenOptions={{ headerShown: false, animation: "fade" }}
    >
      <Tab.Screen name={navRoutes.home} component={HomeScreen} />
      <Tab.Screen name={navRoutes.search} component={SearchScreen} />
      <Tab.Screen name={navRoutes.trends} component={TrendScreen} />
      <Tab.Screen name={navRoutes.orders} component={OrderScreen} />
      <Tab.Screen name={navRoutes.profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
