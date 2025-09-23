import { Dimensions } from "react-native";

const width = (percentage: number): number => {
  const fullWidth = Dimensions.get("window").width;
  if (percentage >= 100) return fullWidth;
  if (percentage <= 0) return 0;
  return fullWidth * (percentage / 100);
};

const height = (percentage: number): number => {
  const fullHeight = Dimensions.get("window").height;
  if (percentage >= 100) return fullHeight;
  if (percentage <= 0) return 0;
  return fullHeight * (percentage / 100);
};

export { height, width };
