import { React } from "react";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../../../public/assets/images";
const SuperQuality = () => {
  return (
    <div className='flex justify-between items-center gap-8 max-sm:flex-col'>
      <div >
        <h2 className='text-5xl max-w-lg font-bold'>
          We Provide You
          <span className="text-customColor"> Super </span>
          <span className="text-customColor"> Quality </span> Shoes
        </h2>
        <p className='mt-4 max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        {/* <div className='mt-11'>
          <Button label='View details' />
        </div> */}
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