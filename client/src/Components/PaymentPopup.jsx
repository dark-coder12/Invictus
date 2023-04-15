import React, { useState } from "react";

function PaymentPopup({ handleSubmit }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 text-gray-800">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-center text-xl font-bold mb-4">
          Payment Information
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="cardNumber"
            >
              Card Number
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="cardNumber"
              type="text"
              placeholder="0000 0000 0000 0000"
              value={cardNumber}
              onChange={(event) => setCardNumber(event.target.value)}
              required
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="expirationDate"
              >
                Expiration Date
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="expirationDate"
                type="text"
                placeholder="MM/YY"
                value={expirationDate}
                onChange={(event) => setExpirationDate(event.target.value)}
                required
              />
            </div>
            <div className="w-1/2 ml-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="securityCode"
              >
                Security Code
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="securityCode"
                type="text"
                placeholder="123"
                value={securityCode}
                onChange={(event) => setSecurityCode(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-[#3a0303] hover:bg-[#2a0202] text-white font-bold py-2 px-4 mt-4 rounded"
              type="submit"
            >
              Pay $1.00
            </button>
          </div>
        </form>
        <p className="text-sm mt-6">
          Pay only $1.0 to download your certification.
        </p>
        <p className="text-sm mb-4">Show it off on your CVs now!</p>
      </div>
    </div>
  );
}

export default PaymentPopup;
