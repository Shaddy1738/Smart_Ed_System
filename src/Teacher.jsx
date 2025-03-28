import React, { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import {menuIcon} from "./Icons/menu-icon.png"
const Teacher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
       
      <Header />
      <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <header
        className={`transition-margin-left duration-300 flex flex-row justify-between items-center bg-gray-300 p-4 fixed top-0 right-0 ${
          isOpen ? "left-64 justify-end" : "left-0"
        } `}>
        {!isOpen && (
          <div
            onClick={toggleSidebar}
            className="bg-gray-400 hover:bg-blue-600 text-white font-bold p-1 rounded"
            style={{ width: "30px", height: "30px" }} >
            <img
              src={menuIcon}
              alt="Menu"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
        )}

        <div className="studentInfo">
          <img src={notification} alt="notification" />
          <h2>Shaddy</h2>
          <img src={profile} alt="profile" />
        </div>
      </header>
      <div className={`transition-margin-left duration-300 transition-all flex flex-col right-0 fixed ${isOpen ? ' left-64' : 'left-0'}`}>
          <Outlet/>
        </div>
    </>
  );
};

export default Teacher;
