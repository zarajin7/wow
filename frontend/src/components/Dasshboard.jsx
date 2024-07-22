import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialCampaigns = [
  {
    id: 1,
    name: "Campaign 1",
    target: 5000,
    collected: 3000,
    image: "https://via.placeholder.com/150?text=Campaign+1",
  },
  {
    id: 2,
    name: "Campaign 2",
    target: 10000,
    collected: 7000,
    image: "https://via.placeholder.com/150?text=Campaign+2",
  },
];

function Dasshboard() {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    name: "",
    target: "",
    collected: "",
    image: "",
  });

  const addNewCampaign = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCampaign({ ...newCampaign, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, target, collected, image } = newCampaign;
    if (name && target && collected && image) {
      setCampaigns([
        ...campaigns,
        {
          id: campaigns.length + 1,
          name,
          target: parseFloat(target),
          collected: parseFloat(collected),
          image,
        },
      ]);
      setNewCampaign({ name: "", target: "", collected: "", image: "" });
      setIsModalOpen(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Donation Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="relative bg-white p-4 rounded-lg shadow-md group"
          >
            <img
              src={campaign.image}
              alt={campaign.name}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{campaign.name}</h2>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Collected</span>
                <span className="text-sm font-medium">
                  ${campaign.collected}
                </span>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div className="text-xs font-medium text-blue-600">
                    ${campaign.collected}
                  </div>
                  <div className="text-xs font-medium text-blue-600">
                    ${campaign.target}
                  </div>
                </div>
                <div className="flex-1 bg-gray-300 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-full rounded-full"
                    style={{
                      width: `${(campaign.collected / campaign.target) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <p>
              <strong>Target Needed:</strong> ${campaign.target}
            </p>
            <p>
              <strong>Remaining Amount:</strong> $
              {campaign.target - campaign.collected}
            </p>
            <Link
              to={`/donate/${campaign.id}`}
              className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Donate
            </Link>
          </div>
        ))}
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
        onClick={addNewCampaign}
      >
        Add New Campaign
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add New Campaign</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Campaign Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={newCampaign.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="target"
                >
                  Target Amount
                </label>
                <input
                  id="target"
                  name="target"
                  type="number"
                  value={newCampaign.target}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="collected"
                >
                  Collected Amount
                </label>
                <input
                  id="collected"
                  name="collected"
                  type="number"
                  value={newCampaign.collected}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="image"
                >
                  Image URL
                </label>
                <input
                  id="image"
                  name="image"
                  type="text"
                  value={newCampaign.image}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                >
                  Add Campaign
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default Dasshboard;
