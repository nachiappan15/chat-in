// logo
import navLogo from "../../../images/navLogo.png";
import signup from "../../../images/signup.svg";

import React from "react";

const Navbar = () => {
  return (

    
      <div className="h-full   lg:h-16 md:h-12    flex  items-center lg:ml-8 md:ml-6 ml-4">
        {/* navbar containeer*/}
        <div className="lg:w-24  w-14  ">
          {/* nav logo containeer*/}
          <img src={navLogo} alt="navLOGO" className="w-full" />
        </div>
      </div>
  );
};

export default Navbar;
