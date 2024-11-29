import { navRoutes } from "./NavRoutes";
import ProfileScreen from "../screens/ProfileScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./AppTabNavigator";
import ProductScreen from "../screens/ProductScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={navRoutes.appTabs}
      screenOptions={{ headerShown: false, animation: "ios_from_right" }}
    >
      <Stack.Screen name={navRoutes.appTabs} component={TabNavigator} />
      <Stack.Screen name={navRoutes.product} component={ProductScreen} />
    </Stack.Navigator>
  );
}
