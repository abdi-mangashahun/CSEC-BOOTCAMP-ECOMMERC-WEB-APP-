import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance"; // Import the Axios instance
import { Button } from "@/components/ui/button"; // Assuming you have this Button component

const Register = () => {
  // State hooks for form data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For error messages
  const [loading, setLoading] = useState(false); // For loading state
  const [successMessage, setSuccessMessage] = useState(""); // For success message
  const navigate = useNavigate(); // To navigate to another page after success

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent form submission refresh
    setLoading(true); // Start loading

    try {
      // Make the POST request to the backend for registration with correct endpoint
      const response = await axiosInstance.post("/auth/register", {
        email,
        password,
        firstName,
        lastName,
      });

      // Handle successful registration
      if (response.status === 201) {
        // Show success message
        setSuccessMessage("Registration successful! Redirecting to home...");

        // Redirect to home after 3 seconds (to let the user see the success message)
        setTimeout(() => {
          navigate("/"); // Redirect to the home page (change the path if necessary)
        }, 3000); // 3 seconds delay
      } else {
        // Handle unexpected response
        setError("Unexpected response during registration.");
      }
    } catch (err) {
      // Log the error response for debugging
      console.log("Error Response:", err.response);

      // Handle error (e.g., email already taken, etc.)
      if (err.response) {
        setError(err.response?.data?.message || "An error occurred during registration.");
      } else {
        // Network or other errors
        setError("Network error or request failed.");
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-gray-950 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Create Your Account</h2>

        <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 py-2 mb-4 px-4 rounded-md">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="h-5 w-5"
          />
          Sign up with Google
        </button>

        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="block text-sm font-medium text-white">First Name</label>
            <input
              type="text"
              placeholder="Abdi"
              className="mt-1 w-full px-4 py-2 border text-white rounded-md outline-none focus:outline-none"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={loading} // Disable the input when loading
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Last Name</label>
            <input
              type="text"
              placeholder="Gashahun"
              className="mt-1 w-full px-4 py-2 border text-white rounded-md outline-none focus:outline-none"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={loading} // Disable the input when loading
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              placeholder="abdigashahun@gmail.com"
              className="mt-1 w-full px-4 py-2 border text-white rounded-md outline-none focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading} // Disable the input when loading
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 border rounded-md outline-none focus:outline-none text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading} // Disable the input when loading
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm mt-2">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="text-green-500 text-sm mt-2">
              {successMessage}
            </div>
          )}

          <div className="w-full mt-3 text-white flex items-center justify-center">
            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-200" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </Button>
          </div>
        </form>

        <p className="text-center text-sm text-white mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
