import About from "./(sections)/about/page";
import AreaBenifits from "./(sections)/area-benifits/page";
import BookVisit from "./(sections)/book-visit/page";
import Clients from "./(sections)/clients/page";

export default function Home() {
  return (
    <div>
      <About />
      <AreaBenifits />
      <Clients />
      <BookVisit />
    </div>
  );
}
