import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050608",
          900: "#0a0d12",
          800: "#121824",
          700: "#1a2333"
        },
        accent: {
          blue: "#4da3ff",
          sea: "#4dd4c6"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"]
      }
    }
  },
  plugins: [typography]
};

export default config;
