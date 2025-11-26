import { Link, NavLink } from "react-router";
import Logo from "../../components/logo/Logo";
import useAuth from "../../hooks/useAuth";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const handleLogout = () => {
    logoutUser()
      .then()
      .catch((error) => alert(error.message));
  };
  const links = (
    <>
      <NavLink>Services</NavLink>
      <NavLink to="/coverage">Coverage</NavLink>
      <NavLink>About Us</NavLink>
      <NavLink>Pricing</NavLink>
      <NavLink>Be a Rider</NavLink>
    </>
  );
  return (
    <div className="navbar shadow-sm bg-white w-11/12 mx-auto rounded-2xl px-8 py-2">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-4 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <a onClick={handleLogout} className="btn text-button px-8 py-4">
            Logout
          </a>
        ) : (
          <Link className="btn text-button px-8 py-4" to="/login">
            Sign In
          </Link>
        )}
        <Link to="/rider">
          <div className="flex items-center mx-4">
            <button className="btn bg-primary text-button rounded-xl">
              Be a Rider
            </button>
            <span className="bg-[#1F1F1F] rounded-full text-primary p-3">
              <FiArrowUpRight size={20} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
