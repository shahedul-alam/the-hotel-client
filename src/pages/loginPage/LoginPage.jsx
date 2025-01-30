import { Link, useLocation, useNavigate } from "react-router";
import banner from "../../assets/login-page-banner.jpg";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const LoginPage = () => {
  const { signinUser, logInWithGoogle, successToast, errorToast } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state || "/";

  const handleSignInUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signinUser(email, password)
      .then(() => {
        // showing successful login alert
        successToast("Welcome back! Logged in successfully.");
        // navigating to previous page
        navigate(from, { replace: true });
      })
      .catch(() => {
        // showing error login alert
        errorToast("Uh-oh! We couldn't log you in.");
      });
  };

  const handleLogInWithGoogle = () => {
    logInWithGoogle()
      .then(() => {
        // showing successful login alert
        successToast("Welcome back! Logged in successfully.");
        // navigating to previous page
        navigate(from, { replace: true });
      })
      .catch(() => {
        // showing error login alert
        errorToast("Uh-oh! We couldn't log you in.");
      });
  };

  return (
    <>
      <Helmet>
        <title>Login | the hotel</title>
      </Helmet>
      <main
        className="hero min-h-screen font-inter"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content w-full flex-col lg:flex-row lg:justify-start">
          <div className="card rounded-none bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSignInUser}>
              <h1 className="text-4xl text-black font-bold text-center mb-4">
                Login
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="input input-bordered border-black rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password:"
                  className="input input-bordered border-black rounded-none"
                  required
                />
                <label className="label">
                  <Link
                    to={`/reset-password`}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-ghost rounded-none bg-black text-white font-medium text-base border-none hover:text-black">
                  Login / Sign In
                </button>
              </div>
              <label className="label">
                <p className="label-text-alt">
                  Don't have an account?{" "}
                  <Link
                    to={"/register"}
                    className="label-text-alt link link-hover"
                  >
                    register
                  </Link>
                </p>
              </label>
              <div className="form-control mt-2">
                <p className="text-sm font-medium text-center text-secondary mb-2">
                  Or, login with
                </p>
                <button
                  className="font-medium text-base btn btn-ghost border border-black rounded-none"
                  onClick={handleLogInWithGoogle}
                >
                  Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
