import Image from "next/image";
import Link from "next/link";
import Social from '../components/Socials';


const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        <Link href={'/'}>
          {/* <Image src={'/logo.svg'} width={220} height={48} alt='' priority={true} /> */}
          <h1 className="text-3xl text-bold">Quoc <span className="text-accent text-4xl">Thong</span></h1>
        </Link>
        <Social />
      </div>
    </div>
  </header>;
};

export default Header;
