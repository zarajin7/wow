import React from 'react';
import { Link } from 'react-router-dom';

const Dasshboard = ({ organizations }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <div className="flex justify-between">
        <div className="w-1/2">
          <h2 className="text-xl font-semibold mb-2">Organizations</h2>
          <ul className="border border-gray-200 rounded-lg p-4">
            {organizations && organizations.map(org => (
              <li key={org.id} className="mb-2">
                {org.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <h2 className="text-xl font-semibold mb-2">Actions</h2>
          <div className="flex space-x-4">
            <Link to="/donor" className="bg-amber-300 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
              Donor Dashboard
            </Link>
            <Link to="/admin" className="bg-green-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
              Admin Dashboard
            </Link>
          </div>
        </div>
     </div>
    </div>
  );
};

export default Dasshboard;