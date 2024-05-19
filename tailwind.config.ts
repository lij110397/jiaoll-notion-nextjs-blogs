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
        'mytheme': {                          // 自定义主题名
          'primary': '#3D6838',               // 主色
          'primary-content': '#ffffff',            // 白色做为主色文字色
          'secondary': '#D6E8CE',              // 浅色
          'secondary-content': '#3D6838',
          'neutral': '#F6F8F9'
          // 'primary-focus': '#4506cb',         // 主色加深
        },
      },
    ]
  },
};
export default config;
