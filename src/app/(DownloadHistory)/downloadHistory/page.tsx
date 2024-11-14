'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button, Card, CardBody } from '@nextui-org/react';    
import Image from 'next/image'; 
import React from "react";
import { PaymentData } from "@/assets/paymentDataT1";

const TicketAndPaymentDetails = () => {

  return (
    <div className="min-h-[1117px] flex flex-col items-center justify-between"> 
      {/* Include Header */}
      <Header />

      <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-2"/>

      {/* Form Container */}
      <div className="flex flex-col items-center justify-start w-[428px] h-[293px] gap-[10px] mt-10 mb-10 flex-1">
            <h2 className="w-[428px] h-[34px] text-center text-[24px] font-semibold text-black">마이페이지</h2>

            {/* ----- ---- --- TOP  --- ----- ------*/}
            <div className='flex flex-cols items-center justify-center w-[1728px] h-[108px]'>
                <div className="w-full flex justify-center border-b border-[rgb(207,212,218)]">
                    {/* Inner content container */}
                    <div className="flex flex-row items-center justify-between gap-[60px]">
                        <div className="text-[#868F9A]  pb-3 font-bold">내 정보 관리</div>
                        <div className="text-[#868F9A] pb-3 font-bold">이용권 및 결제 내역</div>
                        <div className=" border-b-4 border-[#42A8FD] text-[#42A8FD] pb-3 font-bold">다운로드 내역</div>
                        <div className="text-[#868F9A] pb-3 font-bold">나의 활동</div> 
                    </div>
                </div>
                
            </div>


            {/* ----- ---- --- BOTTOM  --- ----- ------*/}
            <div className='flex flex-col items-center justify-center w-[1080px] h-[582px] gap-[8px]'>

                <div className="flex flex-row items-start justify-between w-full">
                    <h3 className='text-[20px] font-bold'>연회원 이용권</h3>
                </div>

                <div className='w-[1080px] h-[484px]'>

                </div>
            </div>


        
       </div>

      {/* Footer remains at the bottom of the page */}
      <Footer />
    </div>
  )
}

export default TicketAndPaymentDetails;

