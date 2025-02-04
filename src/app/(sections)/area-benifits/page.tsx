import Image from "next/image";
import Vector_1 from "../../../../public/svg/Vector-1.svg";
import Vector_2 from "../../../../public/svg/Vector-2.svg";
import Vector_3 from "../../../../public/svg/Vector-3.svg";

import { JSX } from "react";

function AreaBenifits() {
  const AreaBenifitsDesktopList: {
    image: string;
    content: JSX.Element;
  }[] = [
    {
      image: Vector_1,
      content: <>Near Dergano metro station: 12 minutes by foot.</>,
    },
    {
      image: Vector_3,
      content: <>Easy access to the ring road/highway: 8 minutes by car.</>,
    },
    {
      image: Vector_2,
      content: (
        <>
          Immediate access to Bovisa train station: <br /> 7 minutes by foot.
        </>
      ),
    },
    {
      image: Vector_1,
      content: (
        <>
          A wide range of nearby amenities, including restaurants, <br /> cafes,
          shops, parks, and sport centers.
        </>
      ),
    },
  ];
  const AreaBenifitsMobileList: {
    image: string;
    content: JSX.Element;
  }[] = [
    {
      image: Vector_1,
      content: (
        <>
          Immediate access to Bovisa train station: <br /> 7 minutes by foot..
        </>
      ),
    },
    {
      image: Vector_2,
      content: <>Near Dergano metro station: 12 minutes by foot.</>,
    },
    {
      image: Vector_1,
      content: <>Easy access to the ring road/highway: 8 minutes by car.</>,
    },
    {
      image: Vector_3,
      content: (
        <>
          A wide range of nearby amenities, including restaurants, <br /> cafes,
          shops, parks, and sport centers.
        </>
      ),
    },
  ];

  return (
    <section
      id="area-benifits"
      className="animate-slide-up px-0 md:px-4 pb-8 md:pb-0 pt-16 md:pt-28 max-w-[1220px] mx-auto bg-black text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-[256px_auto_auto] w-full gap-10 md:gap-y-20 md:mx-16 px-4 md:px-0">
        {/* Heading */}
        <h1 className="text-[30px] md:text-[40px]">
          Area <span className="font-birds-of-paradise">Benifits</span>
        </h1>
        {/* Sub heading */}
        <h2 className="text-[30px] md:text-[35px]">
          Strategically located near Politecnico{" "}
          <br className="hidden md:block" /> di Milano, the Bovisa District
          offers numerous advantages:
        </h2>
        {/* Benifits list */}
        {AreaBenifitsDesktopList.map((el, idx) => {
          return (
            <div key={idx} className="hidden md:flex items-start gap-x-10">
              <div className="w-fit h-full flex gap-1 items-start">
                (
                <Image
                  src={el.image}
                  alt={`vector-${idx + 1}`}
                  width={14}
                  height={14}
                  className="mt-1.5 mx-[1px]"
                />
                )
                <span className="md:text-lg text-[15px] ml-10 md:ml-7">
                  {el.content}
                </span>
              </div>
            </div>
          );
        })}
        {AreaBenifitsMobileList.map((el, idx) => {
          return (
            <div key={idx} className="flex md:hidden items-start gap-x-10">
              <div className="w-fit h-full flex gap-1 items-start">
                (
                <Image
                  src={el.image}
                  alt={`vector-${idx + 1}`}
                  width={14}
                  height={14}
                  className="mt-1.5 mx-[1px]"
                />
                )
                <span className="md:text-lg text-[15px] ml-10 md:ml-7">
                  {el.content}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {/* Train image */}
      <div className="h-[70vh] w-full overflow-hidden bg-[url(/svg/train-image-1.svg)] bg-cover bg-no-repeat md:bg-contain md:bg-center train-image" />
    </section>
  );
}

export default AreaBenifits;
