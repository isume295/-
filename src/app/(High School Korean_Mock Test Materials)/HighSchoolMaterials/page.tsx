'use client';

import {useState, useMemo} from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import { Checkbox } from "@nextui-org/react";
import {PaymentData}  from '@/assets/paymentDataT1';
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
  } from "@nextui-org/react";
    

const HighSchoolMaterials = () => {
      // Pagination Logic
        const [page, setPage] = useState(1);

        const rowsPerPage = 10

        const pages = Math.ceil(PaymentData.length / rowsPerPage);

        const [currentData, setCurrentData] = useState<any>();

        const items = useMemo(() => {
            const start = (page - 1) * rowsPerPage;
            const end = start + rowsPerPage;

            setCurrentData(PaymentData.slice(start, end));
            return PaymentData.slice(start, end);
        }, [page, PaymentData, 10, rowsPerPage]);

      
  return (
    <div className="min-h-[2949px] flex flex-col items-center justify-between">
        <Header />
        <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />


        {/* Sidebar and the right side */}
        <div className='flex flex-row  justify-between w-[1080px] gap-[36px]'>
            {/* SideBar */}
            <Sidebar />

            {/* RightSide */}
            <div className='flex flex-col items-center justify-center w-[824px] h-[1191px] py-[60px] gap-[40px]'>
                {/* Top  */}
                <div className='flex flex-col items-center justify-center w-[824px] h-[266px] gap-[12px]'>
                    <div className='flex flex-col items-center justify-center w-[824px] h-[34px] '>
                        <h3 className='font-bold text-[24px]'>고등국어(모의고사 자료)</h3>
                    </div>

                    <div className='flex flex-col items-center justify-center border w-[516px] h-[220px] '>
                        {/* A row  */}
                        <div className='w-[516px] h-[44px] border-b border-[#CFD4DA] flex flex-row items-start justify-start'>
                            <div className='flex flex-row items-start justify-start w-[85px] h-[44px] p-[12px] border-b border-[#CFD4DA] bg-[#F3F4F6] gap-[4px]'>
                                <div className='flex flex-row items-center justify-between'>
                                        <Checkbox  size='sm' />
                                        <p className='w-[42px] h-[17px] text-[10px] text-[#868F9A]'> 학년 </p>
                                </div>
                            </div>
                            <div className='flex flex-row items-start justify-start w-[431px] h-[44px] p-[8px] gap-[4px]'>
                                <p className='text-[12px] rounded-full py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>고1</p>
                                <p className='text-[12px] rounded-full py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>고2</p>
                                <p className='text-[12px] rounded-full py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>고3</p>

                            </div>
                        </div>
                        {/* A row  */}
                        <div className='w-[516px] h-[44px] border-b border-[#CFD4DA] flex flex-row items-start justify-start'>
                            <div className='flex flex-row items-start justify-start w-[85px] h-[44px] p-[11px] border-b border-[#CFD4DA] bg-[#F3F4F6] gap-[2px]'>
                                    <div className='flex flex-row items-center justify-between'>
                                        <Checkbox  size='sm' />
                                        <p className='w-[42px] h-[17px] text-[10px] text-[#868F9A]'> 시행연도 </p>
                                    </div>
                                    

                            </div>
                            <div className='flex flex-row items-start justify-start w-[431px] h-[44px] p-[8px] gap-[4px]'>
                                <p className='text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>2025</p>
                                <p className='text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>2024</p>
                                <p className='text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>2023</p>
                                <p className='text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>2022</p>


                            </div>
                        </div>
                        {/* A row  */}
                        <div className='w-[516px] h-[44px] border-b border-[#CFD4DA] flex flex-row items-start justify-start'>
                            <div className='flex flex-row items-start justify-start w-[85px] h-[44px] p-[12px] border-b border-[#CFD4DA] bg-[#F3F4F6] gap-[4px]'>
                                <div className='flex flex-row items-center justify-between'>
                                        <Checkbox  size='sm' />
                                        <p className='w-[42px] h-[17px] text-[10px] text-[#868F9A]'> 월 </p>
                                </div>   
                            </div>
                            <div className='flex flex-row items-start justify-start w-[431px] h-[44px] p-[8px] gap-[4px]'>
                                <p className='text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>3월</p>
                                <p className='text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>4월</p>
                                <p className='text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>6월</p>
                                <p className='text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>7월</p>
                                <p className='text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>9월</p>
                                <p className='text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>10월</p>
                                <p className='text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>11월</p>



                            </div>
                        </div>
                        {/* A row  */}
                        <div className='w-[516px] h-[44px] border-b border-[#CFD4DA] flex flex-row items-start justify-start'>
                            <div className='flex flex-row items-start justify-start w-[85px] h-[44px] p-[12px] border-b border-[#CFD4DA] bg-[#F3F4F6] gap-[4px]'>
                                <div className='flex flex-row items-center justify-between'>
                                        <Checkbox  size='sm' />
                                        <p className='w-[42px] h-[17px] text-[10px] text-[#868F9A]'> 분야 </p>
                                </div>
                            </div>
                            <div className='flex flex-row items-start justify-start w-[431px] h-[44px] p-[8px] gap-[4px]'>
                                <p className='text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>독서</p>
                                <p className='text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>문학</p>
                                <p className='text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>화법과 작문</p>
                                <p className='text-[12px] py-[4px] px-[8px] gap-[10px] text-[#868F9A]'>언어와 매체(문법)</p>


                            </div>
                        </div>
                        {/* A row  */}
                        <div className='w-[516px] h-[44px] border-b border-[#CFD4DA] flex flex-row items-start justify-start'>
                            <div className='flex flex-row items-start justify-start w-[85px] h-[44px] p-[12px] border-b border-[#CFD4DA] bg-[#F3F4F6] gap-[4px]'>
                                <div className='flex flex-row items-center justify-between'>
                                        <Checkbox  size='sm' />
                                        <p className='w-[42px] h-[17px] text-[10px] text-[#868F9A]'> 유형 </p>
                                </div>
                            </div>
                            <div className='flex flex-row items-start justify-start w-[431px] h-[44px] p-[8px] gap-[4px]'>
                                <p className='text-[12px] py-[4px] px-[8px] text-[#868F9A]'>해설・정리</p>
                                <p className='text-[12px] py-[4px] px-[8px] text-[#868F9A]'>연관 문제</p>

                            </div>
                        </div>

                    </div>

                </div>


                {/* Bottom  */}
                <div className='w-[824px] h-[765px] gap-[24px]'>
                    


                </div>
            </div>
        </div>


        <Footer />
      
    </div>
  )
}

export default HighSchoolMaterials;
