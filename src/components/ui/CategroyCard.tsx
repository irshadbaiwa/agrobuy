import { View, Image, ImageSourcePropType, Pressable } from "react-native";
import CustomText from "../typography/CustomText";
import { cn } from "../../lib/utils";
import { useSetRecoilState } from "recoil";
import { selectedCategory } from "../../recoil/atoms";

type CardProps = {
  isActive?: boolean;
  title: string;
  imageSrc: ImageSourcePropType;
  apiCategory: string;
};
export const CategoryCard: React.FC<CardProps> = ({
  isActive = false,
  title,
  imageSrc,
  apiCategory,
}) => {
  const onSelect = useSetRecoilState(selectedCategory);

  return (
    <Pressable
      onPress={() => onSelect({ title, apiCategory })}
      className={cn(
        "p-1 rounded-xl flex flex-row gap-2 items-center border mr-2",
        isActive
          ? "bg-emerald-50 border-green-900"
          : "bg-white border-slate-300"
      )}
    >
      <View className="size-12 rounded-lg overflow-hidden">
        <Image
          resizeMode="contain"
          className="h-full w-full object-contain"
          source={imageSrc}
        />
      </View>
      <CustomText
        numberOfLines={1}
        className="font-bold pr-3 max-w-64"
        variant="emphasized"
      >
        {title}
      </CustomText>
    </Pressable>
  );
};
