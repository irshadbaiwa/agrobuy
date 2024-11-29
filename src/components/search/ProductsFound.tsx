import { FlatList, ScrollView, View } from "react-native";
import HeaderText from "../typography/Heading";
import CustomText from "../typography/CustomText";
import { useQuery } from "@tanstack/react-query";
import { Icon } from "../ui/Icon";
import { useRecoilValue } from "recoil";
import { searchQuery } from "../../recoil/atoms";
import { ProductCard, ProductCardSkeleton } from "../ui/ProductCard";
import {
  getAllProducts,
  productsQueryKey,
} from "../../services/productsServices";
import { useEffect, useState } from "react";

export const ProductsFound = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [productsQueryKey + "ALL"],
    queryFn: getAllProducts,
  });

  const search = useRecoilValue(searchQuery).toLowerCase();
  const [isFiltering, setIsFiltering] = useState(true);
  const [filteredData, setFilteredData] = useState<
    {
      item: string;
      description: string;
      price: string;
      image: string;
      [key: string]: any;
    }[]
  >([]);

  useEffect(() => {
    if (!data) return;
    setIsFiltering(true);
    const filtered = data.filter(
      (item: {
        title: string;
        category: string;
        apiCategory: string;
        [key: string]: any;
      }) =>
        item.title.toLowerCase().startsWith(search) ||
        item.category.toLowerCase().startsWith(search) ||
        item.apiCategory.toLowerCase().startsWith(search)
    );
    setFilteredData(filtered);
    setIsFiltering(false);
  }, [data, search]);

  return (
    <View className="mt-4">
      <HeaderText variant="subtitle">Products</HeaderText>
      {isLoading || isFiltering ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : !filteredData.length ? (
        <EmptyProducts />
      ) : (
        <FlatList
          data={filteredData}
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
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                imageSrc={{ uri: item.image }}
              />
            </View>
          )}
          nestedScrollEnabled
        />
      )}
    </View>
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

const Error = () => {
  return (
    <View className="py-4 px-4 items-center justify-center gap-2">
      <Icon name="warning-outline" variant="error" />
      <CustomText variant="supporting" className="font-semibold text-center">
        Couldn't load products
      </CustomText>
    </View>
  );
};

const EmptyProducts = () => {
  return (
    <View className="py-4 px-4 items-center justify-center gap-2">
      <Icon name="alert-circle-outline" variant="default" iconSize="lg" />
      <CustomText variant="supporting" className="font-semibold text-center">
        No products found
      </CustomText>
    </View>
  );
};
