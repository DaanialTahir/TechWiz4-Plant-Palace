import React, { useContext } from "react";
import { AuthContext } from "../context/context";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useTheme() must be used inside a ThemeProvider");
  }
  return context;
};


