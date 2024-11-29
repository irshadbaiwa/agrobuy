import { navRoutes } from "./NavRoutes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./AppTabNavigator";
import ProductScreen from "../screens/ProductScreen";
import NotificationScreen from "../screens/NotificationScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={navRoutes.appTabs}
      screenOptions={{ headerShown: false, animation: "ios_from_right" }}
    >
      <Stack.Screen name={navRoutes.appTabs} component={TabNavigator} />
      <Stack.Screen name={navRoutes.product} component={ProductScreen} />
      <Stack.Screen
        name={navRoutes.notification}
        component={NotificationScreen}
      />
    </Stack.Navigator>
  );
}
