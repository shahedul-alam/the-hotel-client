import Lottie from "lottie-react";
import errorAnimation from "../../assets/animations/errorLottie.json";
import { useNavigate, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-xl px-5">
        <div className="size-1/2 mx-auto mb-6">
          <Lottie animationData={errorAnimation} />
        </div>
        <h1 className="text-4xl md:text-4xl font-bold text-red-600 text-center mb-4">
          {error?.message}
        </h1>
        <button
          className="w-full btn btn-ghost bg-black text-white rounded-none hover:text-black"
          onClick={() => navigate("/")}
        >
          Go to homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
