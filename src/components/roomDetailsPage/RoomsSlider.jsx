import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const RoomsSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    rtl: false,
    slides: { perView: "auto" },
  });

  return (
    <section className="mb-10 md:mb-16">
      <div className="md:w-3/5 md:mx-auto px-5 mb-10 md:mb-16">
        <h1 className="text-4xl font-semibold text-center uppercase mb-2">
          our hotel
        </h1>
        <p className="xl:w-1/2 xl:mx-auto text-black text-center py-4">
          All rooms have parquet wooden floors, large round mirrors, industrial
          details, and modern monochrome bathrooms.
        </p>
      </div>

      <div ref={sliderRef} className="keen-slider gap-10 min-h-[600px]">
        <div
          className="keen-slider__slide number-slide1 min-w-[400px]"
          style={{
            backgroundImage: "url(https://i.postimg.cc/76GwGQKg/slider-1.jpg)",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide2 min-w-[900px]"
          style={{
            backgroundImage: "url(https://i.postimg.cc/TPPRGPmN/slider-2.jpg)",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide3 min-w-[900px]"
          style={{
            backgroundImage: "url(https://i.postimg.cc/XvDnv0kj/slider-3.jpg)",
          }}
        ></div>
        <div
          className="keen-slider__slide number-slide4 min-w-[400px]"
          style={{
            backgroundImage: "url(https://i.postimg.cc/sXkyp9Lb/slider-4.jpg)",
          }}
        ></div>
      </div>
    </section>
  );
};

export default RoomsSlider;
