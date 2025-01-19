import RoomsCard from "./RoomsCard";

const Rooms = ({ data }) => {
  return (
    <section className="my-10 md:my-16">
      <div className="md:w-3/5 md:mx-auto px-5 mb-10 md:mb-16">
        <h1 className="text-4xl font-semibold text-center mb-2">Our Rooms</h1>
        <p className="xl:w-1/2 xl:mx-auto text-black text-center py-4">
          A series of open-house hotels inspired by the diversity and
          originality of the streets and scenes that surround us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {data.map((item) => (
          <RoomsCard key={item._id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Rooms;
