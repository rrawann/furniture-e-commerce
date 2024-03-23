import { arrowRight } from "../../../public/assets/icons";
// import { offer } from "../assets/images";
// import { Button } from "../components";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../../../public/assets/images";
import { React } from "react";
import Button from "../Buttons";
// import { arrowRight,FaUserPlus,FaShoppingCart } from 'react-icons/fa';
console.log(arrowRight,"here");
const SpecialOffer = () => {
    return (
        <div className='ml-20 mr-20 flex justify-between items-center gap-20 max-sm:flex-col text-lg'>
            <div>
                <img
                    src={shoe4.src}
                    alt='product detail'
                    width={400}
                    height={400}
                    className="mt-20 ml-20 max-sm:ml-4" />
            </div>
            <div className='flex-1 flex-col'>
                <h2 className='text-4xl font-palanquin font-bold'>
                    <span className='text-customColor'>Special </span>
                    Offer
                </h2>
                <p className='mt-4 info-text max-w-lg '>
                    Embark on a shopping journey that redefines your experience with
                    unbeatable deals. From premier selections to incredible savings, we
                    offer unparalleled value that sets us apart.
                </p>
                <p className='mt-6 info-text max-w-lg '>
                    Navigate a realm of possibilities designed to fulfill your unique
                    desires, surpassing the loftiest expectations. Your journey with us is
                    nothing short of exceptional.
                </p>
                
                <div className='mt-11 flex gap-4'>
    <Button label='Shop now' backgroundColor='bg-customColor' textColor='text-white' iconURL={arrowRight.src} />
    <Button
      label='Learn more'
      backgroundColor='bg-customColor'
      borderColor='border-slate-gray'
      textColor='text-white'
    />
  </div>
            </div>
        </div>
    );
};

export default SpecialOffer;
