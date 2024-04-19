import React from 'react';
import { services } from '../../utils/constants';
import ServiceCard from './ServiceCard';
import SuperQuality from './SuperQuality';
import SpecialOffer from './SpecialOffer';
import CustomerReviews from './CustomerReviews';
import PopularProduct from '../Product/PopularProduct';

const About = () => {

  return (
    <div id="about" className='mt-20'> 
     <SuperQuality />
      <div className='ml-20 mr-20 flex justify-between items-center gap-9 mt-10  max-sm:flex-col max-lg:flex-col mb-10'>

        {services.map((service) => {

          return (
            <ServiceCard key={service.label} {...service} />

          );
        })}


      </div>
      <SpecialOffer/>
      {/* <PopularProduct/> */}
      <div className='bg-pale-blue'>  <CustomerReviews /></div>
  
    </div>
  );
};

export default About;