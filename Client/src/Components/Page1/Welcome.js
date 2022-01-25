import React from "react";
import { Link  } from "react-router-dom";
// images
import logo from "../../images/logo.png";
import slogan from "../../images/slogan.png";



const Wlecome = () => {
  return (
    <>
      <div className="flex basis-4/5 flex-col gap-2 items-center justify-center">
        {/*logo master container*/}
        <div className=" lg:w-44 md:w-36 w-28">
          {/* log container */}
          <img src={logo} className="w-full" alt="logo" />
        </div>
        <div className=" lg:w-56  md:w-36 w-28 flex flex-row-reverse ">
          <div className="lg:w-24 md:w-20 w-16 flex flex-row-reverse">
            {/* log container */}
            <img src={slogan} className="w-full " alt="slogan" />
          </div>
        </div>
      </div>
      <div className="flex flex-col  gap-4 items-center justify-center">
        {/*button container */}{/*login button*/}
        <Link to ="/login">
          <button className="lg:w-32 md:w-24 w-16 lg:h-8 h-6  lg:rounded-xl md:rounded-lg rounded-md lg:text-sm   text-xs  bg-defaultYellow    font-semibold text-cement hover:scale-110 ">
            LOG IN
          </button>
        </Link>

         {/*signup button*/}
        <Link to ="/signup">
        <button className="lg:w-32 md:w-24 w-16 lg:h-8 h-6 lg:rounded-xl md:rounded-lg rounded-md lg:text-sm   text-xs bg-white  font-semibold text-darkBlue hover:scale-110">
          SIGN UP
        </button>
        </Link>
       
      </div>
    </>
  );
};

export default Wlecome;
