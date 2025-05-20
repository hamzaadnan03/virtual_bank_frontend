import { useState } from "react";
import { login, signup } from "../services/authService";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await login(email, password);

      if (res.status === 200 && res.data) {
        localStorage.setItem("token", res.data?.accessToken);
      }
    } catch (err) {
      setError("Failed to login");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (
    name: string,
    email: string,
    password: string
  ) => {
    setLoading(true);
    try {
      const res = await signup(name, email, password);
      if (res.status === 201 && res.data) {
        localStorage.setItem("token", res.data?.accessToken);
      } else {
        setError(res.data?.message);
      }

      setError("");
    } catch (err) {
      setError("Failed to signup");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, handleSignup, loading, error };
};
