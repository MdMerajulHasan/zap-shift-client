import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { LuUserRoundPlus } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router";
import axios from "axios";

const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, googleSignIn, update, setUser } = useAuth();
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        navigate(location?.state?.from || "/");
        console.log(res.user);
      })
      .catch((err) => alert(err.message));
  };

  const updateUserData = (data) => {
    update(data)
      .then()
      .catch((error) => alert(error.message));
  };

  const handleRegistration = (data) => {
    const { email, password, name, photo } = data;
    // const profileImg = photo.

    registerUser(email, password)
      .then((res) => {
        // getting image file data from form data
        const profileImg = photo[0];
        // creating FormData to upload in imgBB
        const formData = new FormData();
        formData.append("image", profileImg);
        // setting api to upload image in imgBB
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host
        }`;
        // using axios uploading the photo
        axios.post(image_API_URL, formData).then((res) => {
          const photo_url = res.data.data.display_url;
          const userProfileData = { displayName: name, photoURL: photo_url };
          console.log(userProfileData);
          updateUserData(userProfileData);
        });
        setUser(res.user);
        navigate(location?.state?.from || "/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="card w-3/4 mx-auto shrink-0 my-16">
      <h3 className="text-4xl font-extrabold">Welcome Back</h3>
      <p>Login with ZapShift</p>
      <span className="py-5 text-[#bdc9cd]">
        <LuUserRoundPlus size={30} />
      </span>

      <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="card-body p-0 space-y-3">
          <fieldset className="fieldset">
            {/* taking name input */}
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input w-full"
              placeholder="Your Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Name is required</p>
            )}
            {/* taking photo input */}
            <label className="label">Photo</label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input w-full"
              placeholder="Upload Photo"
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-500">Photo is required</p>
            )}
            {/* taking email input */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input w-full"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600">Email is required</p>
            )}
            {/* taking password input */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
              })}
              className="input w-full"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">
                Password must at least 6 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one uppercase, lowercase, number and special
                character
              </p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral bg-primary text-black rounded-md border-none mt-4">
              Register
            </button>
          </fieldset>
        </div>
      </form>
      <p className="text-[#71717a] mt-3">
        Already have an account?
        <Link state={location?.state} to="/login">
          <span className="text-[#8fa748]">Login</span>
        </Link>
      </p>
      <div className="text-center text-[#71717a] mt-3">Or</div>
      <button
        onClick={handleGoogleLogin}
        className="btn text-black bg-[#e9ecf1] mt-3 font-medium text-[14px] flex gap-2"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Register with Google
      </button>
    </div>
  );
};

export default Registration;
