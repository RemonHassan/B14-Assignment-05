import logo from "../src/assets/logo-text.png";

function NavBaar() {
  return (
    <div className="sticky top-0 z-50 navbar bg-base-100/90 backdrop-blur-md px-4 sm:px-8 py-3 shadow-xs">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden mr-2"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-3 shadow-lg border border-gray-100"
          >
            <li>
              <a
                href="#home"
                className="font-medium text-gray-700 hover:bg-pink-50! hover:text-pink-600!"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                className="font-medium text-gray-700 hover:bg-pink-50! hover:text-pink-600!"
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="font-medium text-gray-700 hover:bg-pink-50! hover:text-pink-600!"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-medium text-gray-700 hover:bg-pink-50! hover:text-pink-600!"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-medium text-gray-700 hover:bg-pink-50! hover:text-pink-600!"
              >
                Contact
              </a>
            </li>
            <div className="divider my-1"></div>
            <li>
              <a
                href="#signin"
                className="font-medium text-gray-700 hover:text-pink-600!"
              >
                Sign In
              </a>
            </li>
            <li>
              <a
                href="#signup"
                className="bg-linear-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-semibold justify-center"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>

        <a href="#" className="hidden lg:flex items-center">
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="h-8 w-auto object-contain"
          />
        </a>
      </div>

      <div className="navbar-center">
        <a
          href="#"
          className="lg:hidden absolute left-1/2 -translate-x-1/2 flex items-center"
        >
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="h-7 w-auto object-contain"
          />
        </a>

        <ul className="hidden lg:flex menu menu-horizontal px-1 gap-1">
          <li>
            <a
              href="#home"
              className="font-medium text-gray-600 hover:bg-gray-100! hover:text-pink-600! transition-colors rounded-lg"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              className="font-medium text-gray-600 hover:bg-gray-100! hover:text-pink-600! transition-colors rounded-lg"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="font-medium text-gray-600 hover:bg-gray-100! hover:text-pink-600! transition-colors rounded-lg"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-medium text-gray-600 hover:bg-gray-100! hover:text-pink-600! transition-colors rounded-lg"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-medium text-gray-600 hover:bg-gray-100! hover:text-pink-600! transition-colors rounded-lg"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <a
          href="#signin"
          className="btn btn-ghost btn-sm hidden sm:inline-flex text-gray-700 hover:text-pink-600! font-medium normal-case"
        >
          Sign In
        </a>
        <a
          href="#signup"
          className="btn btn-sm border-none bg-linear-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-medium normal-case rounded-full px-5 shadow-xs transition-opacity"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default NavBaar;
