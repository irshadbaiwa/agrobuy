import { ScrollView, View, Image, Pressable } from "react-native";
import HeaderText from "../typography/Heading";
import CustomText from "../typography/CustomText";
import {
  categoriesQueryKey,
  getCategories,
} from "../../services/categoriesServices";
import { useQuery } from "@tanstack/react-query";
import { Icon } from "../ui/Icon";
import { useRecoilValue } from "recoil";
import { searchQuery } from "../../recoil/atoms";
import { useEffect, useState } from "react";

export const CategoriesFound = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [categoriesQueryKey],
    queryFn: getCategories,
  });

  const search = useRecoilValue(searchQuery);
  const [filteredData, setFilteredData] = useState<string[]>([]);

  useEffect(() => {
    if (!data) return;
    const filtered = data.filter((item: string) =>
      item.toLowerCase().startsWith(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, search]);

  return (
    <View className="mt-4 mb-4">
      <HeaderText variant="subtitle">Categories</HeaderText>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : !filteredData.length ? (
        <EmptyCategories />
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4"
        >
          {filteredData.map((category: string) => (
            <View
              key={category}
              className="rounded-xl p-2 px-4 mr-2 bg-white border border-slate-300 flex flex-col items-center"
            >
              <CustomText
                numberOfLines={1}
                className="font-bold text-lg pr-3 max-w-80"
                variant="emphasized"
              >
                {category}
              </CustomText>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const Loading = () => {
  return (
    <View className="flex flex-row gap-2 mt-4 overflow-hidden">
      <View className="rounded-xl h-12 w-1/2 bg-slate-200 animate-pulse border border-slate-300" />
      <View className="rounded-xl h-12 w-1/2 bg-slate-200 animate-pulse border border-slate-300" />
    </View>
  );
};

const Error = () => {
  return (
    <View className="py-4 px-4 items-center justify-center gap-2">
      <Icon name="warning-outline" variant="error" />
      <CustomText variant="supporting" className="font-semibold text-center">
        Couldn't load categories
      </CustomText>
    </View>
  );
};

const EmptyCategories = () => {
  return (
    <View className="py-4 px-4 items-center justify-center gap-2">
      <Icon name="alert-circle-outline" variant="default" iconSize="lg" />
      <CustomText variant="supporting" className="font-semibold text-center">
        No category found
      </CustomText>
    </View>
  );
};
