import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import banner from "../../assets/login-page-banner.jpg";

const ForgotPasswordPage = () => {
  const { resetUserPassword, successToast, errorToast } = useAuth();
  const navigate = useNavigate();

  const handleResetUserPassword = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;

    resetUserPassword(email)
      .then(() => {
        // showing alert of successful password reset email
        successToast(
          "Password reset email sent successfully! Check your email."
        );
        // navigating to signin page
        navigate("/login");
      })
      .catch(() => {
        // showing error on password reset
        errorToast("Oops! Something went wrong while processing your request.");
      });
  };

  return (
    <main
      className="hero bg-base-200 min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content w-full flex-col lg:flex-row lg:justify-start">
        <div className="card rounded-none bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleResetUserPassword}>
            <h1 className="text-4xl font-bold text-center text-black mb-4">
              Forgot password?
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered border-black rounded-none"
                required
              />
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-ghost bg-black text-white font-medium text-base rounded-none hover:text-black">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
