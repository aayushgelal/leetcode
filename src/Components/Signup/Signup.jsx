import React, { useContext, useState } from "react";

import "./Signup.css";
import InputButton from "../Shared/InputButton";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
const Signup = () => {
  const [email, setemail] = useState("");
  const navigate=useNavigate()
  const [password, setpassword] = useState("");
  const {setIsLoggedIn}=useContext(AuthContext)

  const onclick = async (e) => {
    e.preventDefault();
    const response = await fetch("https://leetcode-server.onrender.com/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email:email,
        password:password,
      }),
    });

    if(response.status==200){   
      console.log('done')
       const json=await response.json();
       console.log(json);

      localStorage.setItem("token",json.token)
        navigate('/problemset/all')
     setIsLoggedIn(localStorage.getItem("token"))

    }else{
      const message=await response.json();
      alert(message.message);
      
    }
   

  }
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
            
            onClick={onclick}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
