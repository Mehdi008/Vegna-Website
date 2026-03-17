import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#111317",
        "olive-deep": "#344132",
        "sand-warm": "#E8DCC9",
        "brand-gold": "#C9A86A",
        "cream-light": "#F6F1E7"
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Inter'", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(17,19,23,0.18)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
