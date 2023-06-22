import { DesignToken, DesignTokens } from "style-dictionary";

import { defaultSpacing } from "./defaults";

const attributes = (group: string) =>
  <Partial<DesignToken>>{
    attributes: {
      category: "space",
      group,
    },
  };

export const white = { value: "#ffffff" };
export const black = { value: "#000000" };

export const breakpoint: DesignTokens = {
  sm: { value: "640px" },
  md: { value: "768px" },
  lg: { value: "1024px" },
  xl: { value: "1280px" },
  xxl: { value: "1536px" },
};
