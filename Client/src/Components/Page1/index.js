import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import Welcome from "./Welcome";
import SignUp from "./SignUp";
import Login from "./Login";

const Page1 = () => {

  return (
    <>
      <div className="bg-bckground h-screen w-full flex items-center justify-center">
        {/* background container */}
        <div className="lg:rounded-3xl  rounded-xl bg-layer1-500 h-95 md:h-90 w-90 max-h-700  flex flex-col overflow-hidden  ">
          <Routes>
            <Route exact path="" element={<Welcome />}></Route>
              <Route
                exact
                path='signup'
                element={<SignUp />}
              ></Route>
              <Route exact path="login" element={<Login />}></Route>
            
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Page1;
