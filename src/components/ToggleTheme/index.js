import { IconButton, Icon } from "@mui/material"
import { useContext } from "react";
import { ThemeDataContext } from "../../context/theme-context";
import themeLight from "../../theme/theme-light";
import themeDark from "../../theme/theme-dark";

export default function ToggleThemeButton() {
  const { ThemeState, ThemeDispach  } = useContext(ThemeDataContext);

  function toggleTheme() {
    if (ThemeState.palette.mode === "dark") {
      ThemeDispach(themeLight);
    } else {
      ThemeDispach(themeDark);
    }
  }

  return (
      <IconButton onClick={toggleTheme}>
        <Icon>
          {ThemeState.palette.mode === "dark" ? "light_model" : "dark_mode"}
        </Icon>
      </IconButton>
  );
}