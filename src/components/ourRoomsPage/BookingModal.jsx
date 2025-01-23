import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import useAxiosSecure, { axiosInstance } from "../../hooks/useAxiosSecure";

const BookingModal = ({ data, bookingDate }) => {
  const { user, successToast, errorToast } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const {
    _id,
    name,
    imageURL,
    bedType,
    description,
    pricePerNight,
    size,
    totalGuests,
  } = data;

  const handleBooking = () => {
    const bookingInfo = {
      roomId: _id,
      name,
      imageURL,
      client_name: user.displayName,
      client_email: user.email,
      price: pricePerNight,
      bookingDate,
    };

    axiosSecure
      .post("/booking", bookingInfo)
      .then((res) => {
        if (res.data.success) {
          // showing alert on successful booking
          successToast("Booked successfully!");
          // closing the modal
          document.getElementById("bookingModal").close();
          // redirecting to the my booking page
          navigate("/my-bookings", { replace: true });
        } else {
          errorToast("Booking failed");
        }
      })
      .catch((error) => {
        // showing alert on error
        errorToast(error.response.data.message);
        // closing the modal
        document.getElementById("bookingModal").close();
      });
  };

  return (
    <dialog id="bookingModal" className="modal">
      <div className="modal-box rounded-none">
        <div>
          <h2 className="text-3xl lg:text-4xl text-black font-semibold text-center mb-2 md:text-left">
            {name}
          </h2>
          <div>
            <p className="text-black text-xl font-medium text-center md:text-left mb-4">
              ${pricePerNight} night
            </p>
            <p className="text-black text-xl font-medium text-center md:text-left mb-4">
              Booking Date: {bookingDate.toLocaleDateString("en-GB")}
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-2 text-black mb-6">
            <p>Up to {totalGuests} Adults</p>
            <span>|</span>
            <p>{bedType}</p>
            <span>|</span>
            <p>{size}</p>
          </div>
          <p className="text-black text-center md:text-left mb-5">
            {description}
          </p>
          <div className="flex justify-center gap-4 md:justify-start">
            <button
              className="btn btn-ghost bg-black text-white hover:text-black rounded-none font-bold uppercase"
              onClick={handleBooking}
            >
              Confirm
            </button>
            <button
              className="btn btn-ghost border-black rounded-none font-bold uppercase"
              onClick={() => document.getElementById("bookingModal").close()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default BookingModal;
