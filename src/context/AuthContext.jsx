
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")) || null);

  const login = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin1234") {
      const data = { role: "admin" };
      localStorage.setItem("auth", JSON.stringify(data));
      setAuth(data);
      return "admin";
    }
    if (email === "customer@gmail.com" && password === "customer1234") {
      const data = { role: "customer" };
      localStorage.setItem("auth", JSON.stringify(data));
      setAuth(data);
      return "customer";
    }
    return null;
  };

  return (
    <AuthContext.Provider value={{ auth, login }}>
      {children}
    </AuthContext.Provider>
  );
};
