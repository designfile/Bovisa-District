import About from "./(sections)/about/page";
import AreaBenifits from "./(sections)/area-benifits/page";
import BookVisit from "./(sections)/book-visit/page";
import Clients from "./(sections)/clients/page";

export default function Home() {
  return (
    <div className="max-w-[1220px] mx-auto">
      <About />
      <AreaBenifits />
      <Clients />
      <BookVisit />
    </div>
  );
}
