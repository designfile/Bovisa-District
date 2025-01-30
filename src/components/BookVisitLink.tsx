"use client";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  action?: () => void;
  color: "black" | "white";
};

function BookVisitLink({ action, color }: Props) {
  return (
    <Link
      onClick={() => {
        if (action) {
          action();
        }
      }}
      href="/book-visit"
      className={clsx(
        " px-7 py-3 rounded-full transition-all",
        color === "black"
          ? "text-white bg-black hover:bg-gray-900"
          : "text-black bg-white hover:bg-gray-200"
      )}
    >
      Book a visit
    </Link>
  );
}

export default BookVisitLink;
