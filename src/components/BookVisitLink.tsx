"use client";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  action?: () => void;
  color: "black" | "white";
  pX?: string;
  pY?: string;
};

function BookVisitLink({ action, color, pX, pY }: Props) {
  return (
    <Link
      onClick={() => {
        if (action) {
          action();
        }
      }}
      href="/book-visit"
      className={clsx(
        "rounded-full transition-all",
        color === "black"
          ? "text-white bg-black hover:bg-gray-900"
          : "text-black bg-white hover:bg-gray-200",
        pX ? pX : "px-7",
        pY ? pY : "py-3"
      )}
    >
      Book a visit
    </Link>
  );
}

export default BookVisitLink;
