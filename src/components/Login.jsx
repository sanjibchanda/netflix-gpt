import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleBtnClick = () => {
    // form data validation

    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    //signIn / SignUp
  };

  return (
    <div className="login_wrap h-lvh w-full">
      <Header />
      <div className="max-w-[450px] w-full mx-auto p-12 bg-black/70 mt-20">
        <h3 className="text-3xl font-bold mb-7 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h3>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-3"
        >
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full name"
              className="block w-full bg-gray-700 border border-solid border-gray-700 rounded-sm p-3 text-white  shadow-sm placeholder:text-gray-400 outline-none"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="block w-full bg-gray-700 border border-solid border-gray-700 rounded-sm p-3 text-white  shadow-sm placeholder:text-gray-400 outline-none"
          />
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="block w-full bg-gray-700 border border-solid border-gray-700 rounded-sm p-3 text-white  shadow-sm placeholder:text-gray-400 outline-none"
          />
          <p className="text-red-500 text-sm">{errorMessage}</p>
          <button
            type="button"
            onClick={handleBtnClick}
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
