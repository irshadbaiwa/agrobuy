import { ComponentProps } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "tailwindcss/colors";

const sizes: Record<string, number> = {
  default: 24,
  xs: 16,
  sm: 20,
  lg: 32,
  xl: 40,
};
const colorVariants: Record<string, string> = {
  default: colors.slate[400],
  link: colors.blue[600],
};

type IconProps = {
  iconSize?: "default" | "lg" | "sm" | "xl" | "xs";
};

export const Icon: React.FC<IconProps & ComponentProps<typeof Ionicons>> = ({
  iconSize = "default",
  name,
  ...props
}) => {
  return (
    <Ionicons
      size={sizes[iconSize] ?? 24}
      name={name}
      color={colors.slate[400]}
      {...props}
    />
  );
};
