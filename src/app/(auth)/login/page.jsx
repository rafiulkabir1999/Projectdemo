"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [user, setUser] = useState();
  const handleChange = (event) => {
    setUser((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/user/admin");
  };
  return (
    <div className=" w-full mx-auto flex justify-center items-center h-screen bg-primary">
      <div className="flex w-full lg:w-1/2 rounded-xl shadow-xl overflow-hidden bg-secondery border">
        <div className="bg-primary p-16 grow flex justify-center flex-col items-center">
          <p className="text-secondery text-xl font-bold">Sign in to Account</p>
          <form
            onSubmit={handleSubmit}
            className="w-full p-6 flex flex-col gap-5 py-5"
          >
            <p className="text-xs text-center p-3 opacity-60">
              or use your email account
            </p>
            <div className="relative">
              <label
                for="email"
                className="cursor-pointer text-secondery font-bold absolute bg-primary px-1 text-xs -top-1.5 left-2"
              >
                Email
              </label>
              <input
                required
                name="email"
                id="email"
                type="email"
                className="p-2.5 font-bold text-sm w-full border-2   rounded-md outline-1 outline-secondery bg-primary"
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="cursor-pointer text-secondery font-bold absolute bg-primary px-1 text-xs -top-1.5 left-2"
              >
                Password
              </label>
              <input
                required
                name="password"
                id="password"
                type="password"
                className="p-2.5 font-bold text-sm w-full border-2   rounded-md outline-1 outline-secondery bg-primary"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between text-xs">
              <div className="flex gap-2">
                <input type="checkbox" />
                <p className="">Remember me</p>
              </div>
              <p className="">Forgot Password</p>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="hover:shadow-md text-sm bg-secondery text-primary px-6 py-2.5 rounded-xl hover:bg-action"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className=" w-72 h-full flex justify-center items-center bg-secondery mt-28">
          <div className="w-full min-h-full p-6 text-center bg-secondery space-y-4 py-10 text-white text-sm">
            <p className="text-2xl">Hello , Message </p>
            <p>some Randome text heresome Randome text here</p>
            <button className="border hover:bg-white hover:text-secondery border-white rounded-full text-white text-sm px-6 py-2.5">
              Sign UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
