import React, { useState } from "react";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
   import axios from "axios";
   import { Link } from "react-router-dom";

   const Dasshboard = () => {
     const [campaigns, setCampaigns] = useState([]);
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [newCampaign, setNewCampaign] = useState({
       name: "",
       target: "",
       collected: "",
       image: "",
     });

     // Fetch campaigns from the Django API
     useEffect(() => {
       axios.get("/api/campaigns/")
         .then((response) => {
           setCampaigns(response.data);
         })
         .catch((error) => {
           console.error("Error fetching campaigns:", error);
         });
     }, []);

     // Add a new campaign to the Django API
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
         axios.post("/api/campaigns/", {
           name,
           target: parseFloat(target),
           collected: parseFloat(collected),
           image,
         })
         .then((response) => {
           setCampaigns([...campaigns, response.data]);
           setNewCampaign({ name: "", target: "", collected: "", image: "" });
           setIsModalOpen(false);
         })
         .catch((error) => {
           console.error("Error adding campaign:", error);
         });
       }
     };

     return (
       <div className="p-6 bg-white min-h-screen">
         <h1 className="text-3xl font-bold mb-6 text-center text-black">Donation Admin Dashboard</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
           {campaigns.map((campaign) => (
             <div
               key={campaign.id}
               className="relative bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
             >
               <img
                 src={campaign.image}
                 alt={campaign.name}
                 className="w-full h-32 object-cover rounded-t-lg mb-4"
               />
               <h2 className="text-xl font-semibold mb-2">{campaign.name}</h2>
               <div className="mb-4">
                 <div className="flex justify-between mb-2">
                   <span className="text-sm font-medium text-black">Collected</span>
                   <span className="text-sm font-medium text-black">${campaign.collected}</span>
                 </div>
                 <div className="relative pt-1">
                   <div className="flex mb-2 items-center justify-between">
                     <div className="text-xs font-medium text-red-700">${campaign.collected}</div>
                     <div className="text-xs font-medium text-red-700">${campaign.target}</div>
                   </div>
                   <div className="flex-1 bg-gray-300 rounded-full h-2">
                     <div
                       className="bg-red-500 h-full rounded-full"
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
                 <strong>Remaining Amount:</strong> ${campaign.target - campaign.collected}
               </p>
               <Link
                 to={`/donate/${campaign.id}`}
                 className="absolute bottom-4 right-4 bg-red-700 text-white py-2 px-4 rounded-lg opacity-0 hover:opacity-100 transition-opacity"
               >
                 Donate
               </Link>
             </div>
           ))}
         </div>
         <button
           className="bg-red-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600"
           onClick={addNewCampaign}
         >
           Add New Campaign
         </button>

         {isModalOpen && (
           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
             <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
               <h2 className="text-xl font-semibold mb-4 text-black">Add New Campaign</h2>
               <form onSubmit={handleSubmit}>
                 <div className="mb-4">
                   <label
                     className="block text-sm font-medium mb-1 text-black"
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
                     className="block text-sm font-medium mb-1 text-black"
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
                     className="block text-sm font-medium mb-1 text-black"
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
                 <

div className="mb-4">
                   <label
                     className="block text-sm font-medium mb-1 text-black"
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
                     className="bg-red-700 text-white py-2 px-4 rounded-lg"
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
   };

   export default Dasshboard;

