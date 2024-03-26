import { UserProvider } from "./auth/authcontext";
function AppProvider({ children }) {
  return <UserProvider>{children}</UserProvider>;
}
export default AppProvider;
