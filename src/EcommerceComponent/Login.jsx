
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance"; // Import the Axios instance
import { Button } from "@/components/ui/button"; // Assuming you have this Button component

const Login = () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate(); // Use navigate to redirect after login

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      // Save the token in localStorage
      localStorage.setItem("token", response.data.token);

      // Redirect user to the home page (or wherever)
      navigate("/"); // Or to your dashboard page
    } catch (err) {
      // Handle error, show the error message
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="w-full max-w-md bg-gray-950 p-8 rounded-lg ">
        <h2 className="text-2xl font-bold text-center text-white mb-10">
          Login to Your Account
        </h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <button className="w-full mb-2 flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 py-2 px-4 rounded-md">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />
            Sign in with Google
          </button>

          <div>
            <label className="block text-sm  font-medium text-white">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border rounded-md outline-none focus:outline-none text-white"
              value={email} // Controlled input
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 border text-white rounded-md outline-none focus:outline-none"
              value={password} // Controlled input
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm mt-2">
              {error}
            </div>
          )}

          <div className="flex items-center justify-between text-sm text-white">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-200">
            Sign In
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
