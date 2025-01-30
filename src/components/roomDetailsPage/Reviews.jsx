import ReactStars from "react-rating-stars-component";
import Lottie from "lottie-react";
import reviewAnimation from "../../assets/animations/reviewLottie.json";

const ReviewCards = ({ data }) => {
  const {
    client_name,
    client_photURL,
    client_rating,
    client_review,
    timestamp,
  } = data;

  return (
    <div className="p-5 border border-primary-border">
      <div className="flex items-center gap-3 mb-4">
        <div className="avatar">
          <div className="size-14 rounded-full">
            <img src={client_photURL} />
          </div>
        </div>
        <div>
          <h2 className="text-lg text-black font-semibold">{client_name}</h2>
          <ReactStars
            count={5}
            size={24}
            value={client_rating}
            isHalf={true}
            edit={false}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
      </div>
      <div>
        <p className="text-black">{client_review}</p>
      </div>
    </div>
  );
};

const NoReviews = () => {
  return (
    <div>
      <div className="size-40 mx-auto">
        <Lottie animationData={reviewAnimation} />
      </div>
      <h2 className="text-3xl font-semibold text-red-600 text-center">
        No reviews found
      </h2>
    </div>
  );
};

const Reviews = ({ data }) => {
  const { userReviews } = data;

  return (
    <section className="mb-10 md:mb-16">
      {userReviews.length ? (
        <>
          <div className="md:w-3/5 md:mx-auto px-5 mb-8 md:mb-12">
            <h1 className="text-4xl font-semibold text-center mb-2 uppercase">
              Client's reviews
            </h1>
            <p className="xl:w-1/2 xl:mx-auto text-black text-center py-4">
              A series of open-house hotels inspired by the diversity and
              originality of the streets and scenes that surround us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 px-5 lg:px-10">
            {userReviews.map((review, index) => (
              <ReviewCards key={index} data={review} />
            ))}
          </div>
        </>
      ) : (
        <NoReviews />
      )}
    </section>
  );
};

export default Reviews;
