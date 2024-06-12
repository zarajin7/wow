import React from 'react';

const ConfirmPayment = ({ nextStep, prevStep }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Confirm the payment</h2>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <input type="checkbox" id="anonymous" className="mr-2" />
          <label htmlFor="anonymous">Make donation anonymous</label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="company" className="mr-2" />
          <label htmlFor="company">This donation is on behalf of a company</label>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Are you currently employed?</label>
          <div className="flex items-center">
            <input type="radio" id="employedYes" name="employment" className="mr-2" />
            <label htmlFor="employedYes" className="mr-4">Yes</label>
            <input type="radio" id="employedNo" name="employment" className="mr-2" />
            <label htmlFor="employedNo">No</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Text for the Custom Question</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="subscribe" className="mr-2" />
          <label htmlFor="subscribe">Subscribe to our mailing list to receive updates from us. You can unsubscribe anytime.</label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="privacy" className="mr-2" />
          <label htmlFor="privacy">By donating with this form, you agree to our Privacy Policy and Terms of Service</label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="processingFee" className="mr-2" />
          <label htmlFor="processingFee">Optionally add $0.70 to cover processing fee</label>
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-300 text-black p-2 rounded">Back</button>
        <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">Confirm</button>
      </div>
    </div>
  );
};

export default ConfirmPayment;
