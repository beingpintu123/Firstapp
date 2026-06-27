import { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      alert(res.data.message);
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="border-1 h-80 w-100 m-auto mt-50 rounded-lg border-red-300">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center gap-10"
      >
        <div>
          <h2 className="text-4xl font-bold">
            Log<span className="text-purple-900">In</span>
          </h2>
          <hr className="mt-1" />
        </div>
        <div className="gap-1 flex flex-col">
          <input
            className="outline-none w-75 text-2xl rounded-full p-2 gap-1"
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <hr className="ml-2"/>
          <br />
          <input
            className="outline-none text-2xl w-75 rounded-full p-2 gap-1"
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <hr className="ml-2" />
        </div>

        <button
          type="submit"
          className="bg-blue-800 text-white rounded-full p-1 w-40 text-2xl font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
