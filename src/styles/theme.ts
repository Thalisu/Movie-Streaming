const theme = {
  colors: {
    lightPurple: "#7900C2",
    purple: "#6100C2",
    white: "#ffffff",
    gray: "#969696",
    background: "#21201E",
    whiteLinearGradient:
      "linear-gradient(135deg, #FFFFFF, rgba(255,255,255,0.8))",
    darkAngularGradient: "conic-gradient(#191817,#37312A,#191817)",
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
