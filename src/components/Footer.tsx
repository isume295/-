'use client';

const Footer = () => {
  return (
    <footer className="w-[1728px] h-auto py-[20px] flex items-center justify-center gap-[20px] bg-gray-100">
      {/* Inner Container */}
      <div className="w-[1080px] h-[54px] flex flex-col items-center gap-[12px]">

            <div className="w-[1080px] h-[15px] flex flex-row">
                <p className="text-gray-500 text-[11px] hover:underline px-1">자유로 도서</p>
                <p className="text-gray-500 text-[11px] hover:underline px-1">대표 : 김정진</p>
                <p className="text-gray-500 text-[11px] hover:underline px-1">사업자 등록번호 : 206-92-68506</p>
                <p className="text-gray-500 text-[11px] hover:underline px-1">통신판매신고번호 : 제2017-서울성동-0727호</p>
                <p className="text-gray-500 text-[11px] hover:underline px-1">주소 : 서울특별시 광진구 천호대로 569 (3층)</p>
                <p className="text-gray-500 text-[11px] hover:underline px-1">전화 : 02)3409-2217</p>
                <p className="text-gray-500 text-[11px] hover:underline px-1">팩스 : 02)3409-2218</p>
                <p className="text-gray-500 text-[11px] hover:underline px-1">메일 : jayurojj@naver.com</p>
            </div>
            <div className="w-[1080px] h-[15px] flex flex-row">
                <p className="text-gray-500 text-[11px] hover:underline px-1">개인정보 처리방침</p>
                <p className="text-gray-500 text-[11px] hover:underline px-1">이용약관</p>
            </div>
            <div className="w-[1080px] h-[15px] flex flex-row">
                <p className="text-gray-500 text-[10px] hover:underline px-1">Copyright © 2024 Jayuro All Right Reserved.</p>
            </div>
            
      </div>  

    </footer>
  );
};

export default Footer;