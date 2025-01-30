import TextInput from "@/components/input/TextInput";

function BookVisit() {
  return (
    <div className="w-full min-h-screen bg-white text-black pb-10 relative">
      <div className="animate-slide-up px-8 pt-10 md:pb-10 max-w-[1220px] mx-auto md:pt-72">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-stretch">
          <div className="flex flex-col gap-10 max-w-[300px] md:max-w-sm">
            <h1 className="text-[25px] md:text-[35px]">
              We are happy to arrange a <br /> visit to show you{" "}
              <span className="font-birds-of-paradise"> the latest </span>{" "}
              <br /> spaces in the Bovisa District!
            </h1>
            <h2 className="text-[18px] md:text-[20px] opacity-25">
              Fill in the form below with your details and our team will contact
              you as soon as possible to schedule an appointment.
            </h2>
          </div>
          <div className="flex flex-col gap-10">
            <TextInput label="Name" />
            <TextInput label="Email" />
            <TextInput label="Your Phone" />
            <TextInput label="Your work area" />
          </div>
        </div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-stretch mt-8">
          <h1 className="text-[25px] cursor-pointer underline md:no-underline">
            Give us a call{" "}
            <span className="hidden md:block">+ 39 (338) 813 90 44</span>
          </h1>
          <div className="w-fit">
            <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookVisit;
