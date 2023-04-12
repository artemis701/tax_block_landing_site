import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Congrat({ showSidebar }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="user w-full min-h-screen h-fit ">
      <div className={`w-full min-h-screen bg-cover bg-no-repeat top-0 relative bg-[#100f0c] overflow-hidden`}>
        <img className='absolute sm:top-60 top-40 right-10 sm:right-40' src='imgs/star-2.png' />
        <img className='absolute left-10 sm:left-60 top-20 sm:top-30' src='imgs/star-2.png' />
        <div className='con-sub1'>
        </div>
        <div className='z-10 relative'>
          <div className='place-content-center w-full h-full pt-[150px]'>
            <img className='mx-auto sm:w-60 w-40' src='imgs/user-congrat.png' />
            <h1 className='sm:text-[60px] text-2xl sm:text-[35px] text-[#FBD125] w-full text-center font-[nunito] font-bold'>{t('CONGRATULATION!')}</h1>
            <p className='text-[#B2842C]  text-base p-2 sm:text-[28px] font-[nunito] w-full text-center' style={{'padding-top':'40px'}}>{t('Thank You For Joining The Tax & Block Community Chat List!')}</p>
            <p className='text-[#B2842C]  text-base p-2 sm:text-[28px] font-[nunito] w-full text-center'>{t('A welcome email has also been sent to you with the attached whitepaper.')}</p>
            <p className='text-[#B2842C]  text-base p-2 sm:text-[28px] font-[nunito] w-full text-center'>{t('If you don\'t see it, please check your spam folder')}</p>
            <p className='text-center w-full my-4 text-sm sm:text-[25px] px-4 font-[nunito]' style={{'padding-top':'20px'}}>{t('Need to know more about Pitshou Solution LLC? Well, Pitshou Solutions LLC is a Texas')}</p>
            <p className='text-center w-full my-4 text-sm sm:text-[25px] px-4 font-[nunito]'>{t('company that manages two different projects: blockchain software and mold assessment.')}</p>

            <p className='text-center w-full my-4 text-sm sm:text-[22px] px-4 font-[nunito]' style={{'padding-top':'30px'}}>{t('While the blockchain software project relates to Tax & Block under TrafficSourceBuilder with emphasis on email marketing,')}</p>
            <p className='text-center w-full my-4 text-sm sm:text-[22px] px-4 font-[nunito]'>{t('the mold assessment project is conducted under Applied Mold Inspection of Taxas. This project aims to apply scientific')}</p>
            <p className='text-center w-full my-4 text-sm sm:text-[22px] px-4 font-[nunito]'>{t('knowledge and technology to perfrom thorough mold inspections in commercial and residential buildings')}</p>
            
            <div className='w-full justify-center text-center mt-10'>
              <button className='rounded text-white mx-auto bg-gradient-to-r to-[#B2842C] from-[#FBD125] py-3 h-[50px] px-6'>
                {t('Contact Now')}
              </button>
            </div>
          </div>
        </div>
        <img className='absolute bottom-40 left-10 sm:left-60' src='imgs/star-2.png' />
        <img className='absolute right-10 sm:right-32 bottom-32' src='imgs/star-2.png' />
      </div>
    </div>
  );
}

export default Congrat;
