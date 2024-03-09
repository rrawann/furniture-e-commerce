import React from 'react';
import { services } from '../../utils/constants';
import ServiceCard from './ServiceCard';
import SuperQuality from './SuperQuality';
import SpecialOffer from './SpecialOffer';

const About = () => {

  return (
    <div id="about"> 
     <SuperQuality />
      <div className='flex justify-between items-center gap-9 mt-10  max-sm:flex-col'>

        {services.map((service) => {

          return (
            <ServiceCard key={service.label} {...service} />

          );
        })}


      </div>
      <SpecialOffer/>
    </div>
  );
};

export default About;