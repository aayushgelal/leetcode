import React, { useState } from "react";

import "./Signup.css";
import InputButton from "../Shared/InputButton";
import { Navigate, useNavigate } from "react-router-dom";
const Signup = () => {
  const [email, setemail] = useState("");
  const navigate=useNavigate()
  const [password, setpassword] = useState("");
  return (
    <div className=" h-[calc(100vh-100px)] flex items-center justify-center ">
      <form className=" min-w-fit w-5/12 rounded-lg shadow-md border-none p-20 bg-gray-50  " method="post" action="/signup">
        <div className=" text-2xl flex items-center justify-center font-semibold mb-10 ">SignUp</div>
     

        

                    <InputButton name="Email" func={setemail} obscure={false}/>

          <InputButton name="Password" func={setpassword} obscure={true} />
        <div className="flex justify-center mt-5 ">
          <button
            type="submit"
            className="text-lg w-[calc(100%-100px)] min-w-fit rounded-lg hover:text-gray-200 bg-gray-700 text-white px-10 py-2 w-25"
            
            onClick={async (e) => {
              e.preventDefault();
              const response = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email:email,
                  password:password,
                }),
              });
              const json=await response.json();
              localStorage.setItem("token",json.token)
              if(response.status==200){
                navigate('/problemset/all')
              }

            }}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
