import { Helmet } from "react-helmet-async";
import Newsletter from "../../components/homepage/Newsletter";
import BookingTable from "../../components/myBookingPage/BookingTable";

const MyBookingsPage = () => {
  return (
    <main>
      <Helmet>
        <title>My bookings | the hotel</title>
      </Helmet>
      <BookingTable />
      <Newsletter />
    </main>
  );
};

export default MyBookingsPage;
