import { Helmet } from "react-helmet-async";
import FeaturedRooms from "../../components/homepage/FeaturedRooms";
import HeroBanner from "../../components/homepage/HeroBanner";
import HotelMap from "../../components/homepage/HotelMap";
import Newsletter from "../../components/homepage/Newsletter";
import NewSpaces from "../../components/homepage/NewSpaces";

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <title>Homepage | the hotel</title>
      </Helmet>
      <HeroBanner />
      <NewSpaces />
      <FeaturedRooms />
      <HotelMap />
      <Newsletter />
    </main>
  );
};

export default HomePage;