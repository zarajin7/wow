import React, { useState } from "react";

const DonationPage = () => {
  const [amount, setAmount] = useState(0);
  const [donationType, setDonationType] = useState("One-Time");
  const [donationPurpose, setDonationPurpose] = useState("Food Aid");
  const [coverFees, setCoverFees] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await post(
        "http://localhost:8000/api/donations/",
        {
          amount,
          donation_type: donationType,
          purpose: donationPurpose,
          cover_fees: coverFees,
        }
      );
      console.log(response.data);
      alert("Donation successful!");
    } catch (error) {
      console.error(error);
      alert("Donation failed.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="flex justify-center mb-4">
          <img
            src="src/assets/wow_ pics/WOW.svg"
            alt="Logo"
            className="h-20 object-cover rounded-full"
          />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">
          Donate to World of Work
        </h2>
        <p className="text-center mb-6">
          Your support provides education scholarships, basic needs, and
          community development activities in Kitale.
        </p>
        <div className="flex justify-center mb-4">
          <button
            type="button"
            className={`px-4 py-2 rounded-l-full ${
              donationType === "One-Time" ? "bg-gray-300" : "bg-gray-200"
            }`}
            onClick={() => setDonationType("One-Time")}
          >
            One-Time
          </button>
          <button
            type="button"
            className={`px-4 py-2 ${
              donationType === "Monthly" ? "bg-gray-300" : "bg-gray-200"
            }`}
            onClick={() => setDonationType("Monthly")}
          >
            Monthly
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-r-full ${
              donationType === "Yearly" ? "bg-gray-300" : "bg-gray-200"
            }`}
            onClick={() => setDonationType("Yearly")}
          >
            Yearly
          </button>
        </div>
        <div className="mb-4">
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
          />
        </div>
        <div className="mb-4">
          <select
            value={donationPurpose}
            onChange={(e) => setDonationPurpose(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
          >
            <option value="Make donation anonymous">
              Make donation anonymous
            </option>
            <option value="Food Aid">Food Aid</option>
            <option value="Scholarship">Scholarship</option>
            <option value="Medical Support">Medical Support</option>
            <option value="Community Programs">Community Programs</option>
            <option value="Craft Production">Craft Production</option>
            <option value="Basic Agriculture">Basic Agriculture</option>
            <option value="Catering">Catering</option>
            <option value="Business Skills">Business Skills</option>
            <option value="Hair & Beauty Training">
              Hair & Beauty Training
            </option>
            <option value="Plan for Tailoring">Plan for Tailoring</option>
            <option value="Introduction to Computers">
              Introduction to Computers
            </option>
            <option value="Social, Sports & Environmental Activities">
              Social, Sports & Environmental Activities
            </option>
            <option value="Lifeskills & Personal Development">
              Lifeskills & Personal Development
            </option>
          </select>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={coverFees}
            onChange={() => setCoverFees(!coverFees)}
            className="mr-2"
          />
          <label>Add ${amount * 0.03} USD to help cover the fees.</label>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            type="submit"
            className="bg-amber-300 text-white px-4 py-2 rounded-lg flex items-center justify-center"
          >
            <img
              src="src/assets/wow_ pics/15-facts-about-paypal-1694962132.jpg"
              alt="PayPal"
              className="w-6 h-6 mr-2"
            />{" "}
            Donate with PayPal
          </button>
          <button
            type="submit"
            className="bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Donate with Debit or Credit Card
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationPage;
