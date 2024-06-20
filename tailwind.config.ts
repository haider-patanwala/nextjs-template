import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@vidstack/react/tailwind.cjs")({
      // selector: ".media-player",
      prefix: "media",
    }),
    // customVariants,
  ],
}

// function customVariants({ addVariant, matchVariant }: any) {
//   // Strict version of `.group` to help with nesting.
//   matchVariant("parent-data", (value: any) => `.parent[data-${value}] > &`)

//   addVariant("hocus", ["&:hover", "&:focus-visible"])
//   addVariant("group-hocus", [".group:hover &", ".group:focus-visible &"])
// }
export default config
