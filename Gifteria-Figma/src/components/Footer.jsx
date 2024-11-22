import React from 'react';

const Footer = () => {
  return (
    <footer className="min-h-[6rem] w-full bg-mandy-200 flex flex-col sm:flex-row justify-between items-center text-center px-4 py-2">

      <div className="text-mandy-600">
        <h3 className="text-xl font-bold">Gifteria</h3>
        <p className="text-sm">Making moments special since 2024</p>
      </div>

      <div className="flex gap-4 my-2 sm:my-0">
        <a
          href="#"
          className="text-mandy-600 hover:text-mandy-900 transition-all duration-200"
        >
          About Us
        </a>
        <a
          href="#"
          className="text-mandy-600 hover:text-mandy-900 transition-all duration-200"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-mandy-600 hover:text-mandy-900 transition-all duration-200"
        >
          Contact
        </a>
      </div>

      <div className="text-mandy-600">
        <p className="text-sm">© 2024 Gifteria. All Rights Reserved.</p>
        <div className="flex gap-2 mt-2">
          <a href="#" className="hover:text-mandy-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.56c-.88.39-1.83.65-2.82.77a4.92 4.92 0 0 0 2.15-2.7 9.92 9.92 0 0 1-3.12 1.2A4.92 4.92 0 0 0 16.85 3c-2.72 0-4.92 2.21-4.92 4.92 0 .38.04.75.12 1.1A13.95 13.95 0 0 1 1.67 3.17a4.93 4.93 0 0 0-.66 2.48 4.92 4.92 0 0 0 2.18 4.1 4.92 4.92 0 0 1-2.23-.62v.06c0 2.27 1.61 4.16 3.74 4.6a4.92 4.92 0 0 1-2.21.08 4.93 4.93 0 0 0 4.6 3.42 9.87 9.87 0 0 1-6.1 2.1c-.4 0-.79-.02-1.18-.07A13.93 13.93 0 0 0 7.54 21c9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.62A10.02 10.02 0 0 0 24 4.56z" />
            </svg>
          </a>
          <a href="#" className="hover:text-mandy-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.04c-5.53 0-10 4.47-10 10a10 10 0 0 0 7.61 9.77v-6.91h-2.3v-2.85h2.3v-2.18c0-2.28 1.39-3.53 3.42-3.53.97 0 1.81.07 2.05.1v2.38h-1.41c-1.11 0-1.33.53-1.33 1.3v1.9h2.66l-.35 2.85h-2.31v6.91a10 10 0 0 0 7.61-9.77c0-5.53-4.47-10-10-10z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
