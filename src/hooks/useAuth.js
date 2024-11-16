import { useContext, useDebugValue } from "react";
import { AuthContext } from "../context";

export default function useAuth() {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (auth) =>
    auth?.user ? "User Logged in" : "User Logged out"
  );
  return useContext(AuthContext);
}