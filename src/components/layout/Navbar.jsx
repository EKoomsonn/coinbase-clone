import { Link } from "react-router-dom";
import coinbaseImage from "../../assets/coinbaseimage.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-12 py-5 border-b border-gray-200 bg-white shadow-sm">
      
      {/* Logo Image */}
      <Link to="/">
        <img
          src={coinbaseImage}
          alt="Coinbase Logo"
          className="h-8 w-auto"
        />
      </Link>

      {/* Center Links */}
      <div className="hidden md:flex gap-8 text-gray-700 font-medium">
        <Link to="/explore" className="hover:text-black transition">
          Explore
        </Link>
        <Link to="/learn" className="hover:text-black transition">
          Learn
        </Link>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-4">
        <Link to="/signin" className="text-gray-700 font-medium">
          Sign in
        </Link>

        <Link
          to="/signup"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Get started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;