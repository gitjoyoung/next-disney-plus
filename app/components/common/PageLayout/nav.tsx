'use client';
import Image from 'next/image';
import logo from '@/public/images/logo.svg';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Search from './Search';
const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <div
      className={`sticky left-0 top-0 z-50 flex h-[70px] w-full items-center justify-between pl-[3.6rem] pr-[3.6rem]
        ${show ? 'bg-layoutColor' : 'bg-current'}`}
    >
      <Link href={'/main'}>
        <Image alt="logo" src={logo} width={80} />
      </Link>
      <Search />
    </div>
  );
};

export default Nav;
