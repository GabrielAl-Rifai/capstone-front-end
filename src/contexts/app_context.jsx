import { UserProvider } from "./auth/auth_context";
function AppProvider({ children }) {
  return <UserProvider>{children}</UserProvider>;
}
export default AppProvider;
