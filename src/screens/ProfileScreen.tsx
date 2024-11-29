import { View } from "react-native";
import { ScreenLayout } from "../components/layouts/ScreenLayout";
import HeaderText from "../components/typography/Heading";
import CustomText from "../components/typography/CustomText";
import { Icon } from "../components/ui/Icon";

const ProfileScreen = () => {
  return (
    <ScreenLayout
      title={
        <View className="flex flex-row gap-2 items-baseline">
          <HeaderText>Profile</HeaderText>
          <Icon name="person-circle-outline" />
        </View>
      }
    >
      <View className="flex-1 flex flex-col items-center justify-center">
        <Icon name="construct-outline" iconSize="xl" />
        <CustomText>Under development</CustomText>
      </View>
    </ScreenLayout>
  );
};

export default ProfileScreen;
