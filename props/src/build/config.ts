import { Config } from "style-dictionary";
import { TransformedToken } from "style-dictionary";

export const config: Config = {
  source: ["src/tokens"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/css/",
      prefix: "rwy",
      files: [
        {
          destination: "rwy-props.css",
          format: "css/variables",
          options: {
            selector: ":where(#rwy)",
          },
        },
      ],
    },
    scss: {
      transformGroup: "scss",
      buildPath: "dist/scss/",
      prefix: "rwy",
      files: [
        {
          destination: "_props.scss",
          format: "scss/map-deep",
        },
        {
          destination: "_props-spacing.scss",
          format: "scss/map-deep",
          filter: (token: TransformedToken) => token.attributes?.category === "spacing",
        },
        {
          destination: "_props-breakpoint.scss",
          format: "scss/map-deep",
          filter: (token: TransformedToken) => token.attributes?.category === "breakpoint",
        },
        {
          destination: "_props-color.scss",
          format: "scss/map-deep",
          filter: (token: TransformedToken) => token.attributes?.category === "color",
        },
      ],
    },
  },
};
