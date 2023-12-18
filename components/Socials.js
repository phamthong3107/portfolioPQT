import Link from "next/link";
import {RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiPinterestLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl lg:text-2xl">
      <Link href={'https://www.youtube.com'} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={'https://www.facebook.com/PQT.3107'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.instagram.com/quocthong.3107/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      
    </div>
  );
};

export default Socials;
