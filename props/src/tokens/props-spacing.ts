import { DesignToken, DesignTokens } from "style-dictionary";

import { defaultSpacing } from "./defaults";

const attributes = (group: string) =>
  <Partial<DesignToken>>{
    attributes: {
      category: "space",
      group,
    },
  };

// Margin tokens
export const margin: DesignTokens = {
  ...Object.entries(defaultSpacing).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [`${key}`]: {
        value,
      },
    }),
    {}
  ),
};

// Padding tokens
export const padding: DesignTokens = {
  ...Object.entries(defaultSpacing).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [`${key}`]: {
        value,
      },
    }),
    {}
  ),
};

// Gap tokens
export const gap: DesignTokens = {
  ...Object.entries(defaultSpacing).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [`${key}`]: {
        value,
      },
    }),
    {}
  ),
};

export const spacing = {
  margin,
  padding,
  gap,
};
