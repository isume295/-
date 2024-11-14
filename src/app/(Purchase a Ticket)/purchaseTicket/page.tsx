import React from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button, Card, CardBody } from '@nextui-org/react';


const purchaseTicket = () => {
  return (
    <div className="min-h-[1117px] flex flex-col items-center justify-between">
        <Header />

        <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-5 "/>
        
        {/* Form Container */}
        <div className="flex flex-col items-center justify-start w-[428px] h-[293px] gap-[10px] mt-10 mb-10 flex-1">
            <h2 className="w-[428px] h-[34px] text-center text-[24px] font-semibold text-black">이용권 구매</h2>

            <div className="flex flex-col justify-center items-center w-[534px] h-[447px] gap-[24px]">
                <div>
                    <Card className="w-[534px] h-[167px] rounded-xl border shadow-sm border-[#8D64F8]">
                        <CardBody className="flex flex-col items-center justify-center gap-[12px]">

                            {/*------ ----- --- Top --- ----- ------- */}

                            <div className="w-[494px] h-[54px] flex flex-row items-center justify-between">
                                {/*RIGHT */}
                                    <div className='w-[306px] flex flex-col items-center justify-center gap-[5px]'>
                                        <div className="flex flex-row items-center justify-between w-[307px]">
                                            <p className=" font-semibold text-[20px]">고등 연회원 (신규)</p>
                                        </div>
                                        
                                        <div className="flex flex-row items-start justify-start w-full">
                                            <p className="text-[14px] text-[#868F9A]">고등국어 자료 1년간 2,000점 사용</p>
                                        </div>
                                    </div>

                                {/* LEFT */}

                                    <div className='w-[188px] h-[44px] flex flex-row items-center justify-end gap-[10px]'>
                                        <div>
                                            <p className='text-[#8D64F8] text-[20px] font-bold'>270,000원</p>
                                        </div>
                                        <div>
                                            <Button className='w-[80px] h-[44px] text-[14px] text-[#FFFFFF] bg-[#8D64F8] px-4 py-3 rounded-md font-bold'> 구매하기</Button>
                                        </div>
                                    </div>
                            </div>


                            <hr className="w-full border-t-1 border-[rgb(207,212,218)] py-1"/>


                            {/* ------ ----- --- Bottom --- ------ -------*/}
                            <div className="w-[494px] h-[48px] flex flex-row items-center justify-between overflow-hidden">
                                {/* Left */}
                                <div className="w-[330px] h-[48px] flex flex-col justify-center gap-[5px]">
                                    <div className="flex flex-row items-center w-full h-[28px]">
                                    <p className="text-[20px] font-semibold">
                                        고등 연회원 {' '}
                                        <span className="text-[14px]"> (‘자유로국어교실’ 카페 연회원 할인)</span>
                                    </p>
                                    </div>

                                    <div className="w-full h-[14px] flex flex-row items-start">
                                    <p className="text-[10px] text-[#868F9A]">
                                        자유로국어교실 카페에서 연회원으로 이용한 적이 있는 분에 한정함
                                    </p>
                                    </div>
                                </div>

                                {/* Right */}
                                <div className="w-[160px] h-[33px] flex items-center justify-end gap-[8px]">
                                    <p className="text-[#8D64F8] text-[14px] font-bold">240,000원</p>
                                    <Button className="w-[80px] h-[33px] text-[12px] font-bold text-[#8D64F8] border-[#8D64F8] border bg-white rounded-md">
                                    구매하기
                                    </Button>
                                </div>
                            </div>


                        
                        </CardBody>
                    </Card>
                </div>

                <div>
                  <Card className="w-[534px] h-[94px] shadow-sm rounded-xl border">
                        <CardBody className="flex flex-col items-center justify-center gap-[5px]">
                            <div className="w-[494px] h-[54px] flex flex-row items-center justify-between gap-[6px]">
                                {/*RIGHT */}
                                    <div className='w-[306px] flex flex-col items-center justify-center gap-[5px]'>
                                        <div className="flex flex-row items-center justify-between w-[307px]">
                                            <p className=" font-semibold text-[20px]">중학 연회원</p>
                                        </div>
                                        
                                        <div className="flex flex-row items-start justify-start w-full">
                                            <p className="text-[14px] text-[#868F9A]">중학국어 자료 1년간 1,500점 사용</p>
                                        </div>
                                    </div>

                                {/* LEFT */}

                                    <div className='w-[188px] h-[44px] flex flex-row items-center justify-end gap-[10px]'>
                                        <div>
                                            <p className='text-[#8D64F8] text-[20px] font-bold'>200,000원</p>
                                        </div>
                                        <div>
                                            <Button className='w-[80px] h-[44px] text-[14px] text-[#8D64F8] bg-white border border-[#8D64F8] px-4 py-3 rounded-md font-bold'> 구매하기</Button>
                                        </div>
                                    </div>
                            </div>
                          
                        </CardBody>
                    </Card>
                    
                </div>

                <div>
                    <Card className="w-[534px] h-[94px] shadow-sm rounded-xl border">
                            <CardBody className="flex flex-col items-center justify-center gap-[5px]">
                                <div className="w-[494px] h-[54px] flex flex-row items-center justify-between">
                                    {/*LEFT */}
                                        <div className='w-[306px] flex flex-col items-center justify-center gap-[5px]'>
                                            <div className="flex flex-row items-center justify-between w-[307px]">
                                                <p className=" font-semibold text-[20px]">중고등 연회원</p>
                                            </div>
                                        
                                            <div className="flex flex-row items-start justify-start w-full">
                                                <p className="text-[14px] text-[#868F9A]">중고등 자료 1년간 4,000점 사용</p>
                                            </div>
                                        </div>

                                    {/* RIGHT */}

                                        <div className='w-[188px] h-[44px] flex flex-row items-center justify-end gap-[10px]'>
                                            <div>
                                                <p className='text-[#8D64F8] text-[20px] font-bold'>390,000원</p>
                                            </div>
                                            <div>
                                                <Button className='w-[80px] h-[44px] text-[14px] text-[#8D64F8] bg-white border border-[#8D64F8] px-4 py-3 rounded-md font-bold'> 구매하기</Button>
                                            </div>
                                        </div>
                                </div>
                          
                            </CardBody>
                    </Card>
                </div>

                <div className='w-full items-start justify-start'>
                    <p className='text-[14px] text-[#868F9A] '>개별 작품 구매는 구매할 자료를 장바구니에 담아서 구매하실 수 있습니다.</p>
                </div>

            </div>

        </div>


        <Footer />
      
    </div>
  )
}

export default purchaseTicket
