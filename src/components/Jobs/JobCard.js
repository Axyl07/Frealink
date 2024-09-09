import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Import Firestore

const JobCard = ({ job, showJobDetails, showApplyButton = true, clickable = true }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFreelancerUser, setIsFreelancerUser] = useState(false); // State to track freelancer users
  const auth = getAuth();
  const db = getFirestore(); // Initialize Firestore
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthenticationAndRole = async () => {
      const user = auth.currentUser;
      if (user) {
        setIsAuthenticated(true); // User is logged in

        try {
          // Check if the user exists in the freelancerUsers collection
          const userDocRef = doc(db, "freelancerUsers", user.uid); // Collection name for freelancer users
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setIsFreelancerUser(true); // User is a freelancer
          } else {
            setIsFreelancerUser(false); // User is not a freelancer
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setIsFreelancerUser(false); // Default to false on error
        }
      } else {
        setIsAuthenticated(false); // User not logged in
        setIsFreelancerUser(false); // Ensure state is false if user not logged in
      }
    };
    checkAuthenticationAndRole();
  }, [auth, db]);

  const formatCurrency = (amount) => {
    if (!amount) return "Not specified";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  const handleCardClick = () => {
    if (clickable) {
      showJobDetails(job.id);
    }
  };

  const handleApplyClick = (e) => {
    e.stopPropagation();
    navigate(`/apply-job/${job.id}`);
  };

  return (
    <div
      className={`p-4 border rounded-lg mb-6 flex flex-col shadow-md bg-white hover:scale-105 hover:shadow-lg hover:shadow-rose-500 transition-all duration-1000 ease-in-out ${
        clickable ? "cursor-pointer" : ""
      }`}
      onClick={handleCardClick}
      style={{ width: '380px', height: '250px' }}
    >
      <div className="mt-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {job.title}
          </h3>
          <p className="text-gray-600">{job.company}</p>
          <p className="text-gray-600 mb-2">
            <span className="block">
              <strong>Location:</strong> {job.location}
            </span>
            <span className="block">
              <strong>Salary:</strong> {formatCurrency(job.salary)}
            </span>
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Job Type:</strong> {job.jobType}
          </p>
        </div>

        {/* Conditionally show the Apply Now button based on authentication and user role */}
        {showApplyButton && isAuthenticated && isFreelancerUser && (
          <button
            onClick={handleApplyClick}
            className="w-full mt-auto px-3 py-1 text-white bg-gradient-to-r from-rose-800 to-fuchsia-800 font-medium rounded-full hover:scale-105 transition-all duration-500 ease-in-out"
          >
            Apply Now
          </button>
        )}
      </div>
    </div>
  );
};

export default JobCard;
