import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

const Leftbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [leaveTimer, setLeaveTimer] = useState(null); // New state for the timeout

  const Linksdata = [
    {
      title: "All Categories",
      hasDropdown: true,
    },
  ];

  const allFruits = [
    { title: "BasicFruits", path: "/basicfruits" },
    { title: "DryFruits", path: "/dryfruits" },
    { title: "ExoticFruits", path: "/exoticfruits" },
    { title: "FruitBaskets", path: "/fruitbaskets" },
    { title: "OrganicFruits", path: "/organicfruits" },
    { title: "SeasonalFruits", path: "/seasonalfruits" },
  ];

  const handleMouseLeave = () => {
    // Set a delay before closing the dropdown (e.g., 500ms)
    const timer = setTimeout(() => {
      setDropdownOpen(false);
    }, 500); // Adjust the time in ms (500ms = 0.5 seconds)
    setLeaveTimer(timer);
  };

  const handleMouseEnter = () => {
    // Clear the timeout if mouse enters before the delay completes
    if (leaveTimer) {
      clearTimeout(leaveTimer);
    }
    setDropdownOpen(true);
  };

  return (
    <div className="z-10 h-9 w-screen bg-white shadow-md flex flex-row justify-start items-center">
      <div className="relative flex items-start justify-start space-x-8">
        {Linksdata.map((link, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to={link.path || "#"}
              className="flex flex-row items-center text-lg font-semibold text-lime-500 py-3 px-5 hover:text-white hover:bg-lime-500 transition duration-200 gap-2"
            >
              <Menu className="h-5 w-5" /> {/* Adjust icon size */}
              <span>{link.title}</span>
            </NavLink>

            {/* Dropdown Menu */}
            {link.hasDropdown && isDropdownOpen && (
              <div className="absolute left-0 mt-1 h-[250px] bg-white shadow-xl rounded-md w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-col">
                  {allFruits.map((category, idx) => (
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
    </div>
  );
};

export default Leftbar;