import Link from 'next/link';
import { Infinity } from 'lucide-react';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={'/logo.png'}
        alt={'Call IT Studio Logo'}
        width={60}
        height={60}
        className="h-8 w-8 text-primary mr-2"
      />
      {/* <span className="text-2xl font-bold text-primary">Call IT Studio</span> */}
    </Link>
  );
};

export default Logo;
