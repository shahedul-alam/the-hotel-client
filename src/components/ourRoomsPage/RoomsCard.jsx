import { Link } from "react-router";

const RoomsCard = ({ data }) => {
  const { _id, imageURL, name, totalGuests, size, bedType, description, userReviews } = data;

  return (
    <Link to={_id}>
      <div className="p-5 pb-10 lg:p-10 border-y last:border-b md:border-x border-primary-border shadow-md">
        <div
          className="aspect-video bg-center bg-cover mb-8"
          style={{ backgroundImage: `url(${imageURL})` }}
        ></div>
        <div>
          <h2 className="text-3xl lg:text-4xl text-black font-semibold text-center lg:text-left mb-4">
            {name}
          </h2>
          <div className="flex justify-center lg:justify-start gap-2 text-black mb-6">
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
      </div>
    </Link>
  );
};

export default RoomsCard;
