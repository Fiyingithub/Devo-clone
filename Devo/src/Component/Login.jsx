import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setApiError(""); // Clear any previous errors

    try {
      const response = await fetch("https://your-api-url.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      console.log("Login successful:", result);
      // Handle successful login (e.g., save token, redirect to dashboard)
    } catch (error) {
      console.error("API error:", error);
      setApiError(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[500px] h-[500px] mx-auto border-2 p-6 mt-20">
      <h1 className="text-center text-4xl font-semibold my-10">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <label htmlFor="email">Email</label>
        <br />
        <input
          className="px-6 py-4 rounded-lg w-full border bg-transparent"
          {...register("email", {
            required: "Email is required",
            validate: (value) => {
              if (!value.includes("@") || !value.includes(".com")) {
                return "Email is not valid";
              }
              return true;
            },
          })}
          type="text"
          id="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <br />
        <br />

        {/* Password Field */}
        <label htmlFor="password">Password</label>
        <br />
        <input
          className="px-6 py-4 rounded-lg w-full border bg-transparent"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
            validate: (value) => {
              const regex = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/;
              if (!regex.test(value)) {
                return "Password should at least contain 1 uppercase, 1 lowercase, and 1 number";
              }
              return true;
            },
          })}
          type="password"
          id="password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <br />
        <br />

        {/* Submit Button */}
        <button
          type="submit"
          className={`text-white px-4 py-1 rounded-md ${
            loading ? "bg-gray-500" : "bg-green-800"
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* API Error Message */}
        {apiError && <p className="text-red-500 mt-4">{apiError}</p>}
      </form>
    </div>
  );
};

export default Login;
