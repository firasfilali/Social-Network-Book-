import React from "react";
import {
  BookOpenIcon,
  HomeIcon,
  HeartIcon,
  BackwardIcon,
  ForwardIcon,
} from "@heroicons/react/24/outline";
import { DisclosureButton } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MobileNavigation = ({ navigation }) => {
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
    return icons[name] || null;
  }
  return (
    <div className="space-y-1 px-2 pb-3 pt-2">
      {navigation.map((item) => (
        <DisclosureButton
          key={item.name}
          as="a"
          href={item.href}
          aria-current={item.current ? "page" : undefined}
          className={classNames(
            item.current
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white",
            "block rounded-md px-3 py-2 text-base font-medium"
          )}
        >
          {getIconComponent(item.name)}
          {item.name}
        </DisclosureButton>
      ))}
    </div>
  );
};

export default MobileNavigation;
