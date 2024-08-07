import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import { ACCESS_TOKEN } from "../constants";

import Logo from "../assets/logo.png";

const Navbar = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const access = localStorage.getItem(ACCESS_TOKEN);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 shadow-md bg-blue-800 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          <a href="#">
            <img className="h-10" src={Logo} alt="logo" />
          </a>
        </div>
        <div className="hidden md:block">
          {access !== null ? (
            <ul className="flex items-center space-x-8">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/profile" className="text-white">
                  Profile
                </a>
              </li>
              <li>
                <a href="/managebills" className="text-white">
                  View Bills
                </a>
              </li>
              <li>
                <a href="/managebills" className="text-white">
                  Pay Bills
                </a>
              </li>
              <li>
                <a href="/logout" className="text-white" onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          ) : (
            <ul className="flex items-center space-x-8">
              <li>
                <a href="/register" className="text-white">
                  Register
                </a>
              </li>
              <li>
                <a href="/login" className="text-white">
                  Login
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
