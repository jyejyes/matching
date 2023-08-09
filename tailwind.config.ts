import colors from "tailwindcss/colors";
import { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  borderWidth: {
    none: "0",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  theme: {
    screens: {
      mobile: "430px",
    },

    extend: {
      colors: {
        white: "#FFFFFF",
        gray0: "#F8F9FA",
        gray1: "#F1F3F5",
        gray2: "#E9ECEF",
        gray3: "#DEE2E6",
        gray4: "#CED4DA",
        gray5: "#ADB5BD",
        gray6: "#868E96",
        gray7: "#495057",
        gray8: "#343A40",
        gray9: "#212529",
        pointRed: "#E95353",
        pointBlue1: "#00AEE4",
        pointBlue2: "#0077E4",
        pointGrayBlue: "#2F7287",
        kakaoYellow: "#FAEA05",
      },

      fontSize: {
        title: "40px",
        subtitle: "26px",
      },

      fontWeight: {
        extraBold: "900",
        bold: "700",
        semiBold: "600",
        medium: "500",
        regular: "400",
        light: "300",
        extraLight: "200",
      },

      keyframes: ({ theme }) => ({
        rerender: {
          "0%": {
            "border-color": theme("colors.vercel.pink"),
          },
          "40%": {
            "border-color": theme("colors.vercel.pink"),
          },
        },
        highlight: {
          "0%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
          "40%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
        },
        loading: {
          "0%": {
            opacity: ".2",
          },
          "20%": {
            opacity: "1",
            transform: "translateX(1px)",
          },
          to: {
            opacity: ".2",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        translateXReset: {
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeToTransparent: {
          "0%": {
            opacity: "1",
          },
          "40%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
} as Config;
