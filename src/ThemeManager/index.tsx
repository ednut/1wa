import React from "react";
import { ThemeContext } from "../types";

const defaultMode = "light";

export const ManageathemeContext: React.Context<ThemeContext> = React.createContext(
  {
    mode: defaultMode,
    toggle: () => {},
  }
);

export const useTheme = () => React.useContext(ManageathemeContext);

export const ThemeManager: React.FC = ({ children }) => {
  const [themeState, setThemeState] = React.useState({
    mode: defaultMode,
  });

  const toogle = (): void => {
    setThemeState({ mode: themeState.mode === "light" ? `dark` : `light` });
  };

  return (
    <ManageathemeContext.Provider
      value={{
        mode: themeState.mode,
        toggle: toogle,
      }}
    >
      {children}
    </ManageathemeContext.Provider>
  );
};
