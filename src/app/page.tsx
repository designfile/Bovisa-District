import Footer from "@/components/Footer";
import About from "./(sections)/about/page";
import AreaBenifits from "./(sections)/area-benifits/page";
import Clients from "./(sections)/clients/page";

export default function Home() {
  return (
    <div className="px-0 md:px-10">
      <About />
      <AreaBenifits />
      <Clients />
      <Footer />
    </div>
  );
}
