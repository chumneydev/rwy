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

export const grey: DesignTokens = {
  default: { value: "#6b7280" },
  "50": { value: "##f9fafb" },
  "100": { value: "#f3f4f6" },
  "200": { value: "#e5e7eb" },
  "300": { value: "#d1d5db" },
  "400": { value: "#9ca3af" },
  "500": { value: "#6b7280" },
  "600": { value: "#4b5563" },
  "700": { value: "#374151" },
  "800": { value: "#1f2937" },
  "900": { value: "#111827" },
};
export const red: DesignTokens = {
  default: { value: "#ef4444" },
  "50": { value: "#fef2f2" },
  "100": { value: "#fee2e2" },
  "200": { value: "#fecaca" },
  "300": { value: "#fca5a5" },
  "400": { value: "#f87171" },
  "500": { value: "#ef4444" },
  "600": { value: "#dc2626" },
  "700": { value: "#b91c1c" },
  "800": { value: "#991b1b" },
  "900": { value: "#7f1d1d" },
};

export const orange: DesignTokens = {
  default: { value: "#f97316" },
  "50": { value: "#fff7ed" },
  "100": { value: "#ffedd5" },
  "200": { value: "#fed7aa" },
  "300": { value: "#fdba74" },
  "400": { value: "#fb923c" },
  "500": { value: "#f97316" },
  "600": { value: "#ea580c" },
  "700": { value: "#c2410c" },
  "800": { value: "#9a3412" },
  "900": { value: "#7c2d12" },
};

export const yellow: DesignTokens = {
  default: { value: "#f59e0b" },
  "50": { value: "#fffbeb" },
  "100": { value: "#fef3c7" },
  "200": { value: "#fde68a" },
  "300": { value: "#fcd34d" },
  "400": { value: "#fbbf24" },
  "500": { value: "#f59e0b" },
  "600": { value: "#d97706" },
  "700": { value: "#b45309" },
  "800": { value: "#92400e" },
  "900": { value: "#78350f" },
};

export const green: DesignTokens = {
  default: { value: "#10b981" },
  "50": { value: "#f0fdf4" },
  "100": { value: "#dcfce7" },
  "200": { value: "#bbf7d0" },
  "300": { value: "#86efac" },
  "400": { value: "#4ade80" },
  "500": { value: "#22c55e" },
  "600": { value: "#16a34a" },
  "700": { value: "#15803d" },
  "800": { value: "#166534" },
  "900": { value: "#14532d" },
};

export const emerald: DesignTokens = {
  default: { value: "#10b981" },
  "50": { value: "#ecfdf5" },
  "100": { value: "#d1fae5" },
  "200": { value: "#a7f3d0" },
  "300": { value: "#6ee7b7" },
  "400": { value: "#34d399" },
  "500": { value: "#10b981" },
  "600": { value: "#059669" },
  "700": { value: "#047857" },
  "800": { value: "#065f46" },
  "900": { value: "#064e3b" },
};

export const sky: DesignTokens = {
  default: { value: "#0ea5e9" },
  "50": { value: "#f0f9ff" },
  "100": { value: "#e0f2fe" },
  "200": { value: "#bae6fd" },
  "300": { value: "#7dd3fc" },
  "400": { value: "#38bdf8" },
  "500": { value: "#0ea5e9" },
  "600": { value: "#0284c7" },
  "700": { value: "#0369a1" },
  "800": { value: "#075985" },
  "900": { value: "#0c4a6e" },
};

export const blue: DesignTokens = {
  default: { value: "#3b82f6" },
  "50": { value: "#eff6ff" },
  "100": { value: "#dbeafe" },
  "200": { value: "#bfdbfe" },
  "300": { value: "#93c5fd" },
  "400": { value: "#60a5fa" },
  "500": { value: "#3b82f6" },
  "600": { value: "#2563eb" },
  "700": { value: "#1d4ed8" },
  "800": { value: "#1e40af" },
  "900": { value: "#1e3a8a" },
};

export const rose: DesignTokens = {
  default: { value: "#f43f5e" },
  "50": { value: "#fff1f2" },
  "100": { value: "#ffe4e6" },
  "200": { value: "#fecdd3" },
  "300": { value: "#fda4af" },
  "400": { value: "#fb7185" },
  "500": { value: "#f43f5e" },
  "600": { value: "#e11d48" },
  "700": { value: "#be123c" },
  "800": { value: "#9f1239" },
  "900": { value: "#881337" },
};

// Brand colors
export const acura: DesignTokens = {
  default: { value: "#e82c2a" },
  "50": { value: "#fad0d0" },
  "100": { value: "#f8bebd" },
  "200": { value: "#f49998" },
  "300": { value: "#f07574" },
  "400": { value: "#ec504f" },
  "500": { value: "#e82c2a" },
  "600": { value: "#c51715" },
  "700": { value: "#921110" },
  "800": { value: "#5f0b0a" },
  "900": { value: "#2d0505" },
};
export const audi: DesignTokens = {
  default: { value: "#000000" },
  "50": { value: "#e6e6e6" },
  "100": { value: "#cccccc" },
  "200": { value: "#999999" },
  "300": { value: "#666666" },
  "400": { value: "#333333" },
  "500": { value: "#000000" },
  "600": { value: "#000000" },
  "700": { value: "#000000" },
  "800": { value: "#000000" },
  "900": { value: "#000000" },
};
export const bmw: DesignTokens = {
  default: { value: "#1c69d3" },
  "50": { value: "#e8f1fc" },
  "100": { value: "#cddff8" },
  "200": { value: "#a0c3f2" },
  "300": { value: "#6fa3ec" },
  "400": { value: "#4286e6" },
  "500": { value: "#1c69d3" },
  "600": { value: "#1755ab" },
  "700": { value: "#113e7e" },
  "800": { value: "#0b2a56" },
  "900": { value: "#051429" },
};
export const buick: DesignTokens = {
  default: { value: "#c9480c" },
  "50": { value: "#fdebe2" },
  "100": { value: "#fcd6c5" },
  "200": { value: "#f8b190" },
  "300": { value: "#f58957" },
  "400": { value: "#f1601d" },
  "500": { value: "#c9480c" },
  "600": { value: "#9f390a" },
  "700": { value: "#782b07" },
  "800": { value: "#521d05" },
  "900": { value: "#260e02" },
};
export const cadillac: DesignTokens = {
  default: { value: "#c37419" },
  "50": { value: "#fcf0e4" },
  "100": { value: "#f9e4cd" },
  "200": { value: "#f2c797" },
  "300": { value: "#ebad65" },
  "400": { value: "#e4902f" },
  "500": { value: "#c37419" },
  "600": { value: "#9a5b14" },
  "700": { value: "#76460f" },
  "800": { value: "#4d2e0a" },
  "900": { value: "#291805" },
};
export const chevrolet: DesignTokens = {
  default: { value: "#cd9834" },
  "50": { value: "#faf5eb" },
  "100": { value: "#f5ead6" },
  "200": { value: "#ebd5ad" },
  "300": { value: "#e1c084" },
  "400": { value: "#d7ac5b" },
  "500": { value: "#cd9834" },
  "600": { value: "#a47928" },
  "700": { value: "#7b5a1e" },
  "800": { value: "#523c14" },
  "900": { value: "#291e0a" },
};

export const chrysler: DesignTokens = {
  default: { value: "#17b4f1" },
  "50": { value: "#e7f7fe" },
  "100": { value: "#cfeffc" },
  "200": { value: "#a4e1f9" },
  "300": { value: "#74d1f7" },
  "400": { value: "#43c2f4" },
  "500": { value: "#17b4f1" },
  "600": { value: "#0c91c5" },
  "700": { value: "#096d95" },
  "800": { value: "#064a65" },
  "900": { value: "#032330" },
};
export const dodge: DesignTokens = {
  default: { value: "#d50000" },
  "50": { value: "#ffe0e0" },
  "100": { value: "#ffc2c2" },
  "200": { value: "#ff8a8a" },
  "300": { value: "#ff4d4d" },
  "400": { value: "#ff0f0f" },
  "500": { value: "#d50000" },
  "600": { value: "#a80000" },
  "700": { value: "#800000" },
  "800": { value: "#570000" },
};
export const ford: DesignTokens = {
  default: { value: "#00095b" },
  "50": { value: "#d6daff" },
  "100": { value: "#adb6ff" },
  "200": { value: "#5768ff" },
  "300": { value: "#051eff" },
  "400": { value: "#0011ad" },
  "500": { value: "#00095b" },
  "600": { value: "#000747" },
  "700": { value: "#000638" },
  "800": { value: "#000424" },
  "900": { value: "#000214" },
};
export const gmc: DesignTokens = {
  default: { value: "#c00000" },
  "50": { value: "#ffe0e0" },
  "100": { value: "#ffc2c2" },
  "200": { value: "#ff8080" },
  "300": { value: "#ff4242" },
  "400": { value: "#ff0000" },
  "500": { value: "#c00000" },
  "600": { value: "#990000" },
  "700": { value: "#750000" },
  "800": { value: "#4d0000" },
  "900": { value: "#290000" },
};

export const honda: DesignTokens = {
  default: { value: "#0283cc" },
  "50": { value: "#e1f4ff" },
  "100": { value: "#c2e8fe" },
  "200": { value: "#86d2fe" },
  "300": { value: "#49bbfd" },
  "400": { value: "#0da5fd" },
  "500": { value: "#0283cc" },
  "600": { value: "#0267a2" },
  "700": { value: "#014d79" },
  "800": { value: "#013351" },
  "900": { value: "#001a28" },
};
export const hyundai: DesignTokens = {
  default: { value: "#002c5e" },
  "50": { value: "#d6e9ff" },
  "100": { value: "#add3ff" },
  "200": { value: "#57a5ff" },
  "300": { value: "#057aff" },
  "400": { value: "#0053b3" },
  "500": { value: "#002c5e" },
  "600": { value: "#00244d" },
  "700": { value: "#001a38" },
  "800": { value: "#001124" },
  "900": { value: "#000a14" },
};
export const infiniti: DesignTokens = {
  default: { value: "#1a1a1a" },
  "50": { value: "#e8e8e8" },
  "100": { value: "#d1d1d1" },
  "200": { value: "#a3a3a3" },
  "300": { value: "#757575" },
  "400": { value: "#474747" },
  "500": { value: "#1a1a1a" },
  "600": { value: "#141414" },
  "700": { value: "#0f0f0f" },
  "800": { value: "#0a0a0a" },
  "900": { value: "#050505" },
};
export const jeep: DesignTokens = {
  default: { value: "#ffba00" },
  "50": { value: "#fff8e5" },
  "100": { value: "#fff1cc" },
  "200": { value: "#ffe499" },
  "300": { value: "#ffd666" },
  "400": { value: "#ffc933" },
  "500": { value: "#ffba00" },
  "600": { value: "#cc9600" },
  "700": { value: "#997000" },
  "800": { value: "#664b00" },
  "900": { value: "#332500" },
};

export const kia: DesignTokens = {
  default: { value: "#05141f" },
  "50": { value: "#d7ebf9" },
  "100": { value: "#acd4f2" },
  "200": { value: "#5dace5" },
  "300": { value: "#1f7ec1" },
  "400": { value: "#124a72" },
  "500": { value: "#05141f" },
  "600": { value: "#04111a" },
  "700": { value: "#030b12" },
  "800": { value: "#02090d" },
  "900": { value: "#010304" },
};
export const lexus: DesignTokens = {
  default: { value: "#000000" },
  "50": { value: "#e6e6e6" },
  "100": { value: "#cccccc" },
  "200": { value: "#999999" },
  "300": { value: "#666666" },
  "400": { value: "#333333" },
  "500": { value: "#000000" },
  "600": { value: "#000000" },
  "700": { value: "#000000" },
  "800": { value: "#000000" },
  "900": { value: "#000000" },
};
export const lincoln: DesignTokens = {
  default: { value: "#f26147" },
  "50": { value: "#feefec" },
  "100": { value: "#fcded9" },
  "200": { value: "#fac2b8" },
  "300": { value: "#f7a191" },
  "400": { value: "#f5806b" },
  "500": { value: "#f26147" },
  "600": { value: "#e93110" },
  "700": { value: "#b0250c" },
  "800": { value: "#771908" },
  "900": { value: "#390c04" },
};
export const mazda: DesignTokens = {
  default: { value: "#101010" },
  "50": { value: "#e8e8e8" },
  "100": { value: "#cfcfcf" },
  "200": { value: "#a1a1a1" },
  "300": { value: "#707070" },
  "400": { value: "#404040" },
  "500": { value: "#101010" },
  "600": { value: "#0d0d0d" },
  "700": { value: "#0a0a0a" },
  "800": { value: "#080808" },
  "900": { value: "#030303" },
};
export const mercedes: DesignTokens = {
  default: { value: "#176db7" },
  "50": { value: "#e4f0fc" },
  "100": { value: "#c9e2f8" },
  "200": { value: "#92c5f1" },
  "300": { value: "#5ca8eb" },
  "400": { value: "#258be4" },
  "500": { value: "#176db7" },
  "600": { value: "#125691" },
  "700": { value: "#0e406d" },
  "800": { value: "#092b49" },
  "900": { value: "#051524" },
};

export const mini: DesignTokens = {
  default: { value: "#ac2430" },
  "50": { value: "#fae6e7" },
  "100": { value: "#f4ccd0" },
  "200": { value: "#ea9aa0" },
  "300": { value: "#df6771" },
  "400": { value: "#d63946" },
  "500": { value: "#ac2430" },
  "600": { value: "#8b1d26" },
  "700": { value: "#65151c" },
  "800": { value: "#430e13" },
  "900": { value: "#220709" },
};
export const mitsubishi: DesignTokens = {
  default: { value: "#ed0000" },
  "50": { value: "#ffe5e5" },
  "100": { value: "#ffc7c7" },
  "200": { value: "#ff9494" },
  "300": { value: "#ff5c5c" },
  "400": { value: "#ff2424" },
  "500": { value: "#ed0000" },
  "600": { value: "#bd0000" },
  "700": { value: "#8f0000" },
  "800": { value: "#610000" },
  "900": { value: "#2e0000" },
};
export const nissan: DesignTokens = {
  default: { value: "#c3002f" },
  "50": { value: "#ffe0e8" },
  "100": { value: "#ffc2d0" },
  "200": { value: "#ff809d" },
  "300": { value: "#ff426e" },
  "400": { value: "#ff053f" },
  "500": { value: "#c3002f" },
  "600": { value: "#9e0025" },
  "700": { value: "#75001b" },
  "800": { value: "#4d0012" },
  "900": { value: "#29000a" },
};
export const ram: DesignTokens = {
  default: { value: "#880d00" },
  "50": { value: "#ffdfdb" },
  "100": { value: "#ffbab3" },
  "200": { value: "#ff7a6b" },
  "300": { value: "#ff351f" },
  "400": { value: "#d11500" },
  "500": { value: "#880d00" },
  "600": { value: "#6b0b00" },
  "700": { value: "#520800" },
  "800": { value: "#380600" },
  "900": { value: "#190300" },
};

export const subaru: DesignTokens = {
  default: { value: "#1971d4" },
  "50": { value: "#e8f2fc" },
  "100": { value: "#cde1f9" },
  "200": { value: "#9fc7f4" },
  "300": { value: "#6da9ee" },
  "400": { value: "#3b8ce8" },
  "500": { value: "#1971d4" },
  "600": { value: "#1459a9" },
  "700": { value: "#0f4480" },
  "800": { value: "#0a2e57" },
  "900": { value: "#051629" },
};
export const toyota: DesignTokens = {
  default: { value: "#e10a1d" },
  "50": { value: "#fee7e9" },
  "100": { value: "#fdc9ce" },
  "200": { value: "#fa949c" },
  "300": { value: "#f8636f" },
  "400": { value: "#f62d3e" },
  "500": { value: "#e10a1d" },
  "600": { value: "#b50816" },
  "700": { value: "#890611" },
  "800": { value: "#58040b" },
  "900": { value: "#2c0205" },
};
export const volvo: DesignTokens = {
  default: { value: "#2a609d" },
  "50": { value: "#e7eff9" },
  "100": { value: "#cfdff2" },
  "200": { value: "#9ebfe5" },
  "300": { value: "#6a9dd7" },
  "400": { value: "#3a7dca" },
  "500": { value: "#2a609d" },
  "600": { value: "#214c7d" },
  "700": { value: "#19385d" },
  "800": { value: "#112740" },
  "900": { value: "#091420" },
};
export const vw: DesignTokens = {
  default: { value: "#003080" },
  "50": { value: "#dbe8ff" },
  "100": { value: "#b3cfff" },
  "200": { value: "#669eff" },
  "300": { value: "#1a6eff" },
  "400": { value: "#004bcc" },
  "500": { value: "#003080" },
  "600": { value: "#002566" },
  "700": { value: "#001c4d" },
  "800": { value: "#001333" },
  "900": { value: "#000919" },
};

export const color = {
  base: {
    white,
    black,
    grey,
    red,
    orange,
    yellow,
    green,
    emerald,
    sky,
    blue,
    rose,
  },
  brand: {
    acura,
    audi,
    bmw,
    buick,
    cadillac,
    chevrolet,
    chrysler,
    dodge,
    ford,
    gmc,
    honda,
    hyundai,
    infiniti,
    jeep,
    kia,
    lexus,
    lincoln,
    mazda,
    mercedes,
    mini,
    mitsubishi,
    nissan,
    ram,
    subaru,
    toyota,
    volvo,
    vw,
  },
};
