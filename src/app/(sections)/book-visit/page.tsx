"use client";
import { SendBookVisitData } from "@/actions";
import EmailInput from "@/components/input/EmailInput";
import TextInput from "@/components/input/TextInput";

export default function BookVisit() {
  async function handleSubmit(formData: FormData) {
    const result = await SendBookVisitData(formData);

    alert(result.message);
  }

  return (
    <div className="w-full min-h-screen bg-whi1e bg-white text-black pb-10 relative">
      <form
        action={handleSubmit}
        className="animate-slide-up px-8 pt-10 md:pb-10 max-w-[1220px] mx-auto md:pt-72"
      >
        <div className="grid grid-cols-1 gap-8 md:gap-60 md:grid-cols-2 items-stretch">
          <div className="flex flex-col gap-6 md:gap-10 max-w-[300px] md:max-w-md">
            <h1 className="text-[25px] md:text-[35px] font-medium leading-[30px]">
              We are happy to arrange a <br /> visit to show you{" "}
              <span className="font-birds-of-paradise tracking-normal">
                {" "}
                the latest{" "}
              </span>{" "}
              <br /> spaces in the Bovisa District!
            </h1>
            <h2 className="text-[18px] md:text-[20px] opacity-25 leading-6">
              Fill in the form below with your details{" "}
              <br className="block md:hidden" /> and our team{" "}
              <br className="hidden md:block" /> will contact you as{" "}
              <br className="block md:hidden" /> soon as possible to schedule an{" "}
              <br /> appointment.
            </h2>
          </div>
          <div className="flex flex-col gap-10">
            <TextInput label="Name" required={true} name="name" />
            <EmailInput label="Email" required={true} name="email" />
            <TextInput label="Your Phone" required={true} name="phone_number" />
            <TextInput
              label="Your work area"
              required={true}
              name="work_area"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-60 items-stretch mt-10">
          <a
            href="tel:+393388139044"
            className="w-fit text-[25px] cursor-pointer underline md:no-underline"
          >
            Give us a call{" "}
            <span className="hidden md:inline-block">+39 (338) 813 90 44</span>
          </a>
          <div className="w-fit">
            <button className="bg-black text-white px-12 py-3 rounded-full transition-all">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
