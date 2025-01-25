import { useState } from "react";
import BookingCalander from "../ourRoomsPage/BookingCalander";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateBookingModal = ({ data, handleUpdateBookingDates }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <dialog id={`updateBookingModal${data._id}`} className="modal">
      <div className="modal-box rounded-none">
        <h3 className="font-bold text-black text-2xl mb-2">Select the date!</h3>
        <div className="py-5">
          <BookingCalander
            data={data}
            startDate={startDate}
            setStartDate={setStartDate}
          />
        </div>
        <div className="flex justify-center gap-4 md:justify-start">
          <button
            className="btn btn-ghost bg-black text-white hover:text-black rounded-none font-bold uppercase confirmBtn"
            onClick={() => handleUpdateBookingDates(startDate)}
          >
            Confirm
          </button>
          <button
            className="btn btn-ghost border-black rounded-none font-bold uppercase"
            onClick={() =>
              document.getElementById(`updateBookingModal${data._id}`).close()
            }
          >
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateBookingModal;
