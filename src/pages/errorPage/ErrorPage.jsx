import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl font-bold text-red-600 text-center mb-4">
          404 | Page not found
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