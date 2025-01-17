import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../../redux/api/userAPiSlice";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");
  const [register] = useRegisterMutation();
  const formHandler = async () => {
    if (Password === confrimPassword) {
      toast.error("password does not match to confirm password");
    } else {
      const data = await register({ username, email, Password }).unwrap();
      toast.success("user rigester successfully");
    }
  };

  return (
    <>
      <section className="h-screen flex justify-center items-center text-white">
        <div className="w-[30rem] border  p-4 rounded">
          <h1 className="font-mono text-xl text-center ">Create an acccount</h1>
          <form action="" className=" ">
            <div className="w-full my-2">
              <p className="text-start mr-52">Username</p>
              <input type="text" className="w-full rounded px-3 py-1" />
            </div>
            <div className="w-full my-2">
              <p className="text-start mr-52">Email</p>
              <input type="text" className="w-full rounded px-3 py-1" />
            </div>
            <div className="w-full my-2">
              <p className="text-start mr-52">Password</p>
              <input type="text" className="w-full rounded px-3 py-1" />
            </div>
            <div className="w-full my-2">
              <p className="text-start mr-52">confrim Password</p>
              <input type="text" className="w-full rounded px-3 py-1" />
            </div>
            <p className="my-2">
              Already have a account ?{" "}
              <span className="text-teal-400">
                {" "}
                <Link to="/login"> Login</Link>{" "}
              </span>
            </p>
            <button className="w-full  bg-green-400 rounded py-2">
              SignUp
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
