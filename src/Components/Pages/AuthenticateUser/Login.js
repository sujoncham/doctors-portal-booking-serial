import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();

  let signError;
  if (error) {
    signError = <p className="text-red-500">Error: {error?.message}</p>;
  }
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user) {
    navigate('/')
  }

  const onSubmit = data => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
 

  

  return (
    <div className="flex justify-center items-center h-screen mb-20 mt-20">
      <div className="w-96 bg-base-100 shadow-xl">

        <div className="card-body">
        <h1 className="text-center text-3xl">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              {...register("email", {
                required:{
                  value:true,
                  message: 'email is required'
                },
                pattern: {
                  value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  message: 'provide valid email' 
                }
              })}
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email?.type === 'required' && <span className="text-red">{errors.email?.message}</span>}
              {errors.email?.type === 'pattern' && <span className="text-red">{errors.email?.message}</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              {...register("password", {
                required:{
                  value:true,
                  message: 'password is required'
                },
                minLength: {
                  value: 8,
                  message: '6 characters or longer' 
                }
              })}
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password?.type === 'required' && <span className="text-primary">{errors.password?.message}</span>}
              {errors.password?.type === 'minLength' && <span className="text-primary">{errors.password?.message}</span>}
            </div>
           
            <p>Forgot password? <Link className="text-primary" to='/'>reset password</Link></p>
              {signError}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          
        </form>
        <p>New to Doctors Portal? <Link className="text-primary" to='/register'>create account</Link> </p>
        <div className="divider">OR</div>
        <SocialLogin></SocialLogin>

        </div>
      </div>
    </div>
  );
};

export default Login;
