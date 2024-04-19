import { React } from "react";
import { star } from "../../../public/assets/icons";
function Product({imgURL , rate,name , price}) {

    return (
        <>  

            <div className="flex-col">
               <div>
                <img src={imgURL.src}
                alt='img-product'
                />
               </div>
                <div className="flex mt-5 gap-2 mb-5">
                <img
                    src={star.src}
                    width={24}
                    height={24}
                    alt='rating star'
                   
                />
                <p className="text-2xl text-gray-500">({rate})</p>
                </div>

                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-2xl text-red-500 font-bold">{price}</p>





            </div>
        </>
    );
}


export default Product;