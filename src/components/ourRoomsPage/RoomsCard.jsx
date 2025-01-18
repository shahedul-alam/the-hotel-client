import { Link } from "react-router";

const RoomsCard = ({ data }) => {
  const {
    imageURL,
    name,
    totalGuests,
    size,
    bedType,
    description,
  } = data;

  return (
    <div className="p-5 pb-10 lg:p-10 border-y md:border-r border-primary-border">
      <div
        className="aspect-video bg-center bg-cover mb-8"
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
      <div>
        <h2 className="text-3xl lg:text-4xl text-black font-semibold text-center lg:text-left mb-6">
          {name}
        </h2>
        <div className="flex justify-center lg:justify-start gap-2 text-black mb-8">
          <p>Up to {totalGuests} Adults</p>
          <span>|</span>
          <p>{bedType}</p>
          <span>|</span>
          <p>{size}</p>
        </div>
        <p className="text-black my-5 lg:h-12">{description}</p>
        <Link className="w-full btn btn-ghost border-black rounded-none font-bold uppercase">
          see details
        </Link>
      </div>
    </div>
  );
};

export default RoomsCard;
