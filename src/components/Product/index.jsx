import { React } from "react";
import { star } from "../../../public/assets/icons";
function Product(props) {
    const { name, image, price, rate } = props;

    return (
        <>

            <div className="flex-col">
                <div className="border-l-8 border-customColor hover:border-r-8">
                    <img src={image}
                        alt='img-product'
                        className="cover"
                    />
                </div>
                {/* <div className="flex mt-5 gap-2 mb-5">
                <img
                    src={star.src}
                    width={24}
                    height={24}
                    alt='rating star'
                   
                />
                <p className="text-2xl text-gray-500">({rate})</p>
                </div> */}

                <h2 className="pt-2 text-2xl font-bold flex item-center justify-center">{name.substring(0, 20)} {name.length >= 20 && '...'}</h2>
                <p className="pt-2 text-2xl text-red-500 font-bold flex item-center justify-center">${price}</p>





            </div>
        </>
    );
}


export default Product;