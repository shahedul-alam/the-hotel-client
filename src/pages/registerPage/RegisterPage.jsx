import { useState } from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import banner from "../../assets/login-page-banner.jpg";

const RegisterPage = () => {
  const {
    createNewUser,
    updateUserProfile,
    logInWithGoogle,
    successToast,
    errorToast,
  } = useAuth();
  const navigate = useNavigate();
  const [notValid, setNotValid] = useState(false);
  const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

  const handleCreateNewUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // checking if password is valid
    if (regex.test(password)) {
      setNotValid(false);

      createNewUser(email, password)
        .then(() => {
          // after successful registration updating userInfo
          updateUserProfile({ displayName, photoURL })
            .then(() => {
              // showing successful register alert
              successToast("Congratulations! Registered successfully");
              // navigating to homepage
              navigate("/", { replace: true });
            })
            .catch(() => {
              // showing error register alert
              errorToast("Uh-oh! There was an issue creating your account.");
            });
        })
        .catch(() => {
          // showing error register alert
          errorToast("Uh-oh! There was an issue creating your account.");
        });
    } else {
      setNotValid(true);
    }
  };

  const handleLogInWithGoogle = () => {
    logInWithGoogle()
      .then(() => {
        // showing successful register alert
        successToast("Congratulations! Registered successfully");
        // navigating to previous page
        navigate("/", { replace: true });
      })
      .catch(() => {
        // showing error register alert
        errorToast("Uh-oh! There was an issue creating your account.");
      });
  };

  return (
    <div
      className="hero min-h-screen font-inter"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content w-full flex-col lg:flex-row lg:justify-start">
        <div className="card bg-base-100 rounded-none w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleCreateNewUser}>
            <h1 className="text-4xl text-black font-bold text-center mb-4">
              Register
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered border-black rounded-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter your photo URL"
                className="input input-bordered border-black rounded-none"
                required
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered border-black rounded-none"
                required
              />
            </div>
            {notValid && (
              <div className="form-control">
                <p className="label-text-alt text-red-600">
                  Password must include at least 6 characters, with both
                  uppercase and lowercase letters
                </p>
              </div>
            )}
            <div className="form-control mt-4">
              <button className="btn bg-black rounded-none text-white font-medium text-base border-none hover:text-black">
                Register / Sign Up
              </button>
            </div>
            <label className="label">
              <p className="label-text-alt">
                Already have an account?{" "}
                <Link to={"/login"} className="label-text-alt link link-hover">
                  Login
                </Link>
              </p>
            </label>
            <div className="form-control mt-2">
              <p className="text-sm font-medium text-center text-secondary mb-2">
                Or, register with
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
    </div>
  );
};

export default RegisterPage;
