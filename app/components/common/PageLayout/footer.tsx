import Image from 'next/image';
import logo from '@/public/images/logo.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className=" flex h-auto w-full  flex-col items-center gap-5 bg-[#0e0b14] pb-6 pt-6 align-middle text-sm text-white">
      <Image src={logo} alt="logo" width={95}></Image>
      <div className=" flex flex-wrap gap-7  font-bold">
        <Link href={'/main'}>이용약관</Link>
        <Link href={'/main'}>취소 및 환불 정책</Link>
        <Link href={'/main'}>사업자 정보</Link>
        <Link href={'/main'}>청소년 보호 정책</Link>
      </div>
      <div>© 2023 Disney All Rights Reserved.</div>
      <div className="flex  flex-wrap justify-center gap-3">
        <div>
          <span>디즈니 코리아</span>
        </div>
        <div className="flex gap-4">
          <span>|</span>
          <span>디표자 : 조아무개</span>
        </div>
        <div className="flex gap-4">
          <span>|</span>
          <span>서울시 강남구 테헤란로 에 살고싶다 </span>
        </div>
        <div className="flex gap-4">
          <span>|</span>
          <span>통신판매업 신고번호: 제2021-서울강남-119호</span>
        </div>
        <div className="flex gap-4">
          <span>|</span>
          <span>전화번호 : 123456789</span>
        </div>
        <div className="flex gap-4">
          <span>|</span>
          <span>Email : 123456@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
