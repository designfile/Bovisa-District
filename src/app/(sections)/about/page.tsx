import Image from "next/image";
import Link from "next/link";
import Vector_1 from "../../../../public/svg/Vector-1.svg";
import Vector_2 from "../../../../public/svg/Vector-2.svg";
import Vector_3 from "../../../../public/svg/Vector-3.svg";

function About() {
  return (
    <div className="animate-slide-up px-2">
      {/* Header Section */}
      <div className="h-[80vh] w-full relative mt-20">
        <Image
          src="/img/header-image-1.png"
          alt="header-image-1"
          layout="fill"
          objectFit="contain"
          className="absolute inset-0"
        />
        <div className="relative top-[10%] inset-0 flex flex-col justify-center items-center gap-3 text-center">
          <h1 className="md:text-5xl text-3xl text-white">
            Welcome to the{" "}
            <span className="font-birds-of-paradise">Bovisa District</span>
          </h1>
          <h2 className="md:text-[27px] text-[22px] opacity-30">
            A hub of innovation and urban development
          </h2>
          <Link
            href="/book-visit"
            className="text-black bg-white px-6 py-2.5 rounded-full transition-all hover:bg-gray-200"
          >
            Book a visit
          </Link>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative text-black">
        <Image
          width={1054}
          height={408}
          src="/img/map-1.png"
          alt="map-1"
          className="rounded-md object-cover w-full h-full"
        />
        <div className="flex flex-col-reverse md:flex-col justify-between md:absolute inset-0 px-10 py-6 bg-white md:bg-transparent text-black">
          <div className="md:absolute top-[5%] right-[5%] p-4 rounded-md w-[450px]">
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
        K
      </div>

      {/* Details and Specification Section */}
      <div className="flex flex-col gap-28 mt-20 text-white bg-black px-8 py-20">
        {/* Project Details */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left text */}
          <h1 className="text-4xl italic">
            Project <span className="font-birds-of-paradise">Details</span>
          </h1>

          {/* Right text */}
          <div className="flex flex-col md:flex-row md:items-start max-w-[375px]">
            <Image src={Vector_1} alt="vector-1" width={16} height={16} />
            <span className="text-lg leading-relaxed ml-4">
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
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left text */}
          <h1 className="text-4xl italic">
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
            <div className="flex items-start">
              (&nbsp;
              <Image src={Vector_1} alt="vector-1" width={16} height={16} />
              &nbsp;)
              <span className="text-lg ml-4">
                Optimal ceiling height for various types of industrial and
                commercial activities.
              </span>
            </div>

            <div className="flex items-start">
              (&nbsp;
              <Image src={Vector_2} alt="vector-2" width={16} height={16} />
              &nbsp;)
              <span className="text-lg ml-4">
                High-load-bearing floors, suitable for heavy machinery and
                storage.
              </span>
            </div>

            <div className="flex items-start">
              (&nbsp;
              <Image src={Vector_3} alt="vector-3" width={16} height={16} />
              &nbsp;)
              <span className="text-lg ml-4">
                Advanced security systems and state-of-the-art fire protection
                infrastructure.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80vh] w-full relative mt-20">
        <Image
          src="/img/trees-image-1.png"
          width={1220}
          height={700}
          alt="trees-image-1"
        />
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left text */}
          <h1 className="text-[40px] italic">
            Representative <span className="font-normal">Properties</span>
          </h1>

          {/* Right text */}
          <div className="flex flex-col gap-8 max-w-xl">
            <span className="text-4xl font-extralight leading-tight">
              The Bovisa District is not just a collection of buildings but{" "}
              <span className="font-birds-of-paradise">a true ecosystem</span>.
              The large courtyards allow for easy parking and loading/unloading
              operations, while the gardens and surrounding green areas offer a
              pleasant and relaxing environment for employees and visitors.
            </span>
            <div>
              <Link
                href="/book-visit"
                className="text-black bg-white px-6 py-2.5 rounded-full transition-all hover:bg-gray-200"
              >
                Book a visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
