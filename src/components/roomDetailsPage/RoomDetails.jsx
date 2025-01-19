import { Link } from "react-router";

const RoomDetails = ({ data }) => {
  const {
    _id,
    amenities,
    bedType,
    bookings,
    cancellationPolicy,
    description,
    features,
    imageURL,
    name,
    pricePerNight,
    size,
    totalGuests,
    userReviews,
  } = data;

  console.log(data);

  return (
    <section className="mb-10 md:mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-square bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${imageURL})` }}></div>
        <div className="w-4/5 mx-auto pt-14 pb-10 md:place-content-center">
          <h2 className="text-3xl lg:text-4xl text-black font-semibold text-center mb-6">
            {name}
          </h2>
          <div className="flex justify-center gap-2 text-black mb-8">
            <p>Up to {totalGuests} Adults</p>
            <span>|</span>
            <p>{bedType}</p>
            <span>|</span>
            <p>{size}</p>
          </div>
          <p className="text-black text-center my-5 md:h-12">{description}</p>
          <Link
            to={_id}
            className="w-full btn btn-ghost border-black rounded-none font-bold uppercase"
          >
            Book Now
          </Link>
        </div>
      </div>
      <div className="bg-black px-5 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-5 lg:w-4/5 xl:w-3/5 lg:mx-auto">
          <div>
            <p className="text-white text-xl font-semibold mb-5">Features</p>
            <ul className="text-white space-y-2">
              {features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white text-xl font-semibold mb-5">Amenities</p>
            <ul className="text-white space-y-2">
              {amenities.map((item, index) => (
                <li key={index}>{item?.name}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 text-white text-2xl font-semibold text-center md:col-span-1 md:text-left">
            A series of open-house hotels inspired by the diversity and
            originality of the streets and scenes that surround us.
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
