import React, { useState } from 'react';
import Sider from './SideBar';

const Messages = () => {

  return (
    <div className="relative h-screen bg-gray-900">
      {/* Sidebar */}
      <Sider isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`transition-margin-left duration-300 ease-in-out  p-4`}
      >
        <section>
          <div className="bg-amber-200 p-6 m-7 rounded-2xl text-6xl flex justify-center items-center">
            <img
              className="rounded-full m-3 hover:shadow-2xl transition duration-500 ease-in-out"
              src="src/icons/web-logo.jpg"
              alt="web-logo"
              height={200}
              width={200}
            />
            Welcome Back Teacher !!
          </div>
          <div className="flex bg-amber-200 text-3xl p-3 m-3 rounded-2xl">
            <img src="src/icons/web-logo.jpg" alt="moreicon" height={20} width={50} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Messages;