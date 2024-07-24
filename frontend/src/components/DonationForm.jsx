import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";

const DonationPage = () => {
  const [amount, setAmount] = useState(0);
  const [donationType, setDonationType] = useState("One-Time");
  const [donationPurpose, setDonationPurpose] = useState("Food Aid");
  const [coverFees, setCoverFees] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    // Fetch campaigns from the API
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/campaigns/");
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const donationResponse = await fetch(
        "http://127.0.0.1:8000/api/donations/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount,
            donation_type: donationType,
            purpose: donationPurpose,
            cover_fees: coverFees,
            campaign_id: selectedCampaign,
          }),
        }
      );

      const donationData = await donationResponse.json();
      console.log(donationData);

      // Update the progress of the campaign
      await fetch(`http://localhost:8000/api/campaigns/${selectedCampaign}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collected: donationData.new_collected_amount,
        }),
      });

      alert("Donation successful!");
    } catch (error) {
      console.error("Donation failed:", error);
      alert("Donation failed.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="flex justify-center mb-4">
          <img
            src="src/assets/wow_pics/WOW.svg"
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
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="campaign">
            Select Campaign
          </label>
          <select
            id="campaign"
            value={selectedCampaign}
            onChange={(e) => setSelectedCampaign(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a campaign</option>
            {campaigns.map((campaign) => (
              <option key={campaign.id} value={campaign.id}>
                {campaign.name}
              </option>
            ))}
          </select>
        </div>
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
            required
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
              src="src/assets/wow_pics/15-facts-about-paypal-1694962132.jpg"
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

      {/* QR Code Section */}
      {qrCodeUrl && (
        <div className="mt-8 bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
          <h3 className="text-xl font-bold mb-4 text-center">
            Scan to Complete Payment
          </h3>
          <div className="flex justify-center mb-4">
            <QRCode value={qrCodeUrl} size={256} />
          </div>
          <p className="text-center">
            Use your mobile app to scan the QR code and complete the payment.
          </p>
        </div>
      )}
    </div>
  );
};

export default DonationPage;
