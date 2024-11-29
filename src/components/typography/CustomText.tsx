import React, { ComponentProps } from "react";
import { Text } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const textVariants = cva("text-slate-600 font-medium", {
  variants: {
    variant: {
      default: "font-normal",
      supporting: "text-slate-400",
      link: "text-blue-600",
    },
    size: {
      xl: "text-4xl",
      lg: "text-2xl",
      base: "text-base",
      sm: "text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "base",
  },
});

type CustomProps = {
  children?: React.ReactNode;
  variant?: "default" | "supporting" | "link";
};
type Props = ComponentProps<typeof Text> &
  VariantProps<typeof textVariants> &
  CustomProps;
const CustomText: React.FC<Props> = ({
  children,
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <Text className={cn(textVariants({ variant, size, className }))} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
