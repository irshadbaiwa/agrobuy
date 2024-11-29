import { Pressable, View } from "react-native";
import { ScreenLayout } from "../components/layouts/ScreenLayout";
import HeaderText from "../components/typography/Heading";
import CustomText from "../components/typography/CustomText";
import { Icon } from "../components/ui/Icon";
import { useNavigation } from "@react-navigation/native";

const NotificationScreen = () => {
  const nav = useNavigation();
  return (
    <ScreenLayout
      title={
        <View className="flex flex-row gap-2 items-baseline">
          <Pressable onPress={nav.goBack}>
            <Icon name="chevron-back" />
          </Pressable>
          <HeaderText variant="subtitle">Notifications</HeaderText>
        </View>
      }
    >
      <View className="flex-1 flex flex-col items-center justify-center">
        <Icon name="construct-outline" iconSize="xl" />
        <CustomText>Notifications screen</CustomText>
      </View>
    </ScreenLayout>
  );
};

export default NotificationScreen;
