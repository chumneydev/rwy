import { FormatterArguments } from "style-dictionary/types/Format";
import StyleDictionaryBase, { TransformedToken } from "style-dictionary";

// This is the base config for all platforms
import { config } from "./config";

const sd = StyleDictionaryBase.extend(config);
const fileHeader = sd.formatHelpers.fileHeader;

// Begin build/props-build.ts
console.log("Building Rwy props...");
sd.buildAllPlatforms();
console.log("\nDone building Rwy props.");
