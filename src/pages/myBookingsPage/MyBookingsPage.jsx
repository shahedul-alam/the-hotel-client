import { useEffect, useState } from "react";
import Newsletter from "../../components/homepage/Newsletter";
import BookingTable from "../../components/myBookingPage/BookingTable";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyBookingsPage = () => {
  // const { user, errorToast } = useAuth();
  // const [bookingData, setBookingData] = useState([]);
  // const axiosSecure = useAxiosSecure();

  // useEffect(() => {
  //   axiosSecure
  //     .get(`/my-bookings?email=${user.email}`)
  //     .then((res) => setBookingData(res.data))
  //     .catch((error) => errorToast(error.response.data?.message));
  // }, [user.email]);
  return (
    <main>
      <BookingTable />
      <Newsletter />
    </main>
  );
};

export default MyBookingsPage;
