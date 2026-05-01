import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  // handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://eltoncryptobackend.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      // success → redirect to sign in
      navigate("/signin");

    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-[#111111] w-full max-w-md p-10 rounded-2xl border border-gray-800">

        <h1 className="text-3xl font-bold mb-8 text-center text-white">
          Sign Up! Create your account
        </h1>
        <div className="bg-yellow-400 text-black text-center text-sm py-2 px-4 font-medium">
        ⚠️ This is a demo project and users should not enter real personal information.
      </div>

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            {error}
          </p>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-8">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500 font-medium hover:underline">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
}

export default SignUp;