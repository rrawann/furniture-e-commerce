import React from 'react';
import { services } from '../../utils/constants';
import ServiceCard from './ServiceCard';
import SuperQuality from './SuperQuality';

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
    </div>
  );
};

export default About;