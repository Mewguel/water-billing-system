import React from "react";
import defaultProfile from "../assets/profile_default.svg";
import Services from "../components/Services";

const Profile = () => {
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
          <div className="flex flex-col items-center bg-white">
            <span className="text text-wrap text-blue-950 font-bold">
              {" "}
              Juan dela Cruz{" "}
            </span>
            <span className="text text-wrap text-blue-950 font-bold">
              juandelacruz@gmail.com{" "}
            </span>
            <span className="text text-wrap text-blue-950 font-bold">
              123 Blk 4 Lot 5 Barangay San Pedro, Sta. Rosa, Laguna{" "}
            </span>
          </div>
        </div>
      </div>
      {/* Service Card */}
      <Services />
    </div>
  );
};

export default Profile;
