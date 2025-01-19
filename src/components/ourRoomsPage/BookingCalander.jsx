import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingCalander = ({ data, startDate, setStartDate }) => {
  const { bookings } = data;

  const bookedDates = bookings.map((date) => new Date(date));

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      startDate={startDate}
      minDate={new Date()}
      excludeDates={[...bookedDates]}
      showDisabledMonthNavigation
      inline
    />
  );
};

export default BookingCalander;
