"use client";
import Image from "next/image";
import React, { useState } from "react";
import White_Bovisa_District_Image from "../../public/img/White-bovisa-district-1.png";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import clsx from "clsx";
import { RxCross2 } from "react-icons/rx";
import BookVisitLink from "./BookVisitLink";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="w-[90%] mx-auto h-12 mt-8  flex flex-row items-center justify-between px-4">
      <Link href="/">
        <Image
          src={White_Bovisa_District_Image}
          width={153}
          height={22}
          alt="Bovisa District"
        />
      </Link>

      {/* ========== Desktop Navbar ========== */}
      <div className="hidden sm:flex flex-row justify-end items-center gap-4 md:gap-10">
        <Link href="/about" className="relative group text-white px-1">
          About
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link href="/area-benifits" className="relative group text-white px-1">
          Area Benifits
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link href="/clients" className="relative group text-white px-1">
          Clients
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
        </Link>
        <BookVisitLink />
      </div>

      {/* ========== Mobile Navbar ========== */}
      <div className="relative block sm:hidden">
        <button onClick={() => setIsOpen(true)} className="text-3xl">
          <RxHamburgerMenu />
        </button>

        <div
          className={clsx(
            "fixed inset-0 z-40 flex flex-row-reverse justify-between items-start backdrop-blur-md text-white transition-all duration-300 px-6 mt-6",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="text-3xl text-white"
            >
              <RxCross2 />
            </button>
          </div>

          <div className="flex-1 flex flex-col gap-6 px-1">
            <Link
              onClick={() => setIsOpen(false)}
              href="/about"
              className="relative group text-lg font-medium"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              href="/area-benifits"
              className="relative group text-lg font-medium"
            >
              Area Benefits
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              href="/clients"
              className="relative group text-lg font-medium"
            >
              Clients
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              href="/book-visit"
              className="bg-white text-black w-fit px-6 py-2.5 rounded-full text-lg font-medium transition-all hover:bg-gray-200"
            >
              Book a Visit
            </Link>
          </div>
        </div>

        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-30 bg-black"
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
