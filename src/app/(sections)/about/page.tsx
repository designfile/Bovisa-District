import Image from "next/image";
import Vector_1 from "../../../../public/svg/Vector-1.svg";
import Vector_2 from "../../../../public/svg/Vector-2.svg";
import Vector_3 from "../../../../public/svg/Vector-3.svg";
import BookVisitLink from "@/components/BookVisitLink";

function About() {
  const WarehouseSpecification: {
    image: string;
    content: string;
  }[] = [
    {
      image: Vector_1,
      content:
        "Optimal ceiling height for various types of industrial and commercial activities.",
    },
    {
      image: Vector_2,
      content:
        "High-load-bearing floors, suitable for heavy machinery and storage.",
    },
    {
      image: Vector_3,
      content:
        "Advanced security systems and state-of-the-art fire protection infrastructure.",
    },
  ];

  return (
    <div
      id="about"
      className="animate-slide-up py-8 md:pt-16 max-w-[1220px] mx-auto bg-black text-white"
    >
      {/* Header Section */}
      <div className="h-[80vh] w-full relative">
        <Image
          src="/img/header-image-1.png"
          alt="header-image-1"
          layout="fill"
          objectFit="contain"
          className="absolute inset-0 mt-10 md:mt-20"
        />
        <div className="relative top-[10%] inset-0 flex flex-col justify-center items-center gap-3 text-center">
          <h1 className="md:text-5xl text-3xl text-white">
            Welcome to the{" "}
            <span className="font-birds-of-paradise md:inline-block block">Bovisa District</span>
          </h1>
          <h2 className="md:text-[27px] text-[22px] opacity-30">
            A hub of innovation and urban development
          </h2>
          <BookVisitLink color="white" />
        </div>
      </div>

      {/* Map Section */}
      <div className="relative text-black -mt-20">
        <Image
          width={1054}
          height={408}
          src="/img/map-1.png"
          alt="map-1"
          className="rounded-t-md md:rounded-md object-cover w-full h-full border-b-[1px] md:border-none border-black"
        />
        <div className="flex flex-col-reverse md:flex-col justify-between md:absolute inset-0 px-10 py-6 bg-white md:bg-transparent text-black rounded-b-md md:rounded-none">
          <div className="md:absolute top-[5%] right-[5%] p-4 rounded-md max-w-[450px]">
            <h1 className="text-[13px] md:text-[15px] font-europe-grotesk">
              This project, near the renowned Politecnico di Milano, offers{" "}
              <span className="font-birds-of-paradise">
                modern and versatile
              </span>{" "}
              spaces for companies looking for a dynamic and technologically
              advanced environment.
            </h1>
          </div>
          <div className="md:absolute bottom-[10%] left-[5%] p-4 rounded-md">
            <h1 className="text-[25px] md:text-[42px]">
              <span className="font-birds-of-paradise">Overview of</span> Bovisa
              District
            </h1>
          </div>
        </div>
      </div>

      {/* Details and Specification Section */}
      <div className="flex flex-col gap-28 mt-20 text-white bg-black px-8 py-20">
        {/* Project Details */}
        <div className="flex flex-col md:flex-row justify-between md:gap-0 gap-12">
          {/* Left text */}
          <h1 className="text-4xl italic">
            Project <span className="font-birds-of-paradise">Details</span>
          </h1>

          {/* Right text */}
          <div className="flex flex-col md:flex-row md:items-start max-w-[450px] md:gap-8 gap-4">
            <div className="w-fit h-full flex gap-1 items-start md:mr-4">
              (
              <Image
                src={Vector_1}
                alt="vector-1"
                width={16}
                height={16}
                className="mt-1"
              />
              )
            </div>
            <span className="text-lg leading-relaxed">
              The Bovisa District represents the redevelopment of a historic
              industrial area, transformed into a complex of modern warehouses
              with aluminum and glass facades.
              <br />
              <br />
              Each warehouse is designed to offer functionality, aesthetics, and
              sustainability, ensuring a comfortable and stimulating work
              environment.
            </span>
          </div>
        </div>

        {/* Warehouse Specifications */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left text */}
          <h1 className="md:text-4xl text-3xl italic">
            <span className="font-birds-of-paradise">Warehouse</span>{" "}
            Specifications
          </h1>

          {/* Right text */}
          <div className="flex flex-col gap-10 max-w-[480px]">
            <h1 className="text-3xl leading-snug font-light text-[#676767]">
              The warehouses in the Bovisa District range in size
              <span className="text-white"> from 350 to 1,000 </span>
              square meters. Each unit offers:
            </h1>

            {/* Specification List */}
            {WarehouseSpecification.map((el, idx) => {
              return (
                <div key={idx} className="flex items-start gap-8">
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
                    <span className="md:text-lg text-[15px] ml-4">
                      {el.content}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-full w-full relative pb-20 -mt-20">
        <Image
          src="/img/trees-image-1.png"
          width={1220}
          height={700}
          alt="trees-image-1"
        />
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="md:block hidden text-[40px] italic">
            Representative <span className="font-normal">Properties</span>
          </h1>

          <div className="flex flex-col gap-8 w-full md:max-w-xl items-start justify-center md:px-0 px-2">
            <span className="text-3xl md:text-4xl font-normal leading-tight">
              The Bovisa District is not just a collection of buildings but{" "}
              <span className="font-birds-of-paradise">a true ecosystem</span>.
              The large courtyards allow for easy parking and loading/unloading
              operations, while the gardens and surrounding green areas offer a
              pleasant and relaxing environment for employees and visitors.
            </span>
            <div>
              <BookVisitLink color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
