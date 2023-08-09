
import "./navbar.css";

import { Link, useNavigate } from "react-router-dom";

import { useEffect } from "react";
const NavBar = () => {
  
  
  return (
    <>
      {/* <ToastContainer /> */}
      <div className="Navbar">
        <div className="leftside">
          {/* <select
            name="lang"
            defaultValue={lang}
            onChange={(e) => setLang(e.target.value)}
            className="absolute top-0 left-0"
          >
            <option value="en">EN</option>
            <option value="am">AM</option>
          </select> */}
          <div className="leftLeft">
            <h1>Student</h1>
          </div>
          {/* {user === null || user === undefined ? (
            <></>
          ) : ( */}
            <div className="leftRight">
              <div>
                <Link to="/Home">Home</Link>
              </div>
              <div>
                {/* <a href="/CreateStudent">Create Student</a> */}
                <Link to="/CreateStudent">Creaate Student</Link>
              </div>
              <div>
                <Link to="/List">List</Link>
              </div>
              <Link to="/CreateUser">User</Link>
              <div>
                {/* <button onClick={() => logout()}>Logout</button> */}
              </div>
            </div>
          {/* )} */}
        </div>
        {/* {user === null || user === undefined ? (
          <></>
        ) : (
          <div className="rightside">
            <div>{user?.Email}</div>
            <div className="img">
              <img
                className="img"
                src={require("../../../assets/ab.png")}
              ></img>
            </div>
          </div>
        )} */}
      </div>
    </>
  );
};

export default NavBar;