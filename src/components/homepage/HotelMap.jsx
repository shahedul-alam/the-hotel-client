const HotelMap = () => {
  return (
    <section className="mb-10 md:mb-16 md:p-5">
      <h2 className="text-3xl text-black font-bold text-center mb-6 md:text-4xl">
        Our Location
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.605179595592!2d90.38308465!3d23.750899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b897e97a02b9%3A0x27f34ccd83ba6ede!2sPan%20Pacific%20Sonargaon%20Dhaka!5e0!3m2!1sen!2sbd!4v1737059918856!5m2!1sen!2sbd"
        loading="lazy"
        className="w-full h-[300px] md:h-[450px] lg:h-[600px]"
      ></iframe>
    </section>
  );
};

export default HotelMap;
