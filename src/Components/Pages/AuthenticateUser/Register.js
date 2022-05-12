import React from 'react';

const Register = () => {
    return (
        <div className="flex justify-center items-center h-screen">
      <div class="w-96 bg-base-100 shadow-xl">
       
        <div class="card-body">
        <h1 className="text-center text-3xl">Login</h1>
        <form>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="enter name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter Phone</span>
              </label>
              <input
                type="text"
                placeholder="enter phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Booked</button>
            </div>
          
        </form>
        </div>
      </div>
    </div>
    );
};

export default Register;