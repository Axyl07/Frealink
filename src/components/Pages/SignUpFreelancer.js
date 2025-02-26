import React from "react";
import { signInWithGoogle } from "../Auth/Auth";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpFreelancer = () => {
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        navigate("/profile-freelancerusers");
        toast.success("Sign up successful.");
      } else {
        toast.error("Sign up failed. Please try again");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Sign up failed. Please try again");
    }
  };

  return (
    <div className="signup-freelancer min-h-screen flex flex-col items-center justify-center">
      <div className="bg-gray-50 p-10 rounded-xl shadow-2xl text-center w-11/12 max-w-md">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Sign Up as freelancer</h2>
        <p className="mb-6 text-gray-600">Sign up with your Google Account to continue</p>
        <button
          onClick={handleSignUp}
          className="bg-rose-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-rose-700 transition duration-200 transform hover:scale-105"
        >
          Sign Up as freelancer with Google
        </button>
        <p className="text-gray-600 mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-800 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpFreelancer;
