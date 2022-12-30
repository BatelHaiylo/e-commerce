import { createTheme } from "@mui/material/styles";

export const Shades = {
  //black
  primary: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
  },

  //indigo blue
  secondary: {
    100: "#ccdef7",
    200: "#99bdf0",
    300: "#669ce8",
    400: "#337be1",
    500: "#005ad9",
    600: "#0048ae",
    700: "#003682",
    800: "#002457",
    900: "#00122b",
  },

  //white
  white: {
    100: "#ffffff",
    200: "#ffffff",
    300: "#ffffff",
    400: "#ffffff",
    500: "#ffffff",
    600: "#cccccc",
    700: "#999999",
    800: "#666666",
    900: "#333333",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: Shades.primary[500],
    },
    secondary: {
      main: Shades.secondary[500],
    },
    white: {
      dark: Shades.white[700],
      main: Shades.white[500],
      light: Shades.white[100],
    },
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Nunito Sans", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Nunito Sans", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Nunito Sans", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Nunito Sans", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
