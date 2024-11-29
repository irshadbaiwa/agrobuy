import { Pressable, StyleSheet, TextInput, View } from "react-native";
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
      <Pressable
        style={styles.btn}
        onPress={goToProducts}
        className="h-12 rounded-md flex flex-row items-center justify-center bg-green-900 px-2 py-4"
      >
        <CustomText
          className="text-white font-semibold"
          style={{ color: "white" }}
          numberOfLines={1}
        >
          Products
        </CustomText>
      </Pressable>
      <View className="flex-1 flex flex-col items-center justify-center">
        <Icon name="construct-outline" iconSize="xl" />
        <CustomText>Search</CustomText>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.green[900],
    color: colors.slate[50],
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    height: 36,
    minWidth: 96,
    maxWidth: "100%",
    width: "auto",
  },
});

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
