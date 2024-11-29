import React, { ReactNode, ComponentProps, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  View,
  LayoutChangeEvent,
  RefreshControl,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Heading from "../typography/Heading";
import { BlurBox } from "../views/BlurBox";
import { DIMENSIONS } from "../../constants/dimensions";

type CustomProps = {
  title?: ReactNode;
  onRefresh?: () => void;
  [x: string]: any;
};
type Props = ComponentProps<typeof SafeAreaView> & CustomProps;

export const ScreenLayout: React.FC<Props> = ({
  children,
  title,
  onRefresh,
  ...props
}) => {
  const insets = useSafeAreaInsets();
  const [headerDimensions, setHeaderDimensions] = useState({
    width: 0,
    height: 0,
  });

  const [refreshingPage, setRefreshingPage] = useState(false);
  const onRefreshPage = React.useCallback(async () => {
    setRefreshingPage(true);
    if (onRefresh !== undefined) onRefresh();
    setRefreshingPage(false);
  }, []);

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: insets.left + DIMENSIONS.screenGutter,
        paddingBottom: 0,
        flex: 1,
        position: "relative",
      }}
      className="bg-slate-200"
      {...props}
    >
      <StatusBar style="dark" />
      {title && (
        <BlurBox
          className="absolute top-0 z-40 pb-2 border border-b-gray-200 w-screen left-0 right-0"
          style={{
            paddingHorizontal: DIMENSIONS.screenGutter,
            paddingTop: insets.top + DIMENSIONS.screenGutter * 2,
          }}
        >
          <View
            onLayout={(event: LayoutChangeEvent) => {
              setHeaderDimensions({
                width: event.nativeEvent.layout.width,
                height: event.nativeEvent.layout.height,
              });
            }}
          >
            {typeof title === "string" ? <Heading>{title}</Heading> : title}
          </View>
        </BlurBox>
      )}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: headerDimensions.height + DIMENSIONS.screenGutter * 3,
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshingPage}
            onRefresh={onRefreshPage}
          />
        }
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
