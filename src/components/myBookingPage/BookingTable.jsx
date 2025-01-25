import { useEffect, useState } from "react";
import { Link } from "react-router";
import useAxiosSecure, { axiosInstance } from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import UpdateBookingModal from "./UpdateBookingModal";

const BookingTableRow = ({
  data,
  setBookingData,
  userEmail,
  successToast,
  errorToast,
}) => {
  const axiosSecure = useAxiosSecure();

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

  console.log(data);

  const handleCancelBooking = () => {
    axiosSecure
      .delete(
        `/cancel-booking?email=${userEmail}&bookingId=${_id}&roomId=${roomId}&date=${bookingDate}`
      )
      .then((res) => {
        successToast("Booking canceled successfully!");
        setBookingData((prev) => prev.filter((item) => item._id !== _id));
      })
      .catch((error) => errorToast(error.response.data?.message));
  };

  const handleUpdateBookingDates = (updatedDate) => {
    const updatedBookingInfo = {
      roomId: roomId,
      bookingId: _id,
      userEmail: userEmail,
      currentBookingDate: bookingDate,
      newBookingDate: updatedDate,
    };

    axiosSecure
      .patch("/update-booking", updatedBookingInfo)
      .then((res) => {
        // showing success alert
        successToast("Booking date updated successfully!");
        // closing the modal
        document.getElementById(`updateBookingModal${_id}`).close();
        // updating the state
        setBookingData((prev) =>
          prev.map((item) => {
            if (item._id === _id) {
              const dateIndex = item.bookings.indexOf(bookingDate);

              // If the bookingDate is found, replace it with updatedDate
              if (dateIndex !== -1) {
                return {
                  ...item,
                  bookingDate: updatedDate, // Update the bookingDate field
                  bookings: [
                    ...item.bookings.slice(0, dateIndex),
                    updatedDate,
                    ...item.bookings.slice(dateIndex + 1),
                  ], // Replace the date in bookings immutably
                };
              }
            }
            return item; // Return the unchanged item for all other cases
          })
        );
      })
      .catch((error) => errorToast(error.response.data?.message));
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
      <th>{new Date(bookingDate).toLocaleDateString("en-GB")}</th>
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
        <button className="btn btn-ghost bg-black text-white rounded-none hover:text-black">
          Review
        </button>
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
