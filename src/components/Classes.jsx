import React, { useState } from 'react';

const Classes = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen bg-gray-900">
     
      <div
        className={`transition-margin-left duration-300 ease-in-out p-4`}>
        <section>
   
          <div className="flex text-3xl rounded-2xl cursor-pointer text-white">
           <div className="rounded-2xl bg-gray-800 m-3 p-6 "> Total Students</div>
           <div className="rounded-2xl bg-gray-800 m-3 p-6 ">Total courses</div>
           <div className="rounded-2xl bg-gray-800  m-3 p-6 "> Total Classes</div>
          </div>
          <div className="bg-gray-800 text-white rounded-md p-4 mb-8 mt-5">
          <h2 className='text-3xl font-bold mb-4 '>Classes</h2>
       
          <table className='w-full m-9 font-stretch-condensed'>
            <thead>
              <tr className='text-left'>
                <th>Course Code</th>
                <th>Unit name </th>
                <th>  Total Students</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Venue</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>BCS 321</td>
                <td>Computer Networks</td>
                <td>80</td>
                <td>10:00 AM</td>
                <td>1:00PM</td>
                <td>ECA 303</td>
              </tr>
              <tr>
                <td>BCS 321</td>
                <td>Computer Networks</td>
                <td>80</td>
                <td>10:00 AM</td>
                <td>1:00PM</td>
                <td>ECA 303</td>
              </tr>
              <tr>
                <td>BCS 321</td>
                <td>Computer Networks</td>
                <td>80</td>
                <td>10:00 AM</td>
                <td>1:00PM</td>
                <td>ECA 303</td>
              </tr>
              <tr>
                <td>BCS 321</td>
                <td>Computer Networks</td>
                <td>80</td>
                <td>10:00 AM</td>
                <td>1:00PM</td>
                <td>ECA 303</td>
              </tr>
         
            </tbody>
          </table>
        </div>
        </section>
      </div>
    </div>
  );
};

export default Classes;