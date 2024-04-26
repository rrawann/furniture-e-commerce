import { React } from "react";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../../../public/assets/images";
import Button from "../Buttons";
const SuperQuality = () => {
  return (
    <div className='flex justify-center items-center gap-10 max-sm:flex-col ml-10 mr-10'>
      <div >
        <h2 className='text-5xl max-w-lg font-bold'>
          We Provide You
          <span className="text-customColor"> Super </span>
          <span className="text-customColor"> Quality </span> Shoes
        </h2>
        <p className='mt-4 max-w-lg text-lg'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 max-w-lg text-lg'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          {/* <Button label='View details' /> */}
          <Button
      label='View details' 
      backgroundColor='bg-customColor'
      borderColor='border-slate-gray'
      textColor='text-white'
    />
        </div>
   
   
      </div>

      <div >
        <img
          src={bigShoe3.src}
          alt='product detail'
          width={570}
          height={522}
      
        />
      </div>
    
    </div>
  );
};

export default SuperQuality;
