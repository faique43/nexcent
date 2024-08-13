import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF4F",
        secondary: "#263238",
        info: "#2194F3",
        darkGrey: "#4d4d4d",
        grey: "#717171",
        lightGrey: "#89939E",
        greyBlue: "#ABBED1",
        silver: "#F5F7FA",
        green: {
          shade1: "#43A046",
          shade2: "#388E3B",
          shade3: "#237D31",
          shade4: "#1B5E1F",
          shade5: "#103E13",
          tint1: "#66BB69",
          tint2: "#81C784",
          tint3: "#A5D6A7",
          tint4: "#C8E6C9",
          tint5: "#E8F5E9"
        },
        action: {
          warning: "#FBC02D",
          error: "#E53835",
          success: "#2E7D31"
        },
        buttons: {
          primary: {
            DEFAULT: "#4CAF4F",
            focus: "#388E3B",
            disabled: "#F5F7FA"
          },
          secondary: {
            DEFAULT: "#FFFFFF",
            focus: "#F5F7FA",
            disabled: "#F5F7FA"
          },
          tertiary: {
            DEFAULT: "transparent",
            hover: "#F5F7FA",
            active: "#E8F5E9",
            disabled: "#F5F7FA"
          }
        },
        buttonFont: {
          primary: {
            DEFAULT: "#FFFFFF",
            focus: "#FFFFFF",
            disabled: "#ABBED1"
          },
          secondary: {
            DEFAULT: "#4CAF4F",
            focus: "#4CAF4F",
            disabled: "#ABBED1"
          },
          tertiary: {
            DEFAULT: "#4CAF4F",
            hover: "#4CAF4F",
            active: "#4CAF4F",
            disabled: "#ABBED1"
          }
        },
        buttonBorder: {
          primary: {
            focus: "#4D4D4D"
          },
          secondary: {
            DEFAULT: "#4CAF4F",
            hover: "#4CAF4F",
            focus: "#89939E"
          },
          tertiary: {
            focus: "#4D4D4D"
          }
        }
      },
      fontSize: {
        small: "14px",
        medium: "16px",
        large: "18px"
      },
      padding: {
        small: "8px 24px",
        medium: "14px 32px",
        large: "16px 32px"
      },
      borderRadius: {
        btn: "4px"
      },
      borderWidth: {
        btn: "2px"
      },
      cursor: {
        loading: "progress",
        disabled: "not-allowed"
      }
    }
  },
  plugins: []
};

export default config;
