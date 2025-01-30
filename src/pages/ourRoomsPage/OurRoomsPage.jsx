import { useLoaderData } from "react-router";
import axios from "axios";
import Rooms from "../../components/ourRoomsPage/Rooms";
import Newsletter from "../../components/homepage/Newsletter";
import { Helmet } from "react-helmet-async";

const OurRoomsPage = () => {
  const data = useLoaderData();

  return (
    <main>
      <Helmet>
        <title>Our rooms | the hotel</title>
      </Helmet>
      <Rooms data={data} />
      <Newsletter />
    </main>
  );
};

export default OurRoomsPage;

export const roomsLoader = async () => {
  const result = await axios.get("http://localhost:5000/rooms");

  return result.data;
};
