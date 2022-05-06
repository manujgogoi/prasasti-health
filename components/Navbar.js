import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <nav className="bg-green-600 text-white text-xl">
        {/* Fullscreen Menu */}
        <ul className="hidden md:flex gap-5 divide-x-2 pt-1 pb-1">
          <li className="text-center pl-6 cursor-pointer hover:text-gray-300">
            <Link href="/">Home</Link>
          </li>
          <li className="text-center pl-6 cursor-pointer hover:text-gray-300">
            <Link href="/services">Services</Link>
          </li>
          <li className="text-center pl-6 cursor-pointer hover:text-gray-300">
            <Link href="/activities">Activities</Link>
          </li>
          <li className="text-center pl-6 cursor-pointer hover:text-gray-300">
            <Link href="/photos">Photos</Link>
          </li>
          <li className="text-center pl-6 cursor-pointer hover:text-gray-300">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden pr-3 pt-1 pb-1 justify-end toggle-button">
          <button onClick={() => setIsNavOpen(!isNavOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <Transition
          show={isNavOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden">
            <ul className="pl-5 pb-5 pr-5">
              <li className="cursor-pointer hover:bg-green-700 pl-1 pt-2 pb-2">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:bg-green-700 pl-1 pt-2 pb-2">
                <Link href="/services">Services</Link>
              </li>
              <li className="cursor-pointer hover:bg-green-700 pl-1 pt-2 pb-2">
                <Link href="/activities">Activities</Link>
              </li>
              <li className="cursor-pointer hover:bg-green-700 pl-1 pt-2 pb-2">
                <Link href="/photos">Photos</Link>
              </li>
              <li className="cursor-pointer hover:bg-green-700 pl-1 pt-2 pb-2">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
