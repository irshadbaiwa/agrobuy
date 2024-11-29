import React, { ComponentProps } from "react";
import { Text } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const textVariants = cva("text-slate-600", {
  variants: {
    variant: {
      default: "font-normal",
      supporting: "text-slate-400",
      link: "text-blue-600",
    },
    size: {
      lg: "text-2xl",
      base: "text-lg",
      sm: "text-base",
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
