import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import sunset from "daisyui/src/theming/themes";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css,scss,sass,less,style,stylus}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        sunset: {
          ...sunset,
          "base-100": "#4b5563",
          "secondary":"#6b7280"
        },
      },
      {
        "mytheme": {                          // 自定义主题名
          "primary": "#3D6838", // 按钮、突出显示的文本等
          "secondary": "#D6E8CE", // 界面中的辅助元素
          "accent": "#FDE047", // 用于强调和突出界面的特定部分
          "neutral": "#3D6838", //界面的背景和基础元素；导航栏
          "base-100": "#FFFFFF", // 背景色
          "secondary-content":"#161616"
        },
      },
    ]
  },
};
export default config;