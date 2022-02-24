
import React from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
// image
import login from "../../images/login.svg";
import Navbar from "../ReusableComponents/Navbar";



const Login = () => {
  let navigate  = useNavigate();
  // state management
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });
  const [paswordAlert, setPasswordAlert] = React.useState("")

  
  // Actions
  const enterData = (e) => {
    setLoginData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // login function
  const loginUser = async (e) => {
    e.preventDefault();
    // console.log("logging function");
    // axios.get()
    await axios({
      method: "post",
      url: "https://chatin-server.herokuapp.com/auth/login",
      data: loginData,
    })
      .then(function (response) {
        var data = response.data;
        if (data.user) {
          setPasswordAlert("");
          var userId = data.userId;
          console.log(userId);
          navigate(`/chat/${userId}`);
          
        } else {
          console.log(data);
          setPasswordAlert(data.message)
        }
      })
      .catch(function (error) {
        console.log("error");
      });
  }



  return (
    <div className="h-full w-full flex flex-col md:flex-row gap-2 md:gap-0  ">
      {/*navbar for small device */}
      <div className="block md:hidden mt-5">
        <Navbar />
      </div>

      <div className=" h-full w-full md:w-2/3  flex flex-col">
        {/* navbar for other devices */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        <form className="h-full  w-full flex flex-col  " onSubmit={loginUser}>
          <div className="h-4/6 lg:h-full w-full   flex flex-col  items-center justify-center gap-7">
            <input
              type="email"
              className="h-1/7 md:h-1/6 lg:h-2/6  w-4/5 md:w-4/6 lg:w-4/5  bg-layer2 px-4 rounded-md text-defaultYellow outline-none md:font-medium"
              placeholder="Email"
              name="email"
              required
              onChange={enterData}
            />
            <input
              type="password"
              className="h-1/7 md:h-1/6 lg:h-2/6  w-4/5 md:w-4/6 lg:w-4/5  bg-layer2 px-4 rounded-md text-defaultYellow outline-none md:font-medium"
              placeholder="Password"
              name="password"
              required
              onChange={enterData}
            />
          </div>
          {/* button container */}
          <div className="h-2/6 lg:h-full     w-full    flex flex-col items-center justify-center gap-2">
            <button type="submit" className=" h-6 lg:h-10  w-16 md:w-24 lg:w-32 rounded-md  md:rounded-lg  lg:rounded-xl md:font-semibold text-xs lg:text-base lg:font-bold   outline-none    bg-defaultYellow     hover:scale-110 ">
              LOG IN
            </button>
            <span className=" font-light text-bckground">
              New user?
              <Link to="/signup">
                <span className="text-sm text-defaultYellow border-b border-defaultYellow cursor-pointer  ">
                  SignUp
                </span>
              </Link>
            </span>
            {paswordAlert && <div className=" w-full text-center text-red-500">
              <h2>{paswordAlert}</h2>
            </div>}
          </div>
        </form>
      </div>

      {/* image part */}
      <div className="w-1/2   hidden md:block">
        {/* image holder */}
        <div className="h-full w-full">
          <img src={login} alt="signup" className="h-full w-full" />
        </div>
      </div>
    </div>


  );
};

export default Login