import React from 'react';
import Link from "next/link"
// import { FaBars,FaShoppingCart } from 'react-icons/fa';
// import { useProductsContext } from '../context/products_context';
// import { useUserContext } from '../context/user_context';
// import CartButtons from './CartButtons';
// import logo from '../assets/logo.svg';
import { links } from '../../utils/constants';
import CartButtons from './CartButtons';
// import { useRouter } from 'next/router';
const Navbar = () => {
  // const { openSidebar } = useProductsContext();
  // const { myUser } = useUserContext();
  // const router = useRouter();
  // const handleButtonClick = () => {
  //   router.push('/about');
  // };
  return (
    <nav className="bg-white-100 h-20 flex items-center justify-center">
      <div className="max-w-screen-xl w-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <img src='https://img.freepik.com/free-vector/minimalist-furniture-logo-with-armchair-lamp_23-2148477507.jpg' alt="logo-furniture" className="w-44 mt-20" />
          </Link>
          {/* <button
            type="button"
            className="text-gray-500 ml-4 focus:outline-none focus:text-gray-700"
            // onClick={openSidebar}
          >
            <FaBars className="h-6 w-6" />
          </button> */}
        </div>
        <ul className="hidden md:flex space-x-6 mt-5">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link
                  href={url}
                
                  className="p-2 uppercase text-gray-500 hover:border-b hover:border-t border-customColor"
                >
                  {text}
                  
                </Link>
              </li>
            );
          })}
          {/* {myUser && (
            <li>
              <Link
                to="/checkout"
                className="text-gray-500 hover:text-gray-700 uppercase"
              >
                checkout
              </Link>
            </li>
          )} */}
           
        </ul>
        <CartButtons />
        
      </div>
    </nav>
  );
};

export default Navbar;