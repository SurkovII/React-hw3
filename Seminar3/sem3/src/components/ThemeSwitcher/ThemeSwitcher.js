import React, { useState } from "react";
import { Box } from "../Box";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <button onClick={toggleTheme}>switchTheme</button>
      <Box theme={theme} />
    </>
  );
};
