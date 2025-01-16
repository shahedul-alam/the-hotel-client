import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import heroBanner1 from "../../assets/hero-banner-1.jpg";
import heroBanner2 from "../../assets/hero-banner-2.jpg";
import heroBanner3 from "../../assets/hero-banner-3.jpg";
import heroBanner4 from "../../assets/hero-banner-4.jpg";
import { Link } from "react-router";

const HeroBanner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="md:p-5">
      <div
        ref={sliderRef}
        className="keen-slider h-[calc(100vh-50vh)] lg:h-[calc(100vh-30vh)]"
      >
        {/* slider one */}
        <div className="keen-slider__slide number-slide-1">
          <div
            className="hero h-full relative"
            style={{
              backgroundImage: `url(${heroBanner1})`,
            }}
          >
            <div className="absolute bottom-10 left-10 w-4/5 md:w-1/2 lg:w-2/5">
              <h2 className="text-4xl font-semibold text-white mb-2 lg:text-6xl">
                Welcome to The hotel
              </h2>
              <p className="text-white mb-5 lg:text-lg">
                Experience comfort and elegance at every turn. Book your dream
                room today and make unforgettable memories.
              </p>
              <Link to={"/rooms"} className="btn rounded-none">
                Explore Rooms
              </Link>
            </div>
            <div className="hero-overlay bg-opacity-40"></div>
          </div>
        </div>
        {/* slider two */}
        <div className="keen-slider__slide number-slide-2">
          <div
            className="hero h-full relative"
            style={{
              backgroundImage: `url(${heroBanner2})`,
            }}
          >
            <div className="absolute bottom-10 left-10 w-4/5 md:w-1/2 lg:w-2/5">
              <h2 className="text-4xl font-semibold text-white mb-2 lg:text-6xl">
                Dive into Relaxation
              </h2>
              <p className="text-white lg:text-lg">
                Escape to tranquility in our pristine swimming pool. Refresh
                your senses and enjoy the serene ambiance.
              </p>
            </div>
            <div className="hero-overlay bg-opacity-40"></div>
          </div>
        </div>
        {/* slider three */}
        <div className="keen-slider__slide number-slide-3">
          <div
            className="hero h-full relative"
            style={{
              backgroundImage: `url(${heroBanner3})`,
            }}
          >
            <div className="absolute bottom-10 left-10 w-4/5 md:w-1/2 lg:w-2/5">
              <h2 className="text-4xl font-semibold text-white mb-2 lg:text-6xl">
                Step into Elegance
              </h2>
              <p className="text-white lg:text-lg">
                Our stylish and welcoming lobby sets the tone for a memorable
                stay. Relax, unwind, and feel at home.
              </p>
            </div>
            <div className="hero-overlay bg-opacity-40"></div>
          </div>
        </div>
        {/* slider four */}
        <div className="keen-slider__slide number-slide-4">
          <div
            className="hero h-full relative"
            style={{
              backgroundImage: `url(${heroBanner4})`,
            }}
          >
            <div className="absolute bottom-10 left-10 w-4/5 md:w-1/2 lg:w-2/5">
              <h2 className="text-4xl font-semibold text-white mb-2 lg:text-6xl">
                Savor Culinary Delights
              </h2>
              <p className="text-white lg:text-lg">
                Indulge in a world of flavors at our restaurant, where every
                dish is crafted to perfection.
              </p>
            </div>
            <div className="hero-overlay bg-opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
