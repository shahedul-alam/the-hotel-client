import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar border-b border-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/rooms"}>Rooms</Link>
              </li>
              <li>
                <Link to={"/my-bookings"}>My Bookings</Link>
              </li>
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost rounded-none text-xl border border-base-300 md:text-4xl"
          >
            the hotel
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"} className="rounded-none">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/rooms"} className="rounded-none">
                Rooms
              </NavLink>
            </li>
            <li>
              <NavLink to={"/my-bookings"} className="rounded-none">
                My Bookings
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2 md:gap-4">
          <Link to={"/login"} className="btn bg-black text-white rounded-none">
            Login
          </Link>
          <Link to={"/register"} className="btn rounded-none">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
