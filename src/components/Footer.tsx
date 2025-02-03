import Image from "next/image";
import Link from "next/link";

import White_Bovisa_District_Image from "../../public/svg/White-bovisa-district-logo.svg";
import BookVisitLink from "./BookVisitLink";

function Footer() {
  return (
    <footer className="max-w-[1220px] mx-auto h-12 px-4 py-16 md:py-32 flex flex-row items-center justify-between bg-black">
      <Link href="/">
        <Image
          src={White_Bovisa_District_Image}
          width={153}
          height={22}
          alt="Bovisa District"
        />
      </Link>
      <div className="flex flex-row justify-end items-center gap-4 md:gap-10">
        <Link
          href="/#about"
          className="hidden md:block relative group text-white px-1"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link
          href="/#area-benifits"
          className="hidden md:block relative group text-white px-1"
        >
          Area Benifits
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link
          href="/#clients"
          className="hidden md:block relative group text-white px-1"
        >
          Clients
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
        </Link>
        <BookVisitLink color="white" />
      </div>
    </footer>
  );
}

export default Footer;
