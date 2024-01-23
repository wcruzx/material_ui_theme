import { createTheme } from "@mui/material";
import themeDefault from "../default";

const themeDark = createTheme({
    palette:{
      mode: "dark",
      primary: {
      ...themeDefault.palette.primary,
    },
  },
  components:{
    MuiLink: {
      ...themeDefault.components?.MuiLink,
    },
  },
});

export default themeDark;