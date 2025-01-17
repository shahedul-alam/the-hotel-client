import HeroBanner from "../../components/homepage/HeroBanner";
import HotelMap from "../../components/homepage/HotelMap";
import NewSpaces from "../../components/homepage/NewSpaces";

const HomePage = () => {
  return (
    <main>
      <HeroBanner />
      <NewSpaces />
      <HotelMap />
    </main>
  );
};

export default HomePage;