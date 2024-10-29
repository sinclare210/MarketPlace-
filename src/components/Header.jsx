import React, { useContext, useEffect, useState } from 'react';
// Import sidebar and cart contexts
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
// Import icons
import { BsBag } from "react-icons/bs";
import { FaHome } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const navigate = useNavigate();

  // Check authentication status
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  // Scroll effect to toggle header styles
  useEffect(() => {
    const handleScroll = () => setIsActive(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sign in / Sign out function
  const handleAuthClick = () => {
    if (isAuthenticated) {
      localStorage.removeItem('isAuthenticated');
      navigate('/login');
    } else {
      console.log("Navigating to /login"); // Debugging log
      navigate('/login');
    }
  };

  return (
    <header className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex items-center justify-between h-full">
        
        {/* Home link */}
        <Link to="/" aria-label="Home">
          <FaHome size={24} />
        </Link>

        {/* Right-side: Sign In/Out and Cart */}
        <div className="flex items-center">
          {/* Conditional Sign In/Out button */}
          <button 
            onClick={handleAuthClick}
            className="text-red-600 font-semibold mx-4 hover:underline"
          >
            {isAuthenticated ? "Sign Out" : "Sign In"}
          </button>

          {/* Cart icon with item count */}
          <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative">
            <BsBag className="text-2xl" />
            {itemAmount > 0 && (
              <div className="bg-red-500 absolute -right-2 -bottom-2 text-white rounded-full flex justify-center items-center h-[18px] w-[18px] text-[12px]">
                {itemAmount}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
