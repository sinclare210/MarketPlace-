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
   const isAuthenticated = localStorage.getItem('isAuthenticated'); // Check authentication status
  const navigate = useNavigate();

  // Event listener for scroll
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sign out function
  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <header className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Home link */}
        <Link to={"/"}>
          <div>
            <FaHome size={24} />
          </div>
        </Link>

        {/* Sign Out button centered */}
        <div className='flex items-center'>
          {isAuthenticated && (
            <>
              <button 
                onClick={handleSignOut}
                className='text-red-600 font-semibold mx-4 hover:underline'
              >
                Sign Out
              </button>
              <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
                <BsBag className='text-2xl' />
                <div className='bg-red-500 absolute -right-2 -bottom-2 text-white rounded-full flex justify-center items-center h-[18px] w-[18px] text-[12px]'>
                  {itemAmount}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
