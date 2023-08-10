import React, { useState, useContext } from "react";

import "./Login.css";
import { json } from "react-router-dom";
import InputButton from "../Shared/InputButton";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  return (
    <div className=" h-[calc(100vh-100px)] flex items-center justify-center ">
      <form
        className="rounded-lg shadow-md border-none p-20 bg-gray-50 min-w-fit w-5/12 "
        method="post"
        action="/signup"
      >
        <div className=" text-2xl flex items-center justify-center font-semibold mb-10 ">
          Login
        </div>
        <InputButton name={"Email"} func={setemail} />
        <InputButton name={"Password"} func={setpassword} obscure={true} />

        <div className="flex justify-center mt-5">
          <button
            className="text-lg w-[calc(100%-100px)] min-w-fit rounded-lg hover:text-gray-200 bg-gray-700 text-white px-10 py-2 w-25"
            type="submit"
            onClick={async (e) => {
              e.preventDefault();
              const response = await fetch(
                "https://leetcode-server.onrender.com/login",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email: email,
                    password: password,
                  }),
                }
              );
              const json = await response.json();
              console.log(json);

              if (response.status == 200) {
                localStorage.setItem("token", json.token);
                navigate("/problemset/all");
                setIsLoggedIn(localStorage.getItem("token"));
              } else {
                alert(json.message);
              }
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
