import { useEffect, useState } from "react";
import { axiosInstance } from "../../hooks/useAxiosSecure";
import { Link } from "react-router";

const RoomsCard = ({ data }) => {
  const {
    _id,
    imageURL,
    name,
    totalGuests,
    size,
    bedType,
    description,
    userReviews,
  } = data;

  return (
    <div className="p-5 pb-10 lg:p-10 border-y last:border-b md:border-x border-primary-border shadow-md">
      <div
        className="aspect-video bg-center bg-cover mb-8"
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
      <div className="mb-6">
        <h2 className="text-3xl lg:text-4xl text-black font-semibold text-center lg:text-left mb-4">
          {name}
        </h2>
        <div className="flex justify-center lg:justify-start gap-2 text-black mb-4">
          <p>Up to {totalGuests} Adults</p>
          <span>|</span>
          <p>{bedType}</p>
          <span>|</span>
          <p>{size}</p>
          <span>|</span>
          <p>Reviews ({userReviews.length})</p>
        </div>
        <p className="text-black truncate">{description}</p>
      </div>
      <Link
        to={`/our-rooms/${_id}`}
        className="w-full btn btn-ghost border border-black rounded-none text-black font-semibold"
      >
        See details
      </Link>
    </div>
  );
};

const FeaturedRooms = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/top-rated-rooms")
      .then((res) => setData(res.data.data))
      .catch((err) => {
        console.error("Error fetching top-rated rooms:", err);
      });
  }, []);

  return (
    <section className="my-10 md:my-16">
      <div className="md:w-3/5 md:mx-auto px-5 mb-8 md:mb-12">
        <h1 className="text-4xl font-semibold text-center mb-2">
          Top-rated Rooms
        </h1>
        <p className="xl:w-1/2 xl:mx-auto text-black text-center py-4">
          A series of open-house hotels inspired by the diversity and
          originality of the streets and scenes that surround us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 px-5 lg:px-10">
        {data.map((item) => (
          <RoomsCard key={item._id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedRooms;
