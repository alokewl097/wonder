import { useState } from "react";
import API from "../apis/axiosInstance";
 
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async ({ username, password }) => {
    setLoading(true);
    setError("");

    try {
      const res = await API.post("/auth/login", { username, password });
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      return { success: true, data: res.data };
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
