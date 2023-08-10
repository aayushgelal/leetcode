import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./ProblemsPage.css";
import AlertCard from "../Shared/AlertCard";
import ButtonClick from "../Shared/ButtonClick";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { AuthContext } from "../../App";

const ProblemsPage = () => {
  const navigate = useNavigate();
  const [found, setfound] = useState();
  const [submission, setsubmission] = useState("");
  const [show_alert, setshow_alert] = useState(false);
  const [loading, setloading] = useState(false);
  const { pid } = useParams();
  const { isLoggedIn } = useContext(AuthContext);
  let alertdata = "";

  const init = async () => {
    const response = await fetch(
      `https://leetcode-server.onrender.com/problems/${pid}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    setfound(data.problems);
    //
  };

  useEffect(() => {
    init();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      setloading(true);

      const response = await fetch(
        "https://leetcode-server.onrender.com/submission",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            submission: submission,
            problemId: pid,
          }),
        }
      );
      alertdata = await response.json();
      setshow_alert(alertdata.output);
      setloading(false);
    } else {
      setshow_alert("Please Login to Submit the Code");
    }
  };

  return (
    <>
      {show_alert ? (
        <AlertCard
          message={show_alert}
          handleClick={() => {
            setshow_alert("");
          }}
        />
      ) : loading ? (
        <LoadingScreen />
      ) : found ? (
        <div
          id="problempage "
          className="flex justify-around p-4 max-md:flex-col"
        >
          <div className="ques ">
            <h1 className=" font-semibold text-2xl ">{found.title}</h1>
            <h5 className=" font-medium text-lg mt-5">Description</h5>
            <p className="mt-2"> {found.description}</p>

            <div className="h-0.5 bg-gray-200 mt-5" />
            <div className="mt-5 block">
              <div>Input : {found.exampleIn}</div>
              <div>Output : {found.exampleOut}</div>
            </div>
          </div>
          <div className="md:mx-5 max-md:mt-5 ">
            <h1 className=" font-bold"> Code Here</h1>
            <form method="post" onSubmit={handleSubmit}>
              <textarea
                className="h-[70vh] w-[50vw] max-md:w-full outline-7 p-4 outline-gray-500 border-2 rounded-xl mt-5"
                onChange={(e) => setsubmission(e.target.value)}
              ></textarea>
              <div className="flex">
                <ButtonClick
                  type="submit"
                  id="test"
                  name={"Test"}
                  selected={true}
                >
                  TestCode
                </ButtonClick>
                <ButtonClick
                  type="submit"
                  id="submit"
                  name={"Submit"}
                  selected={true}
                  onclick={handleSubmit}
                >
                  SubmitCode
                </ButtonClick>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default ProblemsPage;
