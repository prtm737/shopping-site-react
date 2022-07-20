import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ onSearch, cartItemCount }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = () => {
    if (searchQuery.trim().length) {
      onSearch(searchQuery.trim());
    }
    setSearchQuery("");
  };
  return (
    <>
      <header class="bg-[#513252] shadow-2xl">
        <div class="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto">
          <div>
            <Link to="/" className="link">
              <h1 className="text-3xl  text-white font-semibold">E-commerce</h1>
            </Link>
          </div>
          <div class="flex items-center space-x-4">
            <form class="flex-col mb-0 lg:flex">
              <div class="relative">
                <input
                  class="h-10 pr-10 text-sm placeholder-gray-300 border-gray-200 rounded-lg focus:z-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  type="text"
                />

                <button
                  class="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
                  onClick={handleSubmit}
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div>
            <Link to="/cart" className="link headerCart">
              {cartItemCount > 0 && (
                <div className="relative top-1 left-2 text-white">
                  {cartItemCount <= 9 ? cartItemCount : "9+"}
                </div>
              )}
              <FaShoppingCart color="white" size={25} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export { Navbar };
