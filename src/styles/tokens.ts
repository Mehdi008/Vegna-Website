export const tokens = {
  color: {
    bg: "#F6F1E7",
    surface: "#FFFFFF",
    text: "#111317",
    textMuted: "#374151",
    primary: "#344132",
    accent: "#C9A86A",
    border: "#DFD6C7"
  },
  spacing: {
    sectionY: {
      mobile: "4rem",
      desktop: "7rem"
    }
  },
  radius: {
    card: "1.25rem",
    pill: "9999px"
  },
  motion: {
    duration: {
      micro: 0.25,
      base: 0.45,
      reveal: 0.8
    },
    easing: [0.22, 0.61, 0.36, 1] as [number, number, number, number]
  },
  shadow: {
    premium: "0 24px 80px rgba(17,19,23,0.18)"
  }
} as const;
