import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// images
import signUpImage from "../../images/signup.svg";
import Navbar from "../ReusableComponents/Navbar";

const SignUp = () => {
  // state management
  const [signupData, setSignupData] = React.useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const enterData = (e) => {
    setSignupData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

// actions
  const RegisterUser = async (event) => {
    event.preventDefault();

    await axios({
      method: "post",
      url: "https://chatin-server.herokuapp.com/auth/addUser/new",
      data: signupData,
    })
      .then(function (response) {
        var data = response.data;
        if (data.user) {
          var user = data.user;
          window.location.href = `chat/${user}`;
        } else {
          console.log(data.error);
        }
      })
      .catch(function (error) {
        console.log("error");
      });
  };


  
  return (
    <div className="h-full w-full flex flex-col md:flex-row gap-2 md:gap-0  ">
      {/* avbar for small device */}
      <div className="block md:hidden mt-5">
        <Navbar />
      </div>
      <div className=" h-full w-full md:w-2/3  flex flex-col">
        <div className="hidden md:block">
          <Navbar />
        </div>

        <form
          className="h-full  w-full flex flex-col lg:flex-row "
          onSubmit={RegisterUser}
        >
          <div className="h-4/6 lg:h-full w-full lg:w-3/4  flex flex-col  items-center justify-center gap-7">
            <input
              type="text"
              className="h-1/7 md:h-1/6 lg:h-1/7  w-4/5 md:w-4/6 lg:w-4/5  bg-layer2 px-4 rounded-md text-defaultYellow outline-none md:font-medium lg:font-semibold"
              placeholder="Name"
              name="name"
              onChange={enterData}
              required
            />
            <input
              type="email"
              className="h-1/7 md:h-1/6 lg:h-1/7  w-4/5 md:w-4/6 lg:w-4/5  bg-layer2 px-4 rounded-md text-defaultYellow outline-none md:font-medium lg:font-semibold"
              placeholder="Email"
              name="email"
              onChange={enterData}
              required
            />
            <input
              type="text"
              className="h-1/7 md:h-1/6 lg:h-1/7  w-4/5 md:w-4/6 lg:w-4/5  bg-layer2 px-4 rounded-md text-defaultYellow outline-none md:font-medium lg:font-semibold"
              placeholder="Mobile"
              name="mobile"
              onChange={enterData}
              required
            />
            <input
              type="password"
              className="h-1/7 md:h-1/6 lg:h-1/7  w-4/5 md:w-4/6 lg:w-4/5  bg-layer2 px-4 rounded-md text-defaultYellow outline-none md:font-medium lg:font-semibold"
              placeholder="Password"
              name="password"
              onChange={enterData}
              required
            />
          </div>
          {/* button container */}
          <div className="h-2/6 lg:h-full md:w-full lg:w-1/4   flex flex-col items-center justify-center gap-2">
            <button
              type="submit"
              className=" h-6 lg:h-10  w-16 md:w-24 lg:w-32 rounded-md  md:rounded-lg  lg:rounded-xl md:font-semibold text-xs lg:text-base lg:font-bold   outline-none    bg-defaultYellow     hover:scale-110 "
            >
              SIGN UP
            </button>
            <span className=" font-light text-bckground">
              Already a user?{" "}
              <Link to="/login">
                <span className="text-sm text-defaultYellow border-b border-defaultYellow cursor-pointer  ">
                  logIn
                </span>
              </Link>
            </span>
          </div>
        </form>
      </div>

      {/* image part */}
      <div className="w-1/3  bg-snowWhite hidden md:block">
        {/* image holder */}
        <div className="h-full w-full">
          <img src={signUpImage} alt="signup" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
