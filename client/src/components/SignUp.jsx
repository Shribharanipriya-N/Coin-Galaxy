import React, { useState } from "react";

const SignUp = ({ onToggle }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { email, name, password });
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6 border border-border"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-secondary-dark mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 border border-secondary-light rounded-lg shadow-sm focus:ring-2 focus:ring-primary outline-none transition"
            required
          />
        </div>

        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-secondary-dark mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            onChange={(e) => setName(e.target.value)}
            className="w-full h-12 px-4 border border-secondary-light rounded-lg shadow-sm focus:ring-2 focus:ring-primary outline-none transition"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-secondary-dark mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full h-12 px-4 border border-secondary-light rounded-lg shadow-sm focus:ring-2 focus:ring-primary outline-none transition"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-primary to-primary-light text-foreground font-semibold text-lg rounded-lg hover:from-primary-dark hover:to-primary transition"
        >
          Sign Up
        </button>

        <p className="text-sm text-secondary text-center">
          Already have an account?{" "}
          <span
            className="text-primary-dark font-medium hover:underline cursor-pointer"
            onClick={onToggle}
          >
            Log in
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
