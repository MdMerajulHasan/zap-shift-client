import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser, googleSignIn } = useAuth();

  const location = useLocation();
  console.log("from login", location.state.from);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        navigate(location?.state?.from || "/");
        console.log(res.user);
      })
      .catch((err) => alert(err.message));
  };

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((res) => {
        navigate(location?.state?.from || "/");
        console.log(res.user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="card w-3/4 mx-auto shrink-0 my-16">
      <h3 className="text-4xl font-extrabold">Welcome Back</h3>
      <p>Login with ZapShift</p>
      <form
        className="card-body p-0 space-y-3"
        onSubmit={handleSubmit(handleLogin)}
      >
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input w-full"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be at least 6 characters long
            </p>
          )}
          <div>
            <a className="link link-hover text-[#71717a] underline">
              Forgot password?
            </a>
          </div>
          <button className="btn bg-primary text-black border-none btn-neutral mt-4">
            Login
          </button>
        </fieldset>
      </form>
      <p className="text-[#71717a] mt-3">
        Don’t have any account?{" "}
        <Link to="/registration">
          <span className="text-[#8fa748]">Register</span>
        </Link>
      </p>
      <div className="text-center text-[#71717a] mt-3">Or</div>
      <button
        onClick={handleGoogleLogin}
        className="btn text-black bg-[#e9ecf1] mt-3 font-medium text-[14px] flex gap-2"
      >
        <span>
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
        </span>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
