import React, { useState } from 'react';
import Sider from './Sider';

const Classes = () => {
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
   
          <div className="flex text-3xl rounded-2xl cursor-pointer">
           <div className="rounded-2xl bg-amber-200 m-3 p-6 "> Total Students</div>
           <div className="rounded-2xl bg-amber-200 m-3 p-6 ">Total courses</div>
           <div className="rounded-2xl bg-amber-200  m-3 p-6 "> Total Classes</div>
          </div>
          <div className="mt-9 p-5 m-3 text-white" >
            <p className=' text-3xl'>My Classes</p>
            <section id="assignments" className="mb-4 p-4 border rounded">
          <table className="w-full ">
            <thead>
              <tr className="bg-amber-200 text-black">
                <th className="border p-2">Course Code</th>
                <th className="border p-2">Course</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">Start Time</th>
                <th className="border p-2">End Time</th>
                <th className="border p-2">Students</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">BCS 321</td>
                <td className="border p-2">Computer Networks</td>
                <td className="border p-2">Computer Science</td>
                <td className="border p-2">10:00 AM</td>
                <td className="border p-2">1:00 PM</td>
                <td className="border p-2">75</td>
              </tr>
              <tr>
              <td className="border p-2">BCS 321</td>
                <td className="border p-2">Computer Networks</td>
                <td className="border p-2">Computer Science</td>
                <td className="border p-2">10:00 AM</td>
                <td className="border p-2">1:00 PM</td>
                <td className="border p-2">75</td>
              </tr>
              <tr>
              <td className="border p-2">BCS 321</td>
                <td className="border p-2">Computer Networks</td>
                <td className="border p-2">Computer Science</td>
                <td className="border p-2">10:00 AM</td>
                <td className="border p-2">1:00 PM</td>
                <td className="border p-2">75</td>
              </tr>
              <tr>
              <td className="border p-2">BCS 321</td>
                <td className="border p-2">Computer Networks</td>
                <td className="border p-2">Computer Science</td>
                <td className="border p-2">10:00 AM</td>
                <td className="border p-2">1:00 PM</td>
                <td className="border p-2">75</td>
              </tr>
              <tr>
              <td className="border p-2">BCS 321</td>
                <td className="border p-2">Computer Networks</td>
                <td className="border p-2">Computer Science</td>
                <td className="border p-2">10:00 AM</td>
                <td className="border p-2">1:00 PM</td>
                <td className="border p-2">75</td>
              </tr>
              <tr>
              <td className="border p-2">BCS 321</td>
                <td className="border p-2">Computer Networks</td>
                <td className="border p-2">Computer Science</td>
                <td className="border p-2">10:00 AM</td>
                <td className="border p-2">1:00 PM</td>
                <td className="border p-2">75</td>
              </tr>
            </tbody>
          </table>
        </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Classes;