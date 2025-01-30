"use client";
import Image from "next/image";
import React, { useState } from "react";
import White_Bovisa_District_Image from "../../public/img/White-bovisa-district-1.png";
import Black_Bovisa_District_Image from "../../public/img/Black-bovisa-district-1.png";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import clsx from "clsx";
import { RxCross2 } from "react-icons/rx";
import BookVisitLink from "./BookVisitLink";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const isBookVisit = pathname === "/book-visit";

  return (
    <header
      className={clsx(
        "sticky top-0 left-0 z-20",
        pathname === "/book-visit" ? "bg-white" : "bg-black"
      )}
    >
      <nav
        className={clsx(
          "max-w-[1220px] mx-auto h-12 py-8 flex flex-row items-center justify-between px-4"
        )}
      >
        <Link href="/">
          <Image
            src={
              isBookVisit
                ? Black_Bovisa_District_Image
                : White_Bovisa_District_Image
            }
            width={153}
            height={22}
            alt="Bovisa District"
          />
        </Link>

        {/* ========== Desktop Navbar ========== */}
        <div className="hidden sm:flex flex-row justify-end items-center gap-4 md:gap-10">
          <Link
            href="/#about"
            className={clsx(
              "relative group px-1",
              isBookVisit ? "text-black" : "text-white"
            )}
          >
            About
            <span
              className={clsx(
                "absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full",
                isBookVisit ? "bg-black" : "bg-white"
              )}
            />
          </Link>
          <Link
            href="/#area-benifits"
            className={clsx(
              "relative group px-1",
              isBookVisit ? "text-black" : "text-white"
            )}
          >
            Area Benifits
            <span
              className={clsx(
                "absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full",
                isBookVisit ? "bg-black" : "bg-white"
              )}
            />
          </Link>
          <Link
            href="/#clients"
            className={clsx(
              "relative group px-1",
              isBookVisit ? "text-black" : "text-white"
            )}
          >
            Clients
            <span
              className={clsx(
                "absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full",
                isBookVisit ? "bg-black" : "bg-white"
              )}
            />
          </Link>
          <BookVisitLink color={isBookVisit ? "black" : "white"} />
        </div>

        {/* ========== Mobile Navbar ========== */}
        <div className="relative block sm:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className={
              (clsx("text-3xl"), isBookVisit ? "text-black" : "text-white")
            }
          >
            <RxHamburgerMenu width={20} height={20} />
          </button>

          <div
            className={clsx(
              "fixed inset-0 h-full w-f z-40 flex flex-row-reverse justify-between items-start backdrop-blur-md text-black bg-white transition-all duration-300 px-6",
              isOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            {/* Close Button */}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-3xl text-black"
              >
                <RxCross2 />
              </button>
            </div>

            <div className="h-full w-full flex-1 flex flex-col pb-12 justify-end gap-8 px-1">
              <Link
                onClick={() => setIsOpen(false)}
                href="/#about"
                className="relative group text-[40px] font-medium"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                href="/#area-benifits"
                className="relative group text-[40px] font-medium"
              >
                Area Benefits
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                href="/#clients"
                className="relative group text-[40px] font-medium"
              >
                Clients
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
              <div>
                <BookVisitLink action={() => setIsOpen(false)} color="black" />
              </div>
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
    </header>
  );
}

export default Navbar;
