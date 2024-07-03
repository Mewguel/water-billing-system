import { useState, useEffect } from "react";
import defaultProfile from "../assets/profile_default.svg";
import Services from "../components/Services";
import api from "../api";

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await api.get("api/user/profile/");
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="px-4 w-full max-w-full overflow-x-hidden">
      <div className="card container grid grid-flow-row grid-rows-2 m-5 bg-yellow-300 rounded">
        <div className="photo flex flex-row justify-center w-full">
          <div className="border-2 m-2 bg-white">
            <img
              className="w-24 h-24 rounded p-2"
              src={defaultProfile}
              alt="Default avatar"
            />
          </div>
        </div>
        <div className="info container py-2 px-10 ">
          {userProfile && (
            <div className="flex flex-col items-center bg-white">
              <span className="text text-wrap text-blue-950 font-bold">
                {userProfile.firstname} {userProfile.lastname}
              </span>
              <span className="text text-wrap text-blue-950 font-bold">
                {userProfile.email}
              </span>
              <span className="text text-wrap text-blue-950 font-bold">
                {userProfile.address}
              </span>
            </div>
          )}
        </div>
      </div>
      {/* Service Card */}
      <Services />
    </div>
  );
};

export default Profile;
