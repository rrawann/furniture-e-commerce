import { React } from "react";
import Product from ".";
import { products } from "../../utils/constants";
function PopularProduct() {

    return (
        <>
          <div id="products" className="mt-20 ml-20">
            <h1 className="text-4xl font-bold">Our <span className="text-customColor">Popular</span> Products</h1>
            <p className="text-lg max-w-lg mt-5 text-gray-500">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>

          <div className="flex mt-20 gap-12 mb-40 max-sm:flex-col" >
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