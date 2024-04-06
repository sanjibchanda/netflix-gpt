import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="login_wrap h-lvh w-full">
      <Header />
      <div className="max-w-[450px] w-full mx-auto p-12 bg-black/70 mt-20">
        <h3 className="text-3xl font-bold mb-7 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h3>
        <form className="flex flex-col gap-3">
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full name"
              className="block w-full bg-gray-700 border border-solid border-gray-700 rounded-sm p-3 text-white  shadow-sm placeholder:text-gray-400 outline-none"
            />
          )}
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="block w-full bg-gray-700 border border-solid border-gray-700 rounded-sm p-3 text-white  shadow-sm placeholder:text-gray-400 outline-none"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="block w-full bg-gray-700 border border-solid border-gray-700 rounded-sm p-3 text-white  shadow-sm placeholder:text-gray-400 outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-sm bg-red-600 py-2 px-6 text-lg font-medium text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 self-center"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <p
          className="text-white mt-4 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already Registered? Sign In now"}
        </p>
      </div>
    </div>
  );
};

export default Login;
