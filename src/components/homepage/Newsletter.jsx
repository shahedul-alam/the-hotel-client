import passportIcon from "../../assets/passport-icon.png";

const Newsletter = () => {
  return (
    <section className="border-t border-base-300">
      <div className="flex flex-col items-center pt-[70px] px-5 pb-10 max-w-lg mx-auto">
        <img src={passportIcon} className="h-32 mb-8" />
        <h2 className="text-2xl font-semibold text-black text-center mb-5">
          Get The Good Stuff
        </h2>
        <p className="text-black text-center py-4 mb-12">
          Register to our newsletter to be the first to hear about great offers,
          new openings and events.
        </p>
        <form className="w-full flex flex-col">
          <input
            type="email"
            placeholder="Your email address"
            className="input input-bordered w-full rounded-none border-black"
          />
          <button className="btn btn-ghost bg-black text-white rounded-none my-4">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
