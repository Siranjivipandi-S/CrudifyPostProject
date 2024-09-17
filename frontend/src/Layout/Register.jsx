import React, { useState } from "react";
import { SignUpUser } from "../slices/Userslice";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Register() {
  const [useremail, setUseremail] = useState("");
  const [username, setUsername] = useState("");
  const [userpass, setUserpass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const save = [useremail, username, userpass].every(Boolean);
  async function SignUpFunc() {
    if (save) {
      try {
        await dispatch(
          SignUpUser({
            email: setUseremail,
            username: username,
            password: setUserpass,
          })
        ).unwrap();
        toast.success("Account Created Successfully");
        navigate("/");
      } catch (error) {
        toast.error("Error:", error);
      }
    }
  }
  return (
    <div className="h-[320px] w-[300px] mt-28">
      <ToastContainer />
      <div className="w-full p-5 rounded-lg bg-orange-200 flex flex-col gap-5">
        <h1 className="text-4xl text-center text-white">Register User</h1>
        <div className="flex flex-col gap-5 mt-5">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="bg-transparent border-b-2 border-black outline-none "
          />
          <input
            type="text"
            onChange={(e) => setUseremail(e.target.value)}
            placeholder="Email"
            className="bg-transparent border-b-2 border-black outline-none "
          />
          <input
            type="text"
            onChange={(e) => setUserpass(e.target.value)}
            placeholder="Password"
            className="bg-transparent border-b-2 border-black outline-none"
          />
        </div>
        <button
          onClick={SignUpFunc}
          disabled={!save}
          className=" disabled:bg-slate-300 disabled:text-black text-2xl bg-blue-200 rounded-lg p-2 hover:bg-slate-100 hover:text-blue-500 mt-3 placeholder:font-extrabold placeholder:font-serif"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
export default Register;
