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
      className="animate-slide-up px-4 pb-8 md:pt-16 md:pb-10 max-w-[1220px] mx-auto bg-black text-white"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:mx-16">
        {/* Heading */}
        <h1 className="text-[30px] md:text-[40px]">
          Target <span className="font-birds-of-paradise">Clients</span>
        </h1>
        <div className="flex flex-col gap-10 md:gap-16">
          {/* Sub heading or Heading of Clients list */}
          <h1 className="text-[30px] md:text-[40px] md:w-[550px]">
            The Bovisa District is perfect for{" "}
            <br className="hidden md:block" /> various types of companies:
          </h1>
          <br className="hidden md:block" />
          {/* Clients list */}
          {ClientsList.map((el, idx) => (
            <div key={idx} className="flex items-start gap-x-10">
              <div className="w-fit h-full flex gap-1 items-start">
                <div className="w-fit h-full flex gap-1 items-start md:mr-4 mt-1">
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
      <div className="relative text-black pt-10 md:pt-32">
        <div className="relative w-full h-[50vh] rounded-t-md md:rounded-md overflow-hidden">
          <Image
            src="/img/testimonials-references-1.png"
            alt="testimonials-references-1"
            layout="fill"
            objectFit="cover"
            objectPosition="right"
            className="border-b-[1px] md:border-none border-black"
          />
        </div>

        <div className="flex flex-col-reverse md:flex-col justify-between md:absolute inset-0 p-4 md:px-10 md:py-6 bg-white md:bg-transparent text-black rounded-b-md md:rounded-none">
          {/* Top-right description box */}
          <div className="md:absolute md:top-[25%] md:right-[5%] p-4 bg-white md:bg-transparent rounded-md max-w-[450px] ">
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
          <div className="md:absolute md:bottom-[8%] md:left-[5%] p-4 rounded-md">
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
