"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  action?: () => void;
};

function BookVisitLink({ action }: Props) {
  const pathname = usePathname();
  const isBookVisit = pathname === "/book-visit";
  return (
    <Link
      onClick={() => {
        if (action) {
          action();
        }
      }}
      href="/book-visit"
      className={clsx(
        " px-6 py-2.5 rounded-full transition-all",
        isBookVisit
          ? "text-white bg-black hover:bg-gray-900"
          : "text-black bg-white hover:bg-gray-200"
      )}
    >
      Book a visit
    </Link>
  );
}

export default BookVisitLink;
