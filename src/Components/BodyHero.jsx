import HeroImg from "../Assets/img/hero.png";
import bookCall from "../Assets/img/bookCall.png";
import mission from "../Assets/img/mission.png";

export function BodyHero() {
  const hero = [
    {
      id: 0,
      title: "YOUR CRM OF TRUST",
      subtitle: "Find your dream house here",
      text: "Find your modern home here. At affordable prices you can get your dream home with luxurious quality. Various types are here. For more information, you can contact our social media accounts and phone numbers.",
      img: HeroImg,
    },
    {
      id: 1,
      title: "OUR MISSION",
      subtitle: "For Start up Business",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas, diam sed sollicitudin iaculis, nulla justo egestas eros, sed lacinia felis quam a mi. Ut nec urna dapibus, pretium diam in, tristique risus. Sed faucibus dignissim metus, id eleifend nisi blandit sed. Fusce aliquam posuere felis aliquam fringilla.",
      img: mission,
    },
    {
      id: 2,
      title: "Why choose us?",
      subtitle: "Advantages",
      text: [
        "Tailor-made solutions: choose&customize",
        "Discuss a wide range of strategies in business.",
        "Customer Service Free Chat 7/7",
        "Improve your sales, and your business thanks to the best management ever",
        "Track everything wherever you are and from any device",
      ],
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
              ? "flex justify-center"
              : "flex flex-row-reverse "
          }
        >
          <div
            className={
              row.id % 2
                ? "flex justify-center items-center md:ml-2 lg:ml-16 lg:w-4/12"
                : "flex justify-center items-center mr-2 lg:mr-16 lg:w-4/12"
            }
          >
            <img
              src={row.pic}
              alt="line pic"
              className="hidden lg:block w-4/5 rounded-md h-5/6"
            ></img>
          </div>
          <div
            className={
              row.id % 2
                ? "flex flex-col justify-center lg:w-8/12 pr-18 lg:pr-20"
                : "flex flex-col justify-center lg:w-8/12 pl-18 lg:pl-20"
            }
          >
            <h1
              className={
                row.id % 2
                  ? "px-2 md:px-5 md:ml-5 text-2xl font-bold text-violet-800 uppercase text-center lg:text-left"
                  : "md:px-5 md:ml-8 text-2xl font-bold text-violet-800 uppercase text-center lg:text-left"
              }
            >
              {row.title}
            </h1>
            <p
              className={
                row.id % 2
                  ? "p-5 lg:mr-8 lg:ml-5 text-justify"
                  : "p-5 lg:ml-8 lg:mr-5 text-justify"
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
