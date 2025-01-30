import {useState } from "react";
import useAuth from "../../hooks/useAuth";
import ReactStars from "react-rating-stars-component";

const ReviewModal = ({ id, handleReview }) => {
  const { user } = useAuth();
  const [rating, setRating] = useState(-1);
  const [review, setReview] = useState("");

  const reviewInfo = {
    client_name: user.displayName,
    client_photURL: user.photoURL,
    client_rating: rating,
    client_review: review,
    timestamp: new Date().toISOString(),
  };

  return (
    <div>
      <dialog id={`reviewModal${id}`} className="modal">
        <div className="modal-box rounded-none">
          <div className="flex gap-2 items-center mb-3">
            <div className="avatar">
              <div className="size-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
            <h3 className="font-bold text-xl text-black">
              {user?.displayName}
            </h3>
          </div>

          <div className="space-y-2 mb-5">
            <p className="text-lg">Rate & review</p>
            <ReactStars
              count={5}
              onChange={(newRating) => setRating(newRating)}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <textarea
              className="textarea textarea-bordered"
              placeholder="Share details of your own experience at this place"
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>

          <div className="flex justify-center gap-4 md:justify-start">
            <button className="btn btn-ghost bg-black text-white hover:text-black rounded-none font-bold uppercase confirmBtn" onClick={() => handleReview(reviewInfo)}>
              Submit
            </button>
            <button
              className="btn btn-ghost border-black rounded-none font-bold uppercase"
              onClick={() => {
                document.getElementById(`reviewModal${id}`).close();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ReviewModal;
