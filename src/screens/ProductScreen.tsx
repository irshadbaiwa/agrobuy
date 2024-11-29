import { Pressable, View } from "react-native";
import { ScreenLayout } from "../components/layouts/ScreenLayout";
import HeaderText from "../components/typography/Heading";
import CustomText from "../components/typography/CustomText";
import { Icon } from "../components/ui/Icon";
import { useNavigation } from "@react-navigation/native";

const ProductScreen = () => {
  const nav = useNavigation();
  return (
    <ScreenLayout
      title={
        <View className="flex flex-row gap-2 items-baseline">
          <Pressable onPress={nav.goBack}>
            <Icon name="chevron-back" />
          </Pressable>
          <HeaderText>Product Name</HeaderText>
        </View>
      }
    >
      <View className="h-screen w-full bg-blue-600 rounded-3xl" />
      <View className="h-screen w-full bg-green-600 rounded-3xl mt-6" />
    </ScreenLayout>
  );
};

export default ProductScreen;
