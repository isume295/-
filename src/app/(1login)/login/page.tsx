'use client';

import { Button } from "@nextui-org/react";
import InputNoLabel from "@/components/InputNoLable";  // Assuming InputNoLabel component is in the components folder
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Login = () => {

  return (
    <div className="min-h-[1117px] flex flex-col items-center justify-between"> 
      {/* Include Header */}
      <Header />

      <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-5 "/>


      {/* Form Container */}
      <div className="flex flex-col items-center justify-start w-[428px] h-[439px] gap-[40px] mt-10 mb-10 flex-1"> {/* Added flex-1 for spacing */}
        <h2 className="text-left h-[33.6px] text-[24px] font-semibold text-black mt-[10px]">로그인</h2>

        {/* Input Fields */}
        <div className="flex flex-col items-center justify-center gap-[40px]">
          <div className="flex flex-col items-center justify-center gap-[12px]">
            <div className="flex flex-col items-center justify-center gap-[10px] w-[428px]">
              <InputNoLabel
                placeholder="아이디를 입력해 주세요"
                inputParentStyles="w-[428px] h-[40px]"
              />

              <InputNoLabel
                placeholder="비밀번호를 입력해 주세요"
                inputParentStyles="w-[428px] h-[40px]"
                type="text"
              />

              {/* Submit Button */}
              <Button className="w-[428px] h-[42px] px-[20px] py-[10px] bg-[#42A8FD] hover:bg-[#489de2] font-semibold text-white rounded-md">
              로그인
              </Button>
            </div>

            <div className="flex flex-row items-center justify-center">
              <div className="px-[30px] text-[#868F9A]">아이디 찾기</div>
              <div className="px-[30px] text-[#868F9A]">비밀번호 찾기</div>
            </div>

          </div>

          <hr className="w-full border-t-1 border-[rgb(207,212,218)] my-4" />


          <div className="flex flex-col items-center justify-center gap-[20px]">
            <div className="flex flex-row items-center justify-center">
              아직 회원이 아니세요?
            </div>
            <div className="flex flex-col items-center justify-center">
              <Button variant="bordered" className="w-[428px] h-[50px] px-[20px] py-[10px] font-semibold bg-white border-[#42A8FD] text-[#42A8FD] hover:text-blue-400 rounded-md hover:bg-slate-200">
                회원가입
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer remains at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default Login;