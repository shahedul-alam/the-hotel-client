import FeaturedRooms from "../../components/homepage/FeaturedRooms";
import HeroBanner from "../../components/homepage/HeroBanner";
import HotelMap from "../../components/homepage/HotelMap";
import Newsletter from "../../components/homepage/Newsletter";
import NewSpaces from "../../components/homepage/NewSpaces";

const HomePage = () => {
  return (
    <main>
      <HeroBanner />
      <NewSpaces />
      <FeaturedRooms />
      <HotelMap />
      <Newsletter />
    </main>
  );
};

export default HomePage;