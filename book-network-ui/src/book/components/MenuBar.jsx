import { Disclosure, DisclosurePanel } from "@headlessui/react";
import { BellIcon, MagnifyingGlassIcon  } from "@heroicons/react/24/outline";
import DesktopNavigation from "../NavBar/DeskTopNav";
import MobileMenuButton from "../NavBar/MobileMenuBtn";
import ProfileDropdown from "../NavBar/ProfileDropdown";
import ProfilPic from "../../images/profilpic.jpg";
import MobileNavigation from "../NavBar/MobileNav";

const navigation = [
  { name: "Home", href: "/books", current: false },
  { name: "My Books", href: "my-books", current: false },
  { name: "Waiting list", href: "my-waiting-list", current: false },
  { name: "Returned books", href: "my-returned-books", current: false },
  { name: "Borrowed books", href: "my-borrowed-books", current: false },
];

const profileMenuItems = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function MenuBar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <MobileMenuButton />
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center pl-2">
              <img
                alt="Your Company"
                src="https://www.tunisienumerique.com/wp-content/uploads/2021/09/steg.png"
                className="h-8 w-auto"
              />
            </div>
            <DesktopNavigation navigation={navigation} />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex items-center border mr-2 border-gray-300 rounded-full">
              <input
                type="text"
                placeholder="Find a book..."
                className="py-2 px-4 rounded-l-full focus:outline-none"
              />
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r-full">
              <MagnifyingGlassIcon className="h-6 w-6 text-white-500" />
              </button>
            </div>
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Profile dropdown */}
            <ProfileDropdown
              profileImage={ProfilPic}
              menuItems={profileMenuItems}
            />
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <MobileNavigation navigation={navigation} />
      </DisclosurePanel>
    </Disclosure>
  );
}
