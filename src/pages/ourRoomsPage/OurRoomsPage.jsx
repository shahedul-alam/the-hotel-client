import { useLoaderData } from "react-router";
import axios from "axios";
import Rooms from "../../components/ourRoomsPage/Rooms";
import Newsletter from "../../components/homepage/Newsletter";

const OurRoomsPage = () => {
  const data = useLoaderData();

  return (
    <main>
      <Rooms data={data} />
      <Newsletter />
    </main>
  );
};

export default OurRoomsPage;

export const roomsLoader = async () => {
  const result = await axios.get("http://localhost:5000/rooms");

  if (result.status !== 200) {
    throw Error("Could not found rooms details!");
  }

  return result.data;
};
