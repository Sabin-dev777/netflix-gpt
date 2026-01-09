import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full h-full object-cover bg-linear-to-b from-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/GB-en-20260105-TRIFECTA-perspective_9567625f-6eee-4698-956c-bc23e5bcf3df_large.jpg"
        />
      </div>
      <form className="absolute mx-auto my-36 right-0 left-0 bg-black/80 text-white w-3/12 p-12 rounded-lg">
        <h1 className="font-bold text-3xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-800 w-full rounded-lg"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-800 w-full rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-800 w-full rounded-lg"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg font-semibold hover:bg-red-800 transition">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a member? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
