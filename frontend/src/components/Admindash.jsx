import React from 'react';

const Admindash = ({ organizations, donorsCount }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Admin Dashboard</h1>
      <div className="flex justify-between">
        <div className="w-1/2">
          <h2 className="text-xl font-semibold mb-2">Organizations</h2>
          <ul className="border border-gray-200 rounded-lg p-4">
            {organizations.map(org => (
              <li key={org.id} className="mb-2">
                {org.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <h2 className="text-xl font-semibold mb-2">Donors Count</h2>
          <p className="border border-gray-200 rounded-lg p-4">{donorsCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Admindash;
