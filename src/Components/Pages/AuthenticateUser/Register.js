import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import useToken from "../../../hooks/useToken";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import SocialLogin from "./SocialLogin";


const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth, {
    sendEmailVerification: true,
  });
  const location = useLocation();
  const [token] = useToken(user);
  let from = location.state?.from?.pathname || "/";

  let signError;
  if (error || updateError) {
    signError = <p className="text-red-500">Error: {error?.message}</p>;
  }
  if (loading || updating) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (token) {
    navigate(from, { replace: true });
  }

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  return (
    <div className="flex justify-center items-center h-screen mb-40 mt-20">
      <div className="w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-center text-3xl">Register</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "name is required",
                  },
                  maxLength: {
                    value: 8,
                    message: "8 characters or longer",
                  },
                })}
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name?.type === "required" && (
                <span className="text-red-500">{errors.name?.message}</span>
              )}
              {errors.name?.type === "maxLength" && (
                <span className="text-red-500">{errors.name?.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                  pattern: {
                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: "provide valid email",
                  },
                })}
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email?.type === "required" && (
                <span className="text-red-500">{errors.email?.message}</span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-red-500">{errors.email?.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  minLength: {
                    value: 8,
                    message: "8 characters or longer",
                  },
                })}
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500">{errors.password?.message}</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500">{errors.password?.message}</span>
              )}
            </div>

            <p>
              Forgot password?{" "}
              <Link className="text-primary" to="/">
                reset password
              </Link>
            </p>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            {signError}
          </form>
          <p>
            Already have an account?{" "}
            <Link className="text-primary" to="/login">
              Login
            </Link>{" "}
            here{" "}
          </p>
          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
