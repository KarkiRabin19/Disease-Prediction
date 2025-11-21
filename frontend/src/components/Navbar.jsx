import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { id: 1, name: "predict disease", link: "/predict" },
    { id: 2, name: "book appointments", link: "/book" },
  ];

  const fallbackImage = "https://www.gravatar.com/avatar/?d=mp&f=y";

  return (
    <div className="w-full h-[70px] flex items-center justify-between z-20 font-text sticky top-0 bg-[#365666] px-5">
      {/* Left menu */}
      <div className="flex items-center space-x-3 mx-1 md:mx-5">
        <button
          onClick={toggleMenu}
          className="flex items-center hover:bg-black/70 hover:text-amber-50 md:px-3 md:py-2 px-2 py-1 rounded-full bg-[#EFBC9B] cursor-pointer text-sm"
        >
          {isOpen ? <RxCross2 /> : <CiMenuFries />}
          <h1 className="capitalize px-2">menu</h1>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ x: "-100%" }}
              animate={{ x: "0%", transition: { duration: 0.8 } }}
              exit={{ x: "-100%", transition: { duration: 0.8 } }}
              className="absolute top-20 left-1 rounded-md bg-[#EFBC9B] bg-opacity-80"
            >
              {menuItems.map((item) => (
                <motion.li
                  key={item.id}
                  className="flex justify-center py-2 px-3 rounded-sm cursor-pointer capitalize hover:bg-[#365666] hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to={item.link}>{item.name}</Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* Logo */}
      <div className="flex justify-center flex-1">
        <Link to="/">
          <h1 className="cursor-pointer md:text-4xl text-3xl font-semibold font-['helvetica'] text-[#EFBC9B]">
            Di-Pe
          </h1>
        </Link>
      </div>

      {/* Right side: Profile / Auth */}
      {isAuthenticated ? (
        <div className="relative flex items-center gap-3 group">
          <Link to="/profile">
            <img
              src={user?.picture || fallbackImage}
              alt={user?.name || "Profile"}
              className="w-10 h-10 rounded-full object-cover cursor-pointer border-2 border-white hover:border-pink-200 transition-all"
              onError={(e) => {
                e.target.src = fallbackImage;
              }}
            />
          </Link>

          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="bg-[#EFBC9B] hover:bg-black/70 hover:text-amber-50 text-sm px-4 py-2 rounded-3xl"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex gap-3">
          <button
            onClick={() => loginWithRedirect()}
            className="px-5 py-2 text-white font-medium hover:text-pink-100 rounded-lg transition-all duration-200"
          >
            Login
          </button>
          <button
            onClick={() => loginWithRedirect({ screen_hint: "signup" })}
            className="px-5 py-2 bg-white text-pink-700 rounded-lg font-semibold hover:bg-pink-800 hover:text-white transition-all duration-200 shadow-md"
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
