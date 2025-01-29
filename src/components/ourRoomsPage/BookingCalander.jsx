import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingCalander = ({ data, setStartDate }) => {
  const { bookings } = data;

  const bookedDates = bookings.map((date) => new Date(date));

  return (
    <DatePicker
      selected={false}
      onChange={(date) => setStartDate(date)}
      // startDate={startDate}
      minDate={new Date()}
      excludeDates={[...bookedDates]}
      showDisabledMonthNavigation
      inline
    />
  );
};

export default BookingCalander;
