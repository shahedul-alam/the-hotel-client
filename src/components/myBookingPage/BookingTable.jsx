import { useEffect, useState } from "react";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import UpdateBookingModal from "./UpdateBookingModal";
import ReviewModal from "./ReviewModal";
import Swal from "sweetalert2";

const BookingTableRow = ({
  data,
  setBookingData,
  userEmail,
  successToast,
  errorToast,
}) => {
  const axiosSecure = useAxiosSecure();
  const [reviewGiven, setReviewGiven] = useState(false);

  const {
    _id,
    roomId,
    name,
    imageURL,
    client_name,
    client_email,
    price,
    bookingDate,
    bookings,
  } = data;

  const handleCancelBooking = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(
            `/cancel-booking?email=${userEmail}&bookingId=${_id}&roomId=${roomId}&date=${bookingDate}`
          )
          .then((res) => {
            Swal.fire({
              title: "Canceled!",
              text: "Your booking has been canceled.",
              icon: "success",
            });
            setBookingData((prev) => prev.filter((item) => item._id !== _id));
          })
          .catch((error) => {
            Swal.fire({
              title: "Ooops...",
              text: error.response.data?.message,
              icon: "error",
            });
          });
      }
    });
  };

  const handleUpdateBookingDates = (updatedDate, setStartDate) => {
    // Format the updatedDate properly
    const formattedUpdatedDate =
      updatedDate.getFullYear() +
      "-" +
      String(updatedDate.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(updatedDate.getDate()).padStart(2, "0");

    // Get the current date in 'YYYY-MM-DD' format
    const currentDate = new Date();
    const formattedCurrentDate =
      currentDate.getFullYear() +
      "-" +
      String(currentDate.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(currentDate.getDate()).padStart(2, "0");

    // Prevent updating if the booking date has already passed
    if (bookingDate < formattedCurrentDate) {
      errorToast("You cannot update past bookings.");
      return;
    }

    const updatedBookingInfo = {
      roomId: roomId,
      bookingId: _id,
      userEmail: userEmail,
      currentBookingDate: bookingDate,
      newBookingDate: formattedUpdatedDate, // Ensure correct format
    };

    axiosSecure
      .patch("/update-booking", updatedBookingInfo)
      .then((res) => {
        // Showing success alert
        successToast("Booking date updated successfully!");
        // Closing the modal
        document.getElementById(`updateBookingModal${_id}`).close();
        // Updating the state immutably with correctly formatted date
        setBookingData((prev) =>
          prev.map((item) => {
            // Check if the item's roomId matches the current booking's roomId
            if (item.roomId === roomId) {
              return {
                ...item,
                bookingDate:
                  item.bookingDate === bookingDate
                    ? formattedUpdatedDate
                    : item.bookingDate, // Update main booking date if it matches
                bookings: item.bookings.map((date) =>
                  date === bookingDate ? formattedUpdatedDate : date
                ), // Update all occurrences in the bookings array
              };
            }
            return item; // Return unchanged item for all other cases
          })
        );

        setStartDate(null);
      })
      .catch((error) => {
        errorToast(error.response.data?.message);
        // Closing the modal
        document.getElementById(`updateBookingModal${_id}`).close();
      });
  };

  const handleReview = (reviewInfo) => {
    if (reviewInfo.client_rating < 0) {
      errorToast("Please enter the rating!");
      return;
    }

    if (!reviewInfo.client_review) {
      errorToast("Please enter the review!");
      return;
    }

    axiosSecure
      .post(`/review?id=${roomId}&email=${client_email}`, reviewInfo)
      .then((res) => {
        successToast("Review posted successfully!");
        document.getElementById(`reviewModal${_id}`).close();
        setReviewGiven(true);
      })
      .catch((error) => {
        errorToast(error.response.data?.message);
        document.getElementById(`reviewModal${_id}`).close();
      });
  };

  return (
    <tr>
      <td>
        <Link to={`/our-rooms/${roomId}`} className="flex items-center gap-3">
          <div className="avatar">
            <div className="size-12">
              <img src={imageURL} alt="room image" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </Link>
      </td>
      <td>{client_name}</td>
      <td>{client_email}</td>
      <th>${price}</th>
      <th>{new Date(bookingDate)?.toLocaleDateString("en-GB")}</th>
      <th>
        <button
          className="btn btn-ghost bg-green-600 text-white rounded-none hover:text-black"
          onClick={() =>
            document.getElementById(`updateBookingModal${_id}`).showModal()
          }
        >
          Update
        </button>
        <UpdateBookingModal
          data={data}
          handleUpdateBookingDates={handleUpdateBookingDates}
        />
      </th>
      <th>
        <button
          className="btn btn-ghost bg-black text-white rounded-none hover:text-black"
          disabled={reviewGiven ? true : false}
          onClick={() =>
            document.getElementById(`reviewModal${_id}`).showModal()
          }
        >
          Review
        </button>
        <ReviewModal id={_id} handleReview={handleReview} />
      </th>
      <th>
        <button
          className="btn btn-ghost bg-red-600 text-white rounded-none hover:text-black"
          onClick={handleCancelBooking}
        >
          Cancel
        </button>
      </th>
    </tr>
  );
};

const BookingTable = () => {
  const { user, errorToast, successToast } = useAuth();
  const [bookingData, setBookingData] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/my-bookings?email=${user.email}`)
      .then((res) => setBookingData(res.data.data))
      .catch((error) => errorToast(error.response.data?.message));
  }, [user.email]);

  return (
    <section className="mb-10 md:mb-16">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Room</th>
              <th>Booked by</th>
              <th>Booking email</th>
              <th>Price</th>
              <th>Booking Date</th>
              <th>Update Date</th>
              <th>Post Review</th>
              <th>Cancel Booking</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((item) => (
              <BookingTableRow
                key={item._id}
                data={item}
                userEmail={user.email}
                setBookingData={setBookingData}
                errorToast={errorToast}
                successToast={successToast}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BookingTable;
