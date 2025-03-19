import React, { useState } from 'react';
import Sider from './Sider';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen bg-gray-900">
      {/* Sidebar */}
      <Sider isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`transition-margin-left duration-300 ease-in-out ${
          isOpen ? 'ml-64' : 'ml-0'
        } p-4`}
      >
        {!isOpen && (
          <button
            onClick={toggleSidebar}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-1 rounded"
            style={{ width: '30px', height: '30px' }}
          >
            <img src="src/icons/menu-icon.gif" alt="Menu" style={{ width: '20px', height: '20px' }} />
          </button>
        )}

        <section>
          <div className="bg-amber-200 p-6 m-7 rounded-2xl text-3xl flex justify-center items-center">
            <img
              className="rounded-full m-3 hover:shadow-2xl transition duration-500 ease-in-out"
              src="src/icons/web-logo.jpg"
              alt="web-logo"
              height={100}
              width={100}
            />
            Welcome Back Teacher !!
          </div>
          <div className="fkex">
            <div className=""></div>
          </div>
        </section>
        <section>
          <div className=""></div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;