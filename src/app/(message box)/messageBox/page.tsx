'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardBody } from "@nextui-org/react";

const MessageBox = () => {
  return (
    <div className="min-h-[1117px] flex flex-col items-center justify-between">
        <Header />

        <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-5 "/>
        
        {/* Form Container */}
        <div className="flex flex-col items-center justify-start w-[428px] h-[293px] gap-[40px] mt-10 mb-10 flex-1">
            <h2 className="w-[428px] h-[34px] text-center text-[24px] font-semibold text-black">메시지함</h2>

            <div className="flex flex-row justify-center items-center w-[1080px] h-[87px] gap-[10px]">
                <div className="w-[347px] h-[87px] border p-[20px] gap-[5px]">
                    
                </div>

                <div className="w-[347px] h-[87px] border p-[20px] gap-[5px]">
                    
                </div>

                <div className="w-[347px] h-[87px] border p-[20px] gap-[5px]">
                    
                </div>

            </div>


        </div>


        <Footer />
      
    </div>
  )
}

export default MessageBox
