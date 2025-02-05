import Image from "next/image";
import Vector_1 from "../../../../public/svg/Vector-1.svg";
import Vector_2 from "../../../../public/svg/Vector-2.svg";
import Vector_3 from "../../../../public/svg/Vector-3.svg";
import TestimonialsImage from "../../../../public/svg/testimonials-references-1.svg";

import { JSX } from "react";
import BookVisitLink from "@/components/BookVisitLink";
import clsx from "clsx";

function Clients() {
  const ClientsList: {
    image: string;
    content: JSX.Element;
  }[] = [
    {
      image: Vector_1,
      content: (
        <>
          Luxury showrooms (we already have confirmations from{" "}
          <br className="hidden md:block" /> major multinational companies).
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
          <br className="hidden md:block" />
          connected spaces.
        </>
      ),
    },
  ];

  return (
    <div
      id="clients"
      className="animate-slide-up px-4 pb-8 md:pt-32 md:pb-10 max-w-[1220px] mx-auto bg-black text-white"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:mx-16">
        {/* Heading */}
        <h1 className="text-[30px] md:text-[40px]">
          Target <span className="font-birds-of-paradise">Clients</span>
        </h1>
        <div className="flex flex-col gap-10 md:gap-16">
          {/* Sub heading or Heading of Clients list */}
          <h1 className="text-[30px] md:text-[40px] md:w-[550px] md:pb-4">
            The Bovisa District is perfect for{" "}
            <br className="hidden md:block" /> various types of companies:
          </h1>
          {/* Clients list */}
          {ClientsList.map((el, idx) => (
            <div key={idx} className="flex items-start gap-x-10">
              <div className="w-fit h-full flex gap-1 items-start">
                <div
                  className={clsx(
                    "w-fit h-full flex gap-1 items-start md:mr-4",
                    idx === 1 ? "mt-0" : "mt-1"
                  )}
                >
                  (
                  <Image
                    src={el.image}
                    alt={`vector-${idx + 1}`}
                    width={16}
                    height={16}
                    className="mt-1"
                  />
                  )
                </div>
                <span
                  className={clsx(
                    "md:text-lg text-[15px] sm:ml-4",
                    idx === 1 ? "ml-7" : "ml-10"
                  )}
                >
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
      <div className="relative text-black pt-10 md:pt-32">
        <div className="relative w-full h-[43vh] md:h-[50vh] overflow-hidden">
          <Image
            src={TestimonialsImage}
            alt="testimonials-references-1"
            layout="fill"
            objectFit="cover"
            objectPosition="right"
            className="border-b-[1px] md:border-none border-black rounded-t-xl md:rounded-xl overflow-hidden"
          />
        </div>

        <div className="flex flex-col-reverse md:flex-col justify-between md:absolute inset-0 p-2 md:px-10 md:py-6 bg-white md:bg-transparent text-black rounded-b-xl md:rounded-none">
          {/* Top-right description box */}
          <div className="md:absolute md:top-[25%] md:right-[5%] p-2 pt-4 bg-white md:bg-transparent rounded-md max-w-[450px] ">
            <h1 className="text-[13px] md:text-[15px] font-europe-grotesk tracking-tight">
              The Bovisa District, a rising hub for innovation, is already home{" "}
              <br className="hidden md:block" />
              to leading companies and multinationals With limited spaces{" "}
              <br className="hidden md:block" /> still available, it offers a
              safe, modern environment and more{" "}
              <br className="hidden md:block" /> than just a typical warehouse
            </h1>
          </div>

          {/* Bottom-left heading */}
          <div className="md:absolute md:bottom-[8%] md:left-[5%] p-2 rounded-md">
            <h1 className="text-[25px] md:text-[42px]">
              Testimonials{" "}
              <span className="hidden md:inline-block mr-1">&#38;</span>
              <span className="font-birds-of-paradise md:hidden mr-1">
                &#38;
              </span>
              <span className="font-birds-of-paradise">References</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
