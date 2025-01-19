import axios from "axios";
import { useLoaderData } from "react-router";
import RoomDetails from "../../components/roomDetailsPage/RoomDetails";
import Newsletter from "../../components/homepage/Newsletter";
import RoomsSlider from "../../components/roomDetailsPage/RoomsSlider";

const RoomDetailsPage = () => {
  const data = useLoaderData();

  return (
    <main>
      <RoomDetails data={data} />
      <RoomsSlider />
      <Newsletter />
    </main>
  );
};

export default RoomDetailsPage;

export const roomDetailsLoader = async ({ params }) => {
  try {
    const { id } = params;
    const result = await axios.get(`http://localhost:5000/rooms/${id}`);

    return result.data.data;
  } catch (error) {
    if (error.response) {
      // Handle different status codes
      switch (error.response.status) {
        case 400:
          throw new Error("Invalid room ID");
        case 404:
          throw new Error("Room not found");
        default:
          throw new Error("Something went wrong");
      }
    }
    throw error;
  }
};
