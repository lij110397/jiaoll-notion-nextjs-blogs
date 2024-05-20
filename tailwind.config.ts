import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["dark",
      {
        "mytheme": {                          // 自定义主题名
          "primary": "#3D6838",               
          "secondary": "#D6E8CE",              
          "accent": "#ffff",
          "neutral": "#495057",
          "base-100": "#FFFFFF",
          "info": "#ffff",
          "success": "#ffff",
          "warning": "#ffff",
          "error": "#ffff",
        },
      },
    ]
  },
};
export default config;
