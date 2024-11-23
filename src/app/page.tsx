'use client';

import { useState, useMemo } from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import { Checkbox, Button } from "@nextui-org/react";
import { ShoppingCartTable } from '@/assets/shoppingCart';
import Image from 'next/image';
import InputNoLabel from '@/components/InputNoLable';
import DropDown from '@/components/DropDown';
import { RadioGroup, Radio } from "@nextui-org/react";

import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
} from "@nextui-org/react";


const HomePage = () => {
    const options = [
        { key: "1", label: "이전글" },
        { key: "2", label: "다음글" }
    ]
    // Pagination Logic
    const [page, setPage] = useState(1);

    const rowsPerPage = 4

    const pages = Math.ceil(ShoppingCartTable.length / rowsPerPage);

    const [currentData, setCurrentData] = useState<any>();

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        setCurrentData(ShoppingCartTable.slice(start, end));
        return ShoppingCartTable.slice(start, end);
    }, [page, rowsPerPage]);

    // Selection Logic
    const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
    const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
        number[]
    >([]);


    return (
        <div className="min-h-[2949px] flex flex-col items-center justify-between">
            <Header />
            <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />


            {/* Sidebar and the right side */}
            <div className='flex flex-row  justify-between w-[1080px] gap-[36px]'>
                {/* SideBar */}
                <Sidebar />

                {/* RightSide */}
                <div className="flex flex-col items-center justify-center w-[824px] h-[2343px] py-[24px] gap-[80px]">
                    <div className="flex flex-col w-[824px] h-[760px]">
                        <div className="flex flex-row w-[824px] h-[36px] gap-[40px]">
                
                        </div>
                    </div>
                </div>

            </div>


            <Footer />

        </div>
    )
}

export default HomePage;
