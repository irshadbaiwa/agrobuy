import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// tailwind className
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
