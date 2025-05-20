import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SignupPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { handleSignup, loading, error } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await handleSignup(name, email, password);
      if (error === "") {
        navigate("/login");
      }
    } catch (err) {
      console.error("Error during signup", err);
    }
  };

  return (
    <div className="w-screen flex items-center justify-center flex-col">
      <h2>Sign Up</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-300 p-12 rounded-md flex flex-col items-center justify-center gap-2"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="ml-2 border-2 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="ml-2 border-2 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="ml-2 border-2 rounded-md"
          />
        </div>

        {error && <div className="text-red-300">{error}</div>}

        <button type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
