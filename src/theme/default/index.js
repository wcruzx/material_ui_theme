import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#734492",
    },
  },
  components:{
    MuiLink:{
        defaultProps:{
            underline: "none",
        },
      },
  },
});

export default theme;