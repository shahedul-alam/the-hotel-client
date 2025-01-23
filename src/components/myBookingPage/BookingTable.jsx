import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const BookingTableRow = ({
  data,
  updateBookingData,
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
  } = data;

  const handleCancelBooking = () => {
    axiosSecure
      .delete(
        `/my-bookings?email=${client_email}&bookingId=${_id}&roomId=${roomId}&date=${bookingDate}`
      )
      .then((res) => {
        successToast("Booking canceled successfully!");
        updateBookingData(_id);
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
        <button className="btn btn-ghost bg-green-600 text-white rounded-none hover:text-black">
          Update
        </button>
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
      .then((res) => setBookingData(res.data))
      .catch((error) => errorToast(error.response.data?.message));
  }, [user.email]);

  const updateBookingData = (bookingId) => {
    const newData = bookingData.filter((item) => item._id !== bookingId);

    setBookingData(newData);
  };

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
                updateBookingData={updateBookingData}
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
