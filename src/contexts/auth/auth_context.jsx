import { createContext, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const AppContext = createContext();
export function UserProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const login = async (formData) => {
    let res = await axios({
      method: "POST",
      url: "http://localhost:3000/api/auth",
      data: formData,
    });
    setCookie("token", res.data.token);
  };
  const signUp = async (formData) => {
    let res = await axios({
      method: "POST",
      url: "http://localhost:3000/api/users",
      data: formData,
    });
    setCookie("token", res.data.token);
  };
  const logout = () => {
    ["token"].forEach((obj) => {
      removeCookie(obj);
    });
  };
  const value = useMemo(
    () => ({
      cookies,
      login,
      logout,
      signUp,
    }),
    [cookies]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export const useAuth = () => {
  return useContext(AppContext);
};
