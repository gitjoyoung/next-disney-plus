import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo.svg';
import ctaLogo from '@/public/images/cta-logo-two.png';
import Footer from './components/common/PageLayout/footer';
export default function Home() {
  return (
    <main>
      <div
        style={{
          backgroundImage: `url('/images/login-background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className=" h-[100vh] w-full pl-[10rem] text-white"
      >
        <div className="flex h-[90%] flex-col justify-center gap-10 ">
          <Link href={'/main'}>
            <Image alt="logo" src={logo} width={200} />
          </Link>
          <div className="text-5xl font-bold">스트리밍을 시작하세요</div>
          <div className="text-lg ">
            다시 찾아주셔서 감사합니다! 스트리밍까지 몇 단계 남지 않았습니다. 구독을 완료하세요.
          </div>

          <Link className=" flex w-[9rem] justify-center  bg-blue-600 p-3 text-sm " href={'/main'}>
            디즈니 시작하기
          </Link>
          <Link href={'/main'}>
            <Image alt="ctaLogo" src={ctaLogo} width={900} />
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
