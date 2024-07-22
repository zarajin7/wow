import {Link} from "react-router-dom"
import React from 'react';

const Donation = () => {
  return (
    <div className="bg-white">
    

      <div className="container mx-auto text-center mt-8 p-6 bg-amber-300 text-black">
        <h2 className="text-3xl font-bold mb-4">Donate</h2>
        <p className="mb-4">Your support improves public health, advances education, empowers women and young leaders, and increases economic prosperity in the informal settlement of Kitale and beyond.</p>
      </div>

      <div className="container mx-auto mt-8 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               
        <div className="bg-white p-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-gradient-to-r from-red-500 to-amber-300 shadow-lg">
          <img src="src/assets/wow_ pics/boys_club.jpeg" alt="Boys Club" className="w-full h-48 object-cover mb-4"/>
          <h3 className="text-xl font-bold mb-2">Boys Club</h3>
          <p className="mb-2">100$ will provide monthly stipend for a boy child.</p>
          <Link to="/donate"><button className="bg-red-700 text-white px-4 py-2 rounded">Donate</button></Link>
        </div>
        
        <div className="bg-white p-6   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-gradient-to-r from-red-500 to-amber-300 shadow-lg">
          <img src="src/assets/wow_ pics/girls.jpeg" alt="Girls Club" className="w-full h-48 object-cover mb-4"/>
          <h3 className="text-xl font-bold mb-2">Girls Club</h3>
          <p className="mb-2">150$ will provide monthly stipend for a girl child.</p>
          <Link to="/donate"><button className="bg-red-700 text-white px-4 py-2 rounded">Donate</button></Link>
        </div>

        <div className="bg-white p-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-gradient-to-r from-red-500 to-amber-300 shadow-lg">
          <img src="path/to/food_aid.jpg" alt="Food Aid" className="w-full h-48 object-cover mb-4"/>
          <h3 className="text-xl font-bold mb-2">Food Aid</h3>
          <p className="mb-2">5$ provide a meal to our community feeding program.</p>
          <Link to="/donate"><button className="bg-red-700 text-white px-4 py-2 rounded">Donate</button></Link>
        </div>
        
        <div className="bg-white p-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-gradient-to-r from-red-500 to-amber-300 shadow-lg">
          <img src="path/to/scholarship.jpg" alt="Scholarship" className="w-full h-48 object-cover mb-4"/>
          <h3 className="text-xl font-bold mb-2">Scholarship</h3>
          <p className="mb-2">1000$ provides education scholarship per year for one student.</p>
          <Link to="/donate"><button className="bg-red-700 text-white px-4 py-2 rounded">Donate</button></Link>
        </div>
        
        <div className="bg-white p-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-gradient-to-r from-red-500 to-amber-300 shadow-lg">
          <img src="path/to/medical_support.jpg" alt="Medical Support" className="w-full h-48 object-cover mb-4"/>
          <h3 className="text-xl font-bold mb-2">Medical Support</h3>
          <p className="mb-2">200$ provides primary health care for a community member.</p>
          <Link to="/donate"><button className="bg-red-700 text-white px-4 py-2 rounded">Donate</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Donation;
