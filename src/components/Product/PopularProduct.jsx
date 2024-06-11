import React, { useState, useEffect } from 'react';
import Product from ".";
import axios from "axios";
import { arrowRight } from "../../../public/assets/icons";
import Button from "../Buttons";

// import { products } from "../../utils/constants";
function PopularProduct({ products }) {
  // console.log(products,"+++++++++++++++++++++++++++");
  return (
    <>
      <div id="products" className="mt-20 ml-20">
        <h1 className="text-4xl font-bold">Our <span className="text-customColor">Popular</span> Products</h1>
        <p className="text-lg max-w-lg mt-5 text-gray-500">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
        <div className='float-right mr-20'> <a href='#products'> <Button
          label='SHOW ALL'
          backgroundColor='bg-customColor'
          borderColor='border-slate-gray'
          textColor='text-white'
          iconURL={arrowRight.src}
        /></a>
        </div>
        {/* overflow-x-auto no-scrollbar == not use */}
        <div className="flex mt-20 gap-12 mb-40 max-sm:flex-col mr-20 overflow-x-auto no-scrollbar" >
          {products.map((item) => {

            return (
              <Product key={item.label} {...item} />
            );
          })}
        </div>
      </div>
    </>
  );
}




export default PopularProduct;