import React from "react";

const Header = () => {
  return (
    <>
      <div className="container mx-auto p-3">
        <div className="flex justify-between">
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="images"
            className="w-40"
          />
          <button
            type="submit"
            className="rounded-sm bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 self-center"
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
