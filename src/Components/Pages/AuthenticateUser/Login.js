import React, { useEffect } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase/Firebase.init";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  
  useEffect(()=>{
    if (user) {
      console.log(user);
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  let signError;
  if (error || resetError) {
    signError = <p className="text-red-500">Error: {error?.message} {resetError?.message}</p>;
  }

  if (loading || sending) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const handleResetPassword = async(event)=>{
    const email = event.target.email.value;
    if(email.value){
      await sendPasswordResetEmail(email);
      toast('Sent email');
    } else {
      toast('Please, enter your mail');
    }
  }
 

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
           
            
              {signError}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          
        </form>
        <p>Forgot password? <button className="btn btn-link" onClick={handleResetPassword}>reset password</button></p>
        <p>New to Doctors Portal? <Link className="text-primary" to='/register'>create account</Link> </p>
        <div className="divider">OR</div>
        <SocialLogin></SocialLogin>

        </div>
      </div>
    </div>
  );
};

export default Login;
