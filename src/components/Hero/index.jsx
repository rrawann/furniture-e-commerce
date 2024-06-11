import { useState } from "react";
import { arrowRight } from "../../../public/assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../../../public/assets/images";
import { shoes,statistics } from "../../utils/constants";
import FurnCard from "../ShoeCard/index";

import Button from "../Buttons";

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState('https://static.vecteezy.com/system/resources/thumbnails/019/634/903/small/modern-grey-sofa-with-pillow-and-plant-pot-png.png');
    console.log(bigShoeImg,"bigShoeImg+++++++++++++++++++");

    return (
        <div className="flex xl:flex-row max-sm:flex-col">

            <div className=" xl:w-2/5 flex flex-col justify-center items-start pt-20 ml-20 max-sm:pb-5">
                <p className="mb-4 text-2xl text-customColor">Custom Furniture Built Only For You</p>
                <h1 className="text-8xl font-bold w-[800px] z-10 bg-white pt-10 max-sm:w-[300px] max-sm:text-4xl">The New Arrival <span className="text-customColor"> Slogen </span></h1>
                <p className="max-w-sm mt-10 mb-12 text-lg">Discover stylish Slogen arrivals, quality comfort, and innovation for your active life.</p>

                <Button
                    label='Shop Now'
                    backgroundColor='bg-customColor'
                    borderColor='border-slate-gray'
                    textColor='text-white'
                    iconURL={arrowRight.src}
                />

                
                <div className='flex gap-5 pt-20 '>
                    {statistics.map((stat, index) => (
                        <div key={index}>
                            <p className='font-bold text-4xl'>{stat.value}</p>
                            <p className='text-gray-800'>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


            <div className=" flex-1 flex justify-center items-center min-h-screen bg-customColor bg-cover bg-center">
                <img
                    src={bigShoeImg}
                    alt='img detail'
                    width={700}
                    height={610}
                    className="pl-20 z-10 pb-40" />

                {/* <div className='flex sm:gap-6 gap-4 absolute -bottom-[20%] sm:left-[50%] max-sm:px-6'> */}
                <div className='flex gap-6 absolute -bottom-[20%]'>
                    {shoes.map((image, index) => (
                        <div key={index}>
                            <FurnCard
                                index={index}
                                imgURL={image.bigShoe}
                                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>


    );
};

export default Hero;
