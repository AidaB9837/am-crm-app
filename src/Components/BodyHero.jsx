import HeroImg from "../Assets/img/hero.png";
import bookCall from "../Assets/img/bookCall.png";
import mission from "../Assets/img/mission.png";

export function BodyHero() {
  const text = () => {
    advantages.map((advantage) => <li>{advantage}</li>);
  };
  const advantages = [
    { 1: "Tailor-made solutions: choose&customize" },
    { 2: "Discuss a wide range of strategies in business." },
    { 3: "Customer Service Free Chat 7/7" },
    {
      4: "Improve your sales, and your business thanks to the best management ever",
    },
    { 5: "Track everything wherever you are and from any device" },
  ];
  const hero = [
    {
      id: 0,
      title: "YOUR CRM OF TRUST",
      subtitle: "Find your dream house here",
      call: "",
      text: "Find your modern home here.At affordable prices you can get your dream home with luxurious quality. Various types are here. For more information, you can contact our social media accounts and phone numbers.",
      img: HeroImg,
    },
    {
      id: 1,
      title: "OUR MISSION",
      subtitle: "For Start up Business",
      call: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas, diam sed sollicitudin iaculis, nulla justo egestas eros, sed lacinia felis quam a mi. Ut nec urna dapibus, pretium diam in, tristique risus. Sed faucibus dignissim metus, id eleifend nisi blandit sed. Fusce aliquam posuere felis aliquam fringilla.",
      img: mission,
    },
    {
      id: 2,
      title: "Why choose us?",
      subtitle: "Advantages",
      call: text(),
      img: bookCall,
    },
  ];
  return (
    <div>
      {hero.map((row) => (
        <div
          key={row.id}
          className={
            row.id % 2
              ? "w-full py-1.5 flex justify-center"
              : "w-full py-1.5 flex flex-row-reverse"
          }
        >
          <div className={"flex justify-center basis-1/2 md:shrink-0"}>
            <img
              src={row.img}
              alt="hero img"
              // stilizza l'immagine:
              className="lg:block md:w32"
            ></img>
          </div>
          <div
            className={
              row.id % 2
                ? // stilizza il div contenente i testi:
                  "pr-1.5 flex flex-col basis-1/2 items-end justify-center space-y-9 ml-8"
                : "pl-1.5 flex flex-col basis-1/2 items-start justify-center space-y-9 mr-8"
            }
          >
            <h1
              className={
                row.id % 2
                  ? // stilizza il title:
                    "text-4xl font-bold text-[#292891] uppercase"
                  : "text-4xl font-bold text-[#292891] uppercase"
              }
            >
              {row.title}
            </h1>
            <h3
              className={
                row.id % 2
                  ? // stilizza il subtitle:
                    "text-2xl font-bold text-[#292891]"
                  : "text-2xl font-bold text-[#292891]"
              }
            >
              {row.subtitle}
            </h3>
            <p
              className={
                row.id % 2
                  ? // stilizza il text:
                    "text-justify text-[#292891]"
                  : "text-justify text-[#292891]"
              }
            >
              {row.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
