import { useState } from "react";
import { arrowRight } from "../../../public/assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../../../public/assets/images";

import Button from "../Buttons";

const Hero = () => {
    return (
        <div className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10">

            <div className="m-20">
                <p className="mb-4 text-2xl text-customColor">Our Summer collections</p>
                <h1 className="text-8xl font-bold w-[800px]">The New Arrival <span className="text-customColor"> Nike </span>Shoes</h1>
                <p className="max-w-sm mt-10 mb-12 text-lg">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
               
                <Button
                    label='Shop Now'
                    backgroundColor='bg-customColor'
                    borderColor='border-slate-gray'
                    textColor='text-white'
                    iconURL={arrowRight.src}
                />
            </div>
            <div className="bg-customColor mr-20  bg-cover bg-center">
                <img
          src={bigShoe2.src}
          alt='img detail'
          width={610}
          height={502}
      
        />
            </div>
        </div>
    );
};

export default Hero;
