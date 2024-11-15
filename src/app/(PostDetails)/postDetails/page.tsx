'use client';

import {useState, useMemo} from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar3 from '@/components/Sidebar3';
import { Checkbox, Button } from "@nextui-org/react";
import {PostDetailsT1}  from '@/assets/PostDetailT1';
import Image from 'next/image'; 
import InputNoLabel from '@/components/InputNoLable';
import DropDown from '@/components/DropDown';

import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
  } from "@nextui-org/react";
    

const PostDetials = () => {
        // Pagination Logic
        const [page, setPage] = useState(1); 

        const rowsPerPage = 15

        const pages = Math.ceil(PostDetailsT1.length / rowsPerPage);

        const [currentData, setCurrentData] = useState<any>();

        const items = useMemo(() => {
            const start = (page - 1) * rowsPerPage;
            const end = start + rowsPerPage;

            setCurrentData(PostDetailsT1.slice(start, end));
            return PostDetailsT1.slice(start, end);
        }, [page, rowsPerPage]);

      
  return (
    <div className="min-h-[2949px] flex flex-col items-center justify-between">
        <Header />
        <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />


        {/* Sidebar and the right side */}
        <div className='flex flex-row  justify-between w-[1080px] gap-[36px]'>
            {/* SideBar */}
            <Sidebar3 />

            {/* RightSide */}
            <div className='flex flex-col items-center justify-center w-[814px] h-[814px] gap-[24px]'>
                {/* Heading  */}public/assets/Icons/whiteBag.svg
                <div className='flex flex-row items-center justify-between w-full h-[76px]'>
                    <h3 className='font-bold text-[20px]'>서동요 (김영현) (25 수완) (12문제)</h3>
                    <div className='w-[50px] h-[20px]'>

                    </div>
                </div>

                <hr className="w-full border-t-1 border-[rgb(207,212,218)] "/>


                {/* Table  */}
                <div className='w-[814px] h-[85px]'>
                    
                </div>


                {/* Buttons  */}
                {/* <div className='flex flex-row items-start justify-between w-[256px] h-[50px] gap-[6px]'>
                    <Button className='w-full h-[50px] rounded-md py-[14px] px-[20px] bg-[#E0F1FF] text-[#42A8FD]'>
                        장바구니 담기
                    </Button>
                    <div className='flex flex-row items-center justify-between'>
                        <Button className='w-[125px] h-[50px] rounded-md py-[14px] px-[20px] bg-[#E0F1FF] text-[#42A8FD]'>
                            다운로드
                        </Button>
                        <Image
                            src="/assets/Icons/BluedownloadIcon.svg"
                            alt="Clip Image"
                            width={12}
                            height={12}
                        />
                    </div>
                </div> */}


                {/* TextBox  */}
                <div className='w-[814px] h-[250px] items-start justify-start border'>
                    <p className='text-[16px]'> 본문영역 </p>
                </div>

                {/* Icons  */}
                <div className='flex flex-row items-start justify-between w-[100px] h-[20px] gap-[24px]'>
                    <div className='w-[41px] h-[20px] gap-[6px]'>
                                sfvwswgw
                    </div>
                    
                    <div className='w-[35px] h-[20px] gap-[6px]'>
                    sfvwswgw
                    </div>
                </div>

                <hr className="w-full border-t-1 border-[rgb(207,212,218)] "/>

                {/* Bottom  */}

                <div></div>

                <div></div>

                <div></div>
                
            </div>
        </div>


        <Footer />
      
    </div>
  )
}

export default PostDetials;
