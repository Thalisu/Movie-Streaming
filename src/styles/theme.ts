const theme = {
  colors: {
    lightPurple: "#7900C2",
    purple: "#6100C2",
    white70: "rgba(255,255,255,0.7)",
    white100: "rgb(255,255,255)",
    gray: "#969696",
    background: "#21201E",
    whiteLinearGradient:
      "linear-gradient(135deg, #FFFFFF, rgba(255,255,255,0.8))",
    darkGradient:
      "linear-gradient(90deg, rgba(39,35,31,1) 0%, rgba(25,24,23,1) 100%)",
    purpleDarkAngularGradient: "conic-gradient(#191817,#6100C2,#191817)",
    darkTextColor: "#000000",
    whiteTextColor: "#ffffff",
  },
  fonts: {
    poppins: `"Poppins", sans-serif`,
  },
};
type Theme = typeof theme;

export default theme as Theme;
