import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SigninUser } from "../slices/Userslice";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const [useremail, setUseremail] = useState("");
  const [userpass, setUserpass] = useState("");
  const isloading = useSelector((state) => state.user.isloading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const save = [useremail, userpass].every(Boolean);

  async function SigninFunc(event) {
    event.preventDefault();
    if (save) {
      try {
        await dispatch(
          SigninUser({
            Email: useremail,
            Password: userpass,
          })
        ).unwrap();
        toast.success("Logged In Successfully");
        navigate("/");
      } catch (error) {
        toast.error(error.message || "Failed to log in");
      }
    }
  }

  return (
    <div className="h-[320px] w-[300px] mt-28">
      <ToastContainer />
      <div className="w-full p-5 rounded-lg bg-orange-200 flex flex-col gap-5">
        <h1 className="text-4xl text-center text-white">Login User</h1>
        <div className="flex flex-col gap-5 mt-5">
          <form onSubmit={SigninFunc} className="flex flex-col gap-5">
            <input
              type="text"
              onChange={(e) => setUseremail(e.target.value)}
              placeholder="Email"
              className="bg-transparent border-b-2 border-black outline-none"
            />
            <input
              type="password"
              onChange={(e) => setUserpass(e.target.value)}
              placeholder="Password"
              className="bg-transparent border-b-2 border-black outline-none mt-4"
            />
            <button
              disabled={!save}
              className="disabled:bg-slate-300 disabled:text-black text-2xl bg-blue-200 rounded-lg p-2 hover:bg-slate-100 hover:text-blue-500 mt-3 placeholder:font-extrabold placeholder:font-serif"
            >
              Sign In
            </button>
          </form>
        </div>
        {isloading && <span>Loading...</span>}
      </div>
    </div>
  );
}

export default Login;
