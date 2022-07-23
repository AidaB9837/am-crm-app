import { BodyHero } from "../Components/BodyHero";
import { Navbar } from "../Components/Navbar";

export function Hero() {
  return (
    <>
      <Navbar />
      <div className="grid grid-template-column: repeat(2, minmax (0,1fr)) grid-template-rows: repeat(6, minmax (0,1fr)) mx-[1rem] md:mx-[4rem] lg:mx-[10rem]">
        <BodyHero />
      </div>
    </>
  );
}
