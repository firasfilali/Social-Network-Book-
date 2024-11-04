import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpenIcon, HomeIcon, HeartIcon, BackwardIcon, ForwardIcon } from "@heroicons/react/24/outline";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DesktopNavigation = ({ navigation }) => {
  const [activeItem, setActiveItem] = useState("Home");
  function getIconComponent(name) {
    const icons = {
      Home: <HomeIcon aria-hidden="true" className="h-5 w-5 inline mr-2" />,
      "My Books": <BookOpenIcon aria-hidden="true" className="h-5 w-5 inline mr-2" />,
      "Waiting list": <HeartIcon aria-hidden="true" className="h-5 w-5 inline mr-2" />,
      "Returned books": <BackwardIcon aria-hidden="true" className="h-5 w-5 inline mr-2" />,
      "Borrowed books": <ForwardIcon aria-hidden="true" className="h-5 w-5 inline mr-2" />
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
            onClick={() => setActiveItem(item.name)}
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
