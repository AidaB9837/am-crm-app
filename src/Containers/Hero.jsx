import { BodyHero } from "../Components/BodyHero";
import { Navbar } from "../Components/Navbar";

export function Hero() {
  return (
    <>
      <Navbar />
      <div className="grid grid-template-column: repeat(2, minmax (0,1fr)) grid-template-rows: repeat(6, minmax (0,1fr))">
        <BodyHero />
      </div>
    </>
  );
}
