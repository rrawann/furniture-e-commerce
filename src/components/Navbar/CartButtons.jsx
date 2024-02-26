import React from 'react';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import Link from "next/link"
// import { useProductsContext } from '../context/products_context';
// import { useCartContext } from '../context/cart_context';
// import { useUserContext } from '../context/user_context';

const CartButtons = () => {
//   const { closeSidebar } = useProductsContext();
//   const { total_items, clearCart } = useCartContext();
//   const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <div className="grid grid-cols-2 gap-2">
      <Link
        href="/cart"
        // onClick={closeSidebar}
        className="p-2 text-gray-500 text-lg flex items-center hover:bg-bgCustomColor hover:rounded-lg hover:text-white"
      >
        Cart
        <span className="flex  ml-2">
          <FaShoppingCart className="h-6 w-6" />
          {/* <span className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center ml-1 text-xs">
            {total_items}
          </span> */}
        </span>
      </Link>
      {/* {myUser ? (
        <button
          type="button"
          className="text-gray-500 text-lg flex items-center bg-transparent border-transparent"
          onClick={() => {
            clearCart();
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout <FaUserMinus className="h-6 w-6 ml-1" />
        </button>
      ) : (
        <button
          type="button"
          className="text-gray-500 text-lg flex items-center bg-transparent border-transparent"
        //   onClick={loginWithRedirect}
        >
          Login <FaUserPlus className="h-6 w-6 ml-1" />
        </button>
      )} */}
          <button
          type="button"
          // className="p-2 text-gray-500 text-lg flex hover:bg-bgCustomColor hover:rounded-lg hover:text-white"
          className="p-2 text-gray-500 text-lg flex items-center hover:bg-bgCustomColor hover:rounded-lg hover:text-white"
        //   onClick={loginWithRedirect}
        >
          Login <span className='ml-2'><FaUserPlus className="h-6 w-6" /></span>
        </button>
    </div>
  );
};

export default CartButtons;