import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={'/logo.png'}
        alt={'Call IT Studio Logo'}
        width={70}
        height={70}
        className="h-10 w-10 text-primary mr-2"
      />
      {/* <span className="text-2xl font-bold text-primary">Call IT Studio</span> */}
    </Link>
  );
};

export default Logo;
