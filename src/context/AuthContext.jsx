import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const login = (email, password) => {
    if (email === "admin@example.com" && password === "admin123") {
      const userData = { email, role: "admin" };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    } else if (email === "user@example.com" && password === "user123") {
      const userData = { email, role: "attendee" };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    } else {
      return null;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.href = "/login"; 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
