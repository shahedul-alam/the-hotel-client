import { Link } from "react-router";
import newSpacesImage from "../../assets/new-spaces.jpg";

const NewSpaces = () => {
  return (
    <section className="mb-10 md:mb-16">
      <div className="grid grid-rows-2 md:grid-cols-12 md:grid-rows-1 md:border-y border-primary-border">
        <div className="h-[350px] flex flex-col justify-between py-10 px-5 md:col-span-5 lg:h-[700px] lg:justify-center lg:p-10 md:border-r md:border-primary-border">
          <h2 className="text-3xl font-semibold text-black text-center md:text-left lg:mb-12 lg:text-4xl">
            New places, new spaces
          </h2>
          <p className="text-black text-center md:text-left lg:mb-12">
            The reputable one-Michelin-star restaurant Sra Bua by Kiin Kiin at
            The Hotel Bangkok welcomes the warm summer
          </p>
          <Link className="w-full btn btn-ghost text-black border border-black rounded-none font-bold">
            LEARN MORE
          </Link>
        </div>
        <div className="h-[350px] p-5 border-y border-primary-border md:col-span-7 lg:h-[700px] lg:p-10 md:border-none">
          <div
            className="size-full bg-cover"
            style={{ backgroundImage: `url(${newSpacesImage})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default NewSpaces;
