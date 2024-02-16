const theme = {
  colors: {
    lightPurple: "#7900C2",
    purple: "rgb(97,0,194)",
    white70: "rgba(255,255,255,0.7)",
    white100: "rgb(255,255,255)",
    gray: "#969696",
    background: "#21201E",
    whiteLinearGradient:
      "linear-gradient(135deg, #FFFFFF, rgba(255,255,255,0.8))",
    darkGradient:
      "linear-gradient(90deg, rgba(39,35,31,1) 0%, rgba(25,24,23,1) 100%)",
    purpleDarkAngularGradient: "conic-gradient(#191817,#6100C2,#191817)",
    rightCarouselGradient:
      "linear-gradient(1.5708rad,rgba(0,0,0, 0) 0%,rgba(0,0,0, 0.5) 100%)",
    leftCarouselGradient:
      "linear-gradient(1.5708rad,rgba(0,0,0, 0.5) 0%,rgba(0,0,0, 0) 100%)",
    rightCarouselGradientLow:
      "linear-gradient(1.5708rad,rgba(0,0,0, 0) 0%,rgba(0,0,0, 0.2) 100%)",
    leftCarouselGradientLow:
      "linear-gradient(1.5708rad,rgba(0,0,0, 0.2) 0%,rgba(0,0,0, 0) 100%)",
    darkTextColor: "#000000",
    whiteTextColor: "#ffffff",
  },
  fonts: {
    poppins: `"Poppins", sans-serif`,
  },
  boxShadows: {
    insetUp:
      "box-shadow: inset 0px -10px 0px 0px rgba(0,0,0,1),inset 0px -20px 0px 0px rgba(0,0,0,0.9),inset 0px -30px 0px 0px rgba(0,0,0,0.8),inset 0px -40px 0px -0px rgba(0,0,0,0.7),inset 0px -45px 0px 00px rgba(0,0,0,0.6),inset 0px -55px 0px -0px rgba(0,0,0,0.5),inset 0px -65px 0px 0px rgba(0,0,0,0.4),inset 0px -70px 0px -0px rgba(0,0,0,0.3),inset 0px -80px 0px -0px rgba(0,0,0,0.2),inset 0px -100px 0px 0px rgba(0,0,0,0.1);",
    insetDown:
      "box-shadow: inset 0px 10px 0px 0px rgba(0,0,0,1),inset 0px 20px 0px 0px rgba(0,0,0,0.9),inset 0px 30px 0px 0px rgba(0,0,0,0.8),inset 0px 40px 0px -0px rgba(0,0,0,0.7),inset 0px 45px 0px 00px rgba(0,0,0,0.6),inset 0px 55px 0px -0px rgba(0,0,0,0.5),inset 0px 65px 0px 0px rgba(0,0,0,0.4),inset 0px 71px 0px -0px rgba(0,0,0,0.3),inset 0px 80px 0px -0px rgba(0,0,0,0.2),inset 0px 100px 0px 0px rgba(0,0,0,0.1);",
  },
};
type Theme = typeof theme;

export default theme as Theme;
