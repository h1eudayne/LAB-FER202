import React, { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedTheme = localStorage.getItem("dark");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    if (savedTheme) {
      setDark(JSON.parse(savedTheme));
    }
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    localStorage.setItem("dark", JSON.stringify(!dark));
  };

  const login = () => {
    const fakeUser = { name: "Aaron" };
    setUser(fakeUser);
    localStorage.setItem("user", JSON.stringify(fakeUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme, user, login, logout }}>
      <div className={dark ? "dark-theme" : "light-theme"}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useAuth = () => useContext(ThemeContext);
