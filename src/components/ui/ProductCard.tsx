import {
  Alert,
  Image,
  ImageSourcePropType,
  Pressable,
  View,
} from "react-native";
import CustomText from "../typography/CustomText";
import { Icon } from "./Icon";
import HeaderText from "../typography/Heading";
import { useNavigation } from "@react-navigation/native";
import { navRoutes } from "../../navigation/NavRoutes";

type CardProps = {
  title: string;
  description: string;
  price: string | number;
  imageSrc: ImageSourcePropType;
};

export const ProductCard: React.FC<CardProps> = ({
  title,
  description,
  price,
  imageSrc,
}) => {
  const nav = useNavigation();
  const viewProduct = () => {
    // @ts-ignore
    nav.navigate(navRoutes.product);
  };

  const addToCart = () => Alert.alert("Add to cart");

  return (
    <Pressable
      onPress={viewProduct}
      className="p-2 bg-white rounded-xl gap-3 border border-slate-200"
    >
      <View className="w-full aspect-video rounded-lg overflow-hidden">
        <Image
          resizeMode="contain"
          className="w-full h-full"
          source={imageSrc}
        />
      </View>
      <View className="w-full mt-1 px-1 h-20">
        <CustomText
          variant="emphasized"
          className="shrink-0 text-lg"
          numberOfLines={1}
        >
          {title}
        </CustomText>
        <CustomText
          variant="supporting"
          className="flex-1"
          size="sm"
          numberOfLines={2}
        >
          {description}
        </CustomText>
      </View>
      <View className="flex flex-row gap-2 w-full justify-between items-end mt-1 px-1">
        <HeaderText className="text-green-900" variant="subtitle">
          N{price}
        </HeaderText>
        <Pressable
          onPress={addToCart}
          className="bg-green-900 px-2 py-1 rounded-md"
        >
          <Icon name="add" variant="white" />
        </Pressable>
      </View>
    </Pressable>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <View className="p-2 bg-white rounded-xl gap-3 border border-slate-200 animate-pulse">
      <View className="w-full aspect-video bg-slate-200 rounded-lg overflow-hidden " />
      <View className="w-full mt-1 px-1 pb-3">
        <View className="h-6 w-full bg-slate-200 rounded-full" />
        <View className="h-4 w-1/2 mt-1 bg-slate-200 rounded-full" />
      </View>
      <View className="flex flex-row justify-end items-center gap-4 pb-2">
        <View className="size-12 rounded-md bg-slate-200" />
      </View>
    </View>
  );
};
