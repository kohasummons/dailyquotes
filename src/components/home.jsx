import React, { useState, useEffect } from 'react';
import heartHealed from '../assets/heart-healed.svg';
import heartScarred from '../assets/heart-scarred.svg';
import Banner from './banner';

// Feature Flag
import { useFeatureIsOn } from '@growthbook/growthbook-react';

const Home = () => {
  const isBannerVisible = useFeatureIsOn('showdailyquotesbanner');
  
  return (
    <>
      {/* Code below is a feature flag */}
      {isBannerVisible && <Banner />}
      {/* Code above is a feature flag */}

      <header className='mb-16'>
        <h1 className='font-semibold text-2xl text-center tracking-tight'>
          dailyQuotes
        </h1>
      </header>
      <div className='mb-28'>
        <p className='font-regular text-center md:text-3xl text-xl text-[#808080] tracking-tighter'>
           Money and success don’t change people; they merely amplify what is
          already there 
        </p>
      </div>
      <div className='flex flex-row items-center justify-center gap-14'>
        <div className='flex flex-col items-center justify-center'>
          <img
            src={heartScarred}
            alt='Button to show dissapproval'
            srcSet=''
            className='cursor-pointer max-w-12 max-h-12'
          />
          <span className='text-[#C1C1C1] text-xs text-center font-semibold'>
            Sheesh
          </span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img
            src={heartHealed}
            alt='Button to show approval'
            srcSet=''
            className='cursor-pointer max-w-12 max-h-12'
          />
          <span className='text-[#C1C1C1] text-xs text-center font-semibold'>
            Sweet
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
