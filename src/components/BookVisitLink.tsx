import Link from "next/link";

function BookVisitLink() {
  return (
    <Link
      href="/book-visit"
      className="text-black bg-white px-6 py-2.5 rounded-full transition-all hover:bg-gray-200"
    >
      Book a visit
    </Link>
  );
}

export default BookVisitLink;
