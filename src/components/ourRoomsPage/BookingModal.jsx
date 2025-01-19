import axios from "axios";
import useAuth from "../../hooks/useAuth";

const BookingModal = ({ data, bookingDate }) => {
  const { user, successToast, errorToast } = useAuth();
  const { _id, name, bedType, description, pricePerNight, size, totalGuests } =
    data;

  const handleBooking = () => {
    const bookingInfo = {
      roomId: _id,
      client_name: user.displayName,
      client_email: user.email,
      price: pricePerNight,
      currency: "USD",
      bookingDate,
    };

    axios
      .post("http://localhost:5000/booking", bookingInfo)
      .then((res) => {
        successToast("Booked successfully!");

        document.getElementById("bookingModal").close();
      })
      .catch((error) => {
        console.log(error);
        errorToast("Sorry! Something went wrong.");
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
