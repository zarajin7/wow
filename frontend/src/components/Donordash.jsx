import React from 'react';

const Donordash = ({ donations }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Donor Dashboard</h1>
      <div className="border border-gray-200 rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">My Donations</h2>
        <ul>
          {donations.map(donation => (
            <li key={donation.id}>
              {donation.amount} USD to {donation.organization}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Donordash;
