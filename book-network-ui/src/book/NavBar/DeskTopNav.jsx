import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BookOpenIcon,
  HomeIcon,
  HeartIcon,
  BackwardIcon,
  ForwardIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DesktopNavigation = ({ navigation }) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const savedItem = localStorage.getItem("activeMenuItem");
    if (savedItem) {
      setActiveItem(savedItem);
    } else {
      const currentItem = navigation.find(
        (item) => item.href === location.pathname
      );
      if (currentItem) {
        setActiveItem(currentItem.name);
        localStorage.setItem("activeMenuItem", currentItem.name); // Save initial load item in localStorage
      }
    }
  }, [location, navigation]);

  const handleItemClick = (name) => {
    setActiveItem(name);
    localStorage.setItem("activeMenuItem", name);
  };

  function getIconComponent(name) {
    const icons = {
      Home: <HomeIcon aria-hidden="true" className="h-5 w-5 inline mr-2" />,
      "My Books": (
        <BookOpenIcon aria-hidden="true" className="h-5 w-5 inline mr-2" />
      ),
      "Waiting list": (
        <HeartIcon aria-hidden="true" className="h-5 w-5 inline mr-2" />
      ),
      "Returned books": (
        <BackwardIcon aria-hidden="true" className="h-5 w-5 inline mr-2" />
      ),
      "Borrowed books": (
        <ForwardIcon aria-hidden="true" className="h-5 w-5 inline mr-2" />
      ),
    };
    return icons[name] || null; // Return the icon component if it exists, otherwise null
  }
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            aria-current={item.name === activeItem ? "page" : undefined}
            className={classNames(
              item.name === activeItem
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "rounded-md px-3 py-2 text-sm font-medium"
            )}
            onClick={() => handleItemClick(item.name)}
          >
            {getIconComponent(item.name)}
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopNavigation;
