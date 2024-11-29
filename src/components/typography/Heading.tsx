import React, { ComponentProps } from "react";
import { Text } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const headingVariants = cva("font-bold text-gray-900 tracking-tighter", {
  variants: {
    variant: {
      title: "text-4xl",
      subtitle: "text-2xl",
    },
  },
  defaultVariants: {
    variant: "title",
  },
});

type CustomProps = {
  children?: React.ReactNode;
  variant?: "title" | "subtitle";
};
type Props = ComponentProps<typeof Text> &
  VariantProps<typeof headingVariants> &
  CustomProps;

const HeaderText: React.FC<Props> = ({
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <Text className={cn(headingVariants({ variant, className }))} {...props}>
      {children}
    </Text>
  );
};

export default HeaderText;
