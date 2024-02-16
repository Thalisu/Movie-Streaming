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

    rightCarouselGradient: `
      linear-gradient(1.5708rad,
        rgba(0, 0, 0, 0) 49.02%,
        rgba(0, 0, 0, 0.01) 52.42%,
        rgba(0, 0, 0, 0.03) 55.82%,
        rgba(0, 0, 0, 0.08) 59.22%,
        rgba(0, 0, 0, 0.1) 62.62%,
        rgba(0, 0, 0, 0.15) 66.02%,
        rgba(0, 0, 0, 0.18) 69.41%,
        rgba(0, 0, 0, 0.23) 72.81%,
        rgba(0, 0, 0, 0.25) 76.21%,
        rgba(0, 0, 0, 0.3) 79.61%,
        rgba(0, 0, 0, 0.32) 83.01%,
        rgba(0, 0, 0, 0.37) 86.41%,
        rgba(0, 0, 0, 0.39) 89.8%,
        rgba(0, 0, 0, 0.44) 93.2%,
        rgba(0, 0, 0, 0.46) 96.6%,
        rgba(0, 0, 0, 0.50) 100%
      )`,
    leftCarouselGradient: `
      linear-gradient(1.5708rad,
        rgba(0, 0, 0, 0.50) 0%,
        rgba(0, 0, 0, 0.46) 3.4%,
        rgba(0, 0, 0, 0.44) 6.8%,
        rgba(0, 0, 0, 0.39) 10.2%,
        rgba(0, 0, 0, 0.37) 13.59%,
        rgba(0, 0, 0, 0.32) 16.99%,
        rgba(0, 0, 0, 0.3) 20.39%,
        rgba(0, 0, 0, 0.25) 23.79%,
        rgba(0, 0, 0, 0.23) 27.19%,
        rgba(0, 0, 0, 0.18) 30.59%,
        rgba(0, 0, 0, 0.15) 33.98%,
        rgba(0, 0, 0, 0.1) 37.38%,
        rgba(0, 0, 0, 0.08) 40.78%,
        rgba(0, 0, 0, 0.03) 44.18%,
        rgba(0, 0, 0, 0.01) 47.58%,
        rgba(0, 0, 0, 0) 51%,
        rgba(0, 0, 0, 0) 100%
      )`,
    cascadeUpGradient: `
      linear-gradient(
        rgba(0, 0, 0, 0) 49.02%,
        rgba(0, 0, 0, 0.009) 52.42%,
        rgba(0, 0, 0, 0.036) 55.82%,
        rgba(0, 0, 0, 0.082) 59.22%,
        rgba(0, 0, 0, 0.15) 62.62%,
        rgba(0, 0, 0, 0.23) 66.02%,
        rgba(0, 0, 0, 0.332) 69.41%,
        rgba(0, 0, 0, 0.443) 72.81%,
        rgba(0, 0, 0, 0.557) 76.21%,
        rgba(0, 0, 0, 0.668) 79.61%,
        rgba(0, 0, 0, 0.77) 83.01%,
        rgba(0, 0, 0, 0.85) 86.41%,
        rgba(0, 0, 0, 0.918) 89.8%,
        rgba(0, 0, 0, 0.964) 93.2%,
        rgba(0, 0, 0, 0.991) 96.6%,
        rgb(0, 0, 0) 100%
      )`,

    cascadeDownGradient: `
      linear-gradient(
        rgb(0, 0, 0), rgba(0, 0, 0, 0.991) 6.67%,
        rgba(0, 0, 0, 0.964) 13.33%,
        rgba(0, 0, 0, 0.918) 20%,
        rgba(0, 0, 0, 0.85) 26.67%,
        rgba(0, 0, 0, 0.77) 33.33%,
        rgba(0, 0, 0, 0.668) 40%,
        rgba(0, 0, 0, 0.557) 46.67%,
        rgba(0, 0, 0, 0.443) 53.33%,
        rgba(0, 0, 0, 0.332) 60%,
        rgba(0, 0, 0, 0.23) 66.67%,
        rgba(0, 0, 0, 0.15) 73.33%,
        rgba(0, 0, 0, 0.082) 80%,
        rgba(0, 0, 0, 0.036) 86.67%,
        rgba(0, 0, 0, 0.009) 93.33%,
        rgba(0, 0, 0, 0) 100%
      )`,

    lowerCascadeDown: `
      linear-gradient(rgba(0, 0, 0, 0.5) 0.48%,
        rgba(0, 0, 0, 0.47) 3.73%,
        rgba(0, 0, 0, 0.444) 6.67%,
        rgba(0, 0, 0, 0.422) 9.29%,
        rgba(0, 0, 0, 0.403) 11.98%,
        rgba(0, 0, 0, 0.386) 14.88%,
        rgba(0, 0, 0, 0.37) 18.18%,
        rgba(0, 0, 0, 0.34) 25%,
        rgba(0, 0, 0, 0.32) 32.4%,
        rgba(0, 0, 0, 0.28) 39.23%,
        rgba(0, 0, 0, 0.24) 47.42%,
        rgba(0, 0, 0, 0.2) 57.17%,
        rgba(0, 0, 0, 0.12) 68.67%,
        rgba(0, 0, 0, 0.06) 82.12%,
        rgba(0, 0, 0, 0) 97.71%
      )`,

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
