import { NavLink, useNavigate } from "react-router-dom";
import { User, X, LogOut } from "lucide-react";
import { useState } from "react";
import round from "../../assets/images/round.jpg"

const AdminTopBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const Linksdata = [
    { title: "Dashboard", path: "/admin/dashboard" },
    { title: "Categories", hasDropdown: true, path: false },
    { title: "Orders", path: "/admin/orders" },
    { title: "Users", path: "/admin/users" },
  ];

  const allFruitss = [
    { title: "BasicFruits", path: "/admin/basicfruits" },
    { title: "DryFruits", path: "/admin/dryfruits" },
    { title: "ExoticFruits", path: "/admin/exoticfruits" },
    { title: "FruitBaskets", path: "/admin/fruitbaskets" },
    { title: "OrganicFruits", path: "/admin/organicfruits" },
    { title: "SeasonalFruits", path: "/admin/seasonalfruits" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const switchAuth = () => {
    if (showLogin) {
      setShowLogin(false);
      setShowRegister(true);
    } else if (showRegister) {
      setShowLogin(true);
      setShowRegister(false);
    }
  };

  return (
    <>
      <div className="w-full h-14 shadow-lime-300 bg-lime-500 shadow-md flex items-center">
        {/* Left Section */}<img className="h-[7vh] w-[45px] top-10 bottom-10 border-radius-360 rounded-full flex justify-center align-center  " src={round} alt='logo' />
        <div className="flex-1 font-bold text-2xl text-white pl-4">
          Fresh Fruits
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-end space-x-8 pr-4">
          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {Linksdata.map((link, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
              >
                <NavLink
                  to={link.path || "#"}
                  className="h-5 text-lg font-semibold text-white py-3 px-5 hover:text-black hover:bg-lime-500 transition duration-200">
                  {link.title}
                </NavLink>

                {/* Dropdown Menu */}
                {link.hasDropdown && isDropdownOpen && (
                  <div className="absolute left-0 mt-2 bg-white shadow-xl rounded-md w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col">
                      {allFruitss.map((category, idx) => (
                        <NavLink
                          key={idx}
                          to={category.path}
                          className="text-lime-700 py-2 px-2 hover:bg-lime-100 font-semibold rounded-md transition duration-150"
                        >
                          {category.title}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* User Icon */}
          <button
            className="h-9 w-9 flex justify-center items-center border-2 rounded-full hover:bg-lime-300 hover:border-lime-600 hover:text-lime-600 shadow-md"
            onClick={() => setShowLogin(!showLogin)}
          >
            <User className="h-6 w-6 text-white" />
          </button>

          {/* Logout Button */}
          <button
            className="flex items-center text-red-500 font-bold cursor-pointer"
            onClick={handleLogout}
          >
            <LogOut />
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40">
          <div className="h-[60%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md">
            <div className="h-full w-full flex flex-col justify-center items-center text-lg font-semibold">
              <div className="h-[20%] w-[80%] flex flex-row justify-between items-center">
                <h1 className="text-xl font-bold text-lime-600">Login</h1>
                <X
                  className="h-8 w-8 text-red-500 cursor-pointer"
                  onClick={() => setShowLogin(!showLogin)}
                />
              </div>
              <form className="h-[80%] w-[80%] flex flex-col gap-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border-b-2 bg-[#f5f5f7] focus:border-lime-400 rounded-sm"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border-b-2 bg-[#f5f5f7] focus:border-lime-400 rounded-sm"
                  required
                />
                <button className="w-full h-12 bg-lime-600 text-white rounded-sm">
                  Login
                </button>
              </form>
              <p
                className="mt-4 text-lime-500 cursor-pointer"
                onClick={switchAuth}
              >
                Register?
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegister && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40">
          <div className="h-[75%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md">
            <div className="h-full w-full flex flex-col justify-center items-center text-lg font-semibold">
              <div className="h-[20%] w-[80%] flex flex-row justify-between items-center">
                <h1 className="text-xl font-bold text-lime-600">Register</h1>
                <X
                  className="h-8 w-8 text-red-500 cursor-pointer"
                  onClick={() => setShowRegister(!showRegister)}
                />
              </div>
              <form className="h-[80%] w-[80%] flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border-b-2 bg-[#f5f5f7] focus:border-lime-600 rounded-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border-b-2 bg-[#f5f5f7] focus:border-lime-600 rounded-sm"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border-b-2 bg-[#f5f5f7] focus:border-lime-600 rounded-sm"
                  required
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className="w-full p-2 border-b-2 bg-[#f5f5f7] focus:border-lime-600 rounded-sm"
                  required
                />
                <button className="w-full h-12 bg-lime-600 text-white rounded-sm">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminTopBar;
