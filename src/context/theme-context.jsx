import { createContext, SetStateAction,Dispatch, useState  } from "react";
import { Theme, createTheme, ThemeProvider } from "@mui/material";
import themeLight from "../theme/theme-light" ;

interface ThemeDataContextInterface {
  ThemeState: Theme;
  ThemeDispatch: Dispatch<SetStateAction<Theme>>;
}

const initialValue: ThemeDataContextInterface = {
  ThemeState: createTheme({}),
  ThemeDispatch: () => {},
};

export const ThemeDataContext = createContext(initialValue);

export const ThemeDataProvider: React.FC<PropsWithChildren> =({
  children,
}) => {
  const [theme, setTheme] = useState(themeLight);

  return (
    <ThemeDataContext.Provider
      value={{ ThemeDispatch: setTheme, ThemeState: theme }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeDataContext.Provider>
  );
};