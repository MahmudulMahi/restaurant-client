import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'

import './Featured.css'

const Featured = () => {
  return (
    <div className='feature-item bg-fixed text-white pt-8 my-10'>
      <SectionTitle subHeading={'check it out'} heading={'Feature Item'}>

      </SectionTitle>

      <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-30 bg-w pb-20 pt-12 px-32 '>
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className='md:ml-10'>
          <p>Aug 20,2029</p>
          <p className='uppercase'>Where can i get somw</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ullam asperiores reiciendis? Est quam, nesciunt, aut molestiae asperiores a fuga similique ipsum expedita ratione, quasi suscipit! Tempore error earum aperiam!</p>
          <button className="btn btn-outline border-0 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;