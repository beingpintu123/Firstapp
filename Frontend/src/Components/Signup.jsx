import axios from "axios";
import React from "react";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
    if (name == "") {
      alert("please enter your name");
      return;
    }
    if (email == "") {
      alert("please enter your email");
      return;
    }
    if (password == "") {
      alert("please enter your password");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/signup", {
        name,
        email,
        password,
      });

      alert(res.data.message);
    } catch (err) {
      alert("Sign up  failed");
    }
  };

  return (
    <div className="flex border-1 h-100 w-100  rounded-lg mt-40 p-10 border-red-400 m-auto  ">
      <form
        onSubmit={handleSignin}
        className="flex flex-col items-center justify-center gap-10"
      >
        <div>
          <h2 className="text-4xl font-bold">
          Sign<span className="text-purple-700">Up</span>
          <hr className="mt-1 bg-red-900 h-[0.1rem]"/>
        </h2>
        </div>
        <input className="bg-gray-400 p-3 rounded-full w-75"
          type="text"
          placeholder="Enter your Name..."
          onChange={(e) => setName(e.target.value)}
        />

        <input className="bg-gray-400 p-3 rounded-full w-75"
          type="email"
          placeholder="Enter email..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <input className="bg-gray-400 p-3 rounded-full w-75"
          type="password"
          placeholder="Enter password..."
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="text-2xl font-semibold bg-blue-800 p-1 mb-2 rounded-full w-40  ">SignUp</button>
      </form>
    </div>
  );
};

export default Signup;
