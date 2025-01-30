import Image from "next/image";
import Vector_1 from "../../../../public/svg/Vector-1.svg";
import Vector_2 from "../../../../public/svg/Vector-2.svg";
import Vector_3 from "../../../../public/svg/Vector-3.svg";
import { JSX } from "react";
import BookVisitLink from "@/components/BookVisitLink";

function Clients() {
  const ClientsList: {
    image: string;
    content: JSX.Element;
  }[] = [
    {
      image: Vector_1,
      content: (
        <>
          Luxury showrooms (we already have confirmations from <br /> major
          multinational companies).
        </>
      ),
    },
    {
      image: Vector_2,
      content: <>Recording studios and artistic production.</>,
    },
    {
      image: Vector_3,
      content: (
        <>
          Luxury businesses that require exclusive and well-
          <br />
          connected spaces.
        </>
      ),
    },
  ];

  return (
    <div className="animate-slide-up px-8 mt-10 md:mb-10 max-w-[1220px] mx-auto">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Heading */}
        <h1 className="text-[30px] md:text-[40px]">
          Targer <span className="font-birds-of-paradise">Clients</span>
        </h1>
        <div className="flex flex-col gap-10 md:gap-20">
          {/* Sub heading or Heading of Clients list */}
          <h1 className="text-[30px] md:text-[40px]">
            The Bovisa District is perfect <br /> for various types of
            companies:
          </h1>
          {/* Clients list */}
          {ClientsList.map((el, idx) => (
            <div key={idx} className="flex items-start gap-x-10">
              <div className="w-fit h-full flex gap-1 items-start">
                (
                <Image
                  src={el.image}
                  alt={`vector-${idx + 1}`}
                  width={16}
                  height={16}
                  className="mt-1"
                />
                )
                <span className="md:text-lg text-[15px] ml-10 md:ml-4">
                  {el.content}
                </span>
              </div>
            </div>
          ))}
          <div className="hidden md:block">
            <BookVisitLink color="white" />
          </div>
        </div>
      </div>
      {/* Testimonials image and content */}
      <div className="relative text-black mt-10 md:mt-32">
        <Image
          width={1054}
          height={408}
          src="/img/testimonials-references-1.png"
          alt="testimonials-references-1"
          className="rounded-t-md md:rounded-md object-cover w-full h-full border-b-[1px] md:border-none border-black"
        />
        <div className="flex flex-col-reverse md:flex-col justify-between md:absolute inset-0 p-4 md:px-10 md:py-6 bg-white md:bg-transparent text-black rounded-b-md md:rounded-none">
          <div className="md:absolute top-[5%] right-[5%] p-4 rounded-md max-w-[450px]">
            <h1 className="text-[13px] md:text-[15px] font-europe-grotesk">
              The Bovisa District, a rising hub for innovation, is already home
              to leading companies and multinationals. With limited spaces still
              available, it offers a safe, modern environment and more than just
              a typical warehouse.
            </h1>
          </div>
          <div className="md:absolute bottom-[10%] left-[5%] p-4 rounded-md">
            <h1 className="text-[25px] md:text-[42px]">
              Testimonials &#38;{" "}
              <span className="font-birds-of-paradise">References</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
