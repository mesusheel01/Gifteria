import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="min-h-[4rem] w-full bg-mandy-200 flex justify-between items-center text-center">

        <div className="ml-10 md:ml-28 text-2xl text-mandy-600 font-sofia">Gifteria</div>

        <div className="flex items-center gap-3 p-2 mr-10  md:mr-28">
          <div
            className={`${
              isMenuOpen ? 'flex absolute top-16 bg-mandy-200 rounded-lg p-1 bg-opacity-50 ' : 'hidden'
            } flex-col sm:flex sm:flex-row gap-3   text-mandy-900`}
          >
            <a className='hover:text-mandy-600' href='www.gifteria.com/home'>Home</a>
            <a className='hover:text-mandy-600' href='www.gifteria.com/ideas'>Ideas</a>
            <a className='hover:text-mandy-600' href='www.gifteria.com/products'>Products</a>
            <a className='hover:text-mandy-600' href='www.gifteria.com/about'>About</a>

          </div>

          <button className="hover:bg-mandy-50 hover:text-mandy-600 transition-all duration-300 p-1.5 bg-mandy-600 rounded-xl text-mandy-50">
            Buy Now
          </button>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className={` hover:bg-mandy-50 hover:text-mandy-600 transition-all duration-300 p-2 rounded-lg`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-mandy-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {
            isMenuOpen && <></>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
