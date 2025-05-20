import api from "../config/axios";

//login call
export const login = async (email: string, password: string) => {
  try {
    const response = await api.post("/users/login", { email, password });
    localStorage.setItem("token", response.data.token);
    return response;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Signup API call
export const signup = async (name: string, email: string, password: string) => {
  try {
    const response = await api.post("/users/signup", { name, email, password });
    return response;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};
