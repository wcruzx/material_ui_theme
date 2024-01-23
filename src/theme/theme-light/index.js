import { createTheme } from "@mui/material";
import themeDefault from "../default";

const themeLight = createTheme({
  palette:{
    mode: "light",
    primary: {
      ...themeDefault.palette.primary,
    },
  },
  components:{
    MuiLink:{
      ...themeDefault.components?.MuiLink,
    },
  },
});

export default themeLight;