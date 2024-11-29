import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getProducts, productsQueryKey } from "../../services/productsServices";
import { FlatList, Pressable, View } from "react-native";
import CustomText from "../typography/CustomText";
import { ProductCard, ProductCardSkeleton } from "../ui/ProductCard";
import { Icon } from "../ui/Icon";
import { useRecoilValue } from "recoil";
import { selectedCategory } from "../../recoil/atoms";

export const ProductsGrid = () => {
  const nav = useNavigation();

  const category = useRecoilValue(selectedCategory).apiCategory;

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [productsQueryKey + category],
    queryFn: () => getProducts(category),
  });

  if (isLoading) return <Loading />;
  if (error) return <Error refetch={refetch} />;
  if (!data.length) return <EmptyProduct />;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between",
        marginBottom: 8,
      }}
      contentContainerStyle={{ marginTop: 10 }}
      renderItem={({ item }) => (
        <View style={{ flex: 1, marginHorizontal: 4 }}>
          <ProductCard
            title={item.title}
            description={item.description}
            price={item.price}
            imageSrc={{ uri: item.image }}
          />
        </View>
      )}
      nestedScrollEnabled
    />
  );
};

const Loading = () => {
  return (
    <View style={{ marginTop: 10 }} className="flex flex-row flex-wrap -mx-2">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <View key={index} className="w-1/2 px-2 mb-4">
            <ProductCardSkeleton />
          </View>
        ))}
    </View>
  );
};

const Error = ({ refetch }: { refetch: () => void }) => {
  return (
    <View className="flex-1 py-8 px-4 items-center justify-center gap-2">
      <Icon name="warning-outline" variant="error" iconSize="lg" />
      <CustomText variant="supporting" className="font-semibold text-center">
        An error occured while fetching products
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

const EmptyProduct = () => {
  return (
    <View className="flex-1 py-8 px-4 items-center justify-center gap-2">
      <Icon name="cart-outline" variant="default" iconSize="lg" />
      <CustomText variant="supporting" className="font-semibold text-center">
        No product found
      </CustomText>
    </View>
  );
};
