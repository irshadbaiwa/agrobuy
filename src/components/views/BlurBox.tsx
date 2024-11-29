import React, { ComponentProps } from "react";
import { BlurView } from "expo-blur";
import { cn } from "../../lib/utils";

interface CustomProps {}
type Props = ComponentProps<typeof BlurView> & CustomProps;

export const BlurBox: React.FC<Props> = ({
  children,
  className,
  intensity,
  ...props
}) => {
  return (
    <BlurView
      intensity={intensity ?? 100}
      tint="light"
      experimentalBlurMethod="dimezisBlurView"
      className={cn("overflow-hidden", className)}
      {...props}
    >
      {children}
    </BlurView>
  );
};
