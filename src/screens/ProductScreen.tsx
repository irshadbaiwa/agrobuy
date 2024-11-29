import { Pressable, View, Image } from "react-native";
import { ScreenLayout } from "../components/layouts/ScreenLayout";
import HeaderText from "../components/typography/Heading";
import CustomText from "../components/typography/CustomText";
import { Icon } from "../components/ui/Icon";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getProductById, productsQueryKey } from "../services/productsServices";
import colors from "tailwindcss/colors";

const ProductScreen = ({ route }: any) => {
  const nav = useNavigation();
  const productId = route.params.id;

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [productsQueryKey + `_PRODUCT_${productId}`],
    queryFn: () => getProductById(productId),
  });

  if (isLoading) return <Loading />;
  if (error) return <Error refetch={refetch} />;

  return (
    <ScreenLayout
      title={
        <View className="flex flex-row gap-2 items-center">
          <Pressable onPress={nav.goBack}>
            <Icon name="chevron-back" />
          </Pressable>
          <CustomText
            variant="emphasized"
            className="text-lg flex-1"
            numberOfLines={1}
          >
            {data.title}
          </CustomText>
          <Pressable className="bg-green-900 h-11 px-4 py-1 flex flex-row gap-2 items-center justify-center rounded-md">
            <CustomText className="text-white">Order now</CustomText>
            <Icon name="cart-outline" variant="white" />
          </Pressable>
        </View>
      }
    >
      {/* Product Image */}
      <View className="w-full aspect-video rounded-xl bg-white overflow-hidden">
        <Image
          resizeMode="contain"
          source={{ uri: data.image }}
          className="w-full h-full"
        />
      </View>
      <HeaderText className="mt-4" variant="subtitle">
        {data.title}
      </HeaderText>
      <CustomText variant="default" className="mt-8">
        {data.description}
      </CustomText>
      {/* Price */}
      <View style={{ marginTop: 20 }} className="flex flex-col gap-4">
        <View
          style={{
            width: "100%",
            height: 2,
            backgroundColor: colors.gray[200],
          }}
        />
        <View className="flex flex-row items-center justify-center gap-1">
          <HeaderText className="text-green-900 flex-1" variant="subtitle">
            ₦{data.price}
          </HeaderText>
          <Pressable className="bg-green-900 min-h-11 px-4 py-1 flex flex-row gap-2 items-center justify-center rounded-md">
            <CustomText className="text-white text-lg">Order now</CustomText>
            <Icon name="cart-outline" variant="white" iconSize="lg" />
          </Pressable>
        </View>
        <View
          style={{
            width: "100%",
            height: 2,
            backgroundColor: colors.gray[200],
          }}
        />
      </View>
    </ScreenLayout>
  );
};

const Loading = () => {
  return (
    <ScreenLayout
      title={
        <View className="flex flex-row gap-2 items-center justify-between">
          <Pressable>
            <Icon name="chevron-back" />
          </Pressable>
          <View className="flex-1 h-8 w-4/6 bg-slate-200 rounded-md animate-pulse" />
          <View className="w-24 h-11 bg-green-900 rounded-md animate-pulse"></View>
        </View>
      }
    >
      <View className="w-full aspect-video bg-slate-200 rounded-xl animate-pulse" />
      <View style={{ marginTop: 10 }} className="flex flex-col gap-4">
        <View
          style={{ width: "100%", height: 180 }}
          className="w-full aspect-video bg-slate-200 rounded-xl animate-pulse"
        />
        <View className="w-full h-10 mt-4 bg-slate-200 rounded-xl" />
        <View className="w-1/2 h-10 mt-1 bg-slate-200 rounded-xl" />
      </View>
    </ScreenLayout>
  );
};

const Error = ({ refetch }: { refetch: () => void }) => {
  return (
    <View className="flex-1 py-8 px-4 items-center justify-center gap-2">
      <Icon name="warning-outline" variant="error" iconSize="lg" />
      <CustomText variant="supporting" className="font-semibold text-center">
        An error occured while fetching product
      </CustomText>
      <Pressable
        onPress={() => refetch()}
        className="flex flex-row items-center justify-center gap-2"
      >
        <Icon name="reload" variant="link" iconSize="sm" />
        <CustomText variant="link" className="mt-2">
          Retry
        </CustomText>
      </Pressable>
    </View>
  );
};

export default ProductScreen;
