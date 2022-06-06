import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#fd510c",
    },
    secondary: {
      main: "#00AB55",
    },
    error: {
      main: "#FF4842",
    },
  },
  typography: {
    fontFamily: ["Switzer", "sans-serif"].join(","),
    fontSize: 12,
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export default theme;
