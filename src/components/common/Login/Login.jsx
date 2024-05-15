import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../../UserContext";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");
  const {setUser}= useContext(UserContext);
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try{

      const {data} = await axios.post("/login", { email, password });
      setUser(data);
      alert("login success");
      setRedirect("true");
    }catch (e) {
      alert("login failed, invalid email or password");
    }
  }



  if (redirect) {
    return <Navigate to={"/"} />
  }
    

  return (
    <div className="mt-4 grow flex justify-around items-center">
      <div className="mb-32">
        <h1 className="font-bold text-lg  text-center">LOGIN</h1>
        <div className="flex items-center">
          <form
            className="max-w-screen-xl mx-auto"
            onSubmit={handleLoginSubmit}
          >
            <input
              type="email"
              placeholder="your@gmail.com"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <button type="submit">Login</button>
            <div className="text-centre py-2 text-gray-500">
              Dont have an account yet?
              <Link className="underline text-black" to={"/register"}>
                {" "}
                Register now{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

};


export default Login;
