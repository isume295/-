'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

const MessageBox = () => {
  return (
    <div className="min-h-[1117px] flex flex-col items-center justify-between">
        <Header />

        <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-5 "/>
        
        {/* Form Container */}
        <div className="flex flex-col items-center justify-start w-[428px] h-[293px] gap-[40px] mt-10 mb-10 flex-1">
            <h2 className="w-[428px] h-[34px] text-center text-[24px] font-semibold text-black">메시지함</h2>

            <div className="flex flex-row justify-center items-center w-[1080px] h-[87px] gap-[20px]">
                <div >
                    <Card className="w-[347px] h-[87px] shadow-none rounded-2xl border-2">
                        <CardBody className="flex flex-col items-center justify-center gap-[5px]">
                            <div className="flex flex-row items-center justify-between w-[307px]">
                                <p className=" font-semibold">연회원 기간이 만료되었습니다.</p>
                                <Image
                                  src="/assets/Icons/redDot.svg"
                                  alt="Right Arrow Image"
                                  width={8}
                                  height={8}
                                  className="ml-auto= pb-4"
                                />
                            </div>
                           
                            <div className="flex flex-row items-start  justify-start w-[307px] space-x-4">
                                <p className="text-[14px] text-[#868F9A] w-[70px] h-[20px]"> 자유로 국어 </p>
                                <p className="text-[14px] text-[#868F9A] w-[90px] h-[20px]">YYYY-MM-DD </p>
                            </div>
                        
                        </CardBody>
                    </Card>
                </div>

                <div>
                  <Card className="w-[347px] h-[87px] shadow-none rounded-2xl border-2">
                          <CardBody className="flex flex-col items-center justify-center gap-[5px]">
                              <div className="flex flex-row items-center justify-between w-[307px]">
                                  <p className=" font-semibold">연회원이 되어 주셔서 감사합니다</p>
                              </div>
                            
                              <div className="flex flex-row items-start  justify-start w-[307px] space-x-4">
                                  <p className="text-[14px] text-[#868F9A] w-[70px] h-[20px]">자유로 국어 </p>
                                  <p className="text-[14px] text-[#868F9A] w-[90px] h-[20px]">2024.10.02 </p>
                              </div>
                          
                          </CardBody>
                      </Card>
                    
                </div>

                <div>
                  <Card className="w-[347px] h-[87px] shadow-none rounded-2xl border-2">
                          <CardBody className="flex flex-col items-center justify-center gap-[5px]">
                              <div className="flex flex-row items-center justify-between w-[307px]">
                                  <p className=" font-semibold">회원 가입을 축하드립니다!</p>
                              </div>
                            
                              <div className="flex flex-row items-start  justify-start w-[307px] space-x-4">
                                  <p className="text-[14px] text-[#868F9A] w-[70px] h-[20px]"> 자유로 국어</p>
                                  <p className="text-[14px] text-[#868F9A] w-[90px] h-[20px]">2024.10.01</p>
                              </div>
                          
                          </CardBody>
                      </Card> 
                </div>

            </div>


        </div>


        <Footer />
      
    </div>
  )
}

export default MessageBox
