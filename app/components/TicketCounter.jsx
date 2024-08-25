"use client";
import React, { useState } from 'react';

const TicketCounter = () => {
  const initialTicketData = [
    { label: 'Adult', price: 40, quantity: 0 },
    { label: 'Children', price: 10, quantity: 0 },
    { label: 'Foreigner', price: 100, quantity: 0 },
    { label: 'Video Camera', price: 200, quantity: 0 },
    { label: 'Still Camera', price: 50, quantity: 0 },
  ];

  const [ticketData, setTicketData] = useState(initialTicketData);

  const handleQuantityChange = (index, increment) => {
    const updatedTickets = [...ticketData];
    updatedTickets[index].quantity = Math.max(0, updatedTickets[index].quantity + increment);
    setTicketData(updatedTickets);
  };

  const calculateSubtotal = () => {
    return ticketData.reduce((total, ticket) => total + ticket.price * ticket.quantity, 0);
  };

  const isAnyTicketSelected = () => {
    return ticketData.some(ticket => ticket.quantity > 0);
  };

  return (
    <div className="p-6 bg-green-900 text-white">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {ticketData.map((ticket, index) => (
          <div key={ticket.label} className="bg-green-800 p-4 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{ticket.label}</h3>
              <p className="text-sm">{ticket.label === 'Adult' ? 'Height: Above 4ft 4inch' : ticket.label === 'Children' ? 'Height: Below 4ft 4inch' : ''}</p>
              <p className="text-2xl mt-2">₹{ticket.price}</p>
              <p className="text-sm">per head</p>
            </div>
            <div className="flex items-center">
              <button
                className="bg-green-700 p-2 rounded-l-lg"
                onClick={() => handleQuantityChange(index, -1)}
              >
                −
              </button>
              <div className="px-4">{ticket.quantity}</div>
              <button
                className="bg-green-700 p-2 rounded-r-lg"
                onClick={() => handleQuantityChange(index, 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {isAnyTicketSelected() && (
        <div className="bg-green-900 p-6 rounded-lg text-white mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">Ticket Order Summary</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-green-800">
                <th className="py-2">TITLE</th>
                <th className="py-2">RATE</th>
                <th className="py-2">QUANTITY</th>
                <th className="py-2">PRICE</th>
              </tr>
            </thead>
            <tbody>
              {ticketData.filter(ticket => ticket.quantity > 0).map((ticket) => (
                <tr key={ticket.label} className="border-b border-green-800">
                  <td className="py-2">{ticket.label}</td>
                  <td className="py-2">₹{ticket.price}</td>
                  <td className="py-2">{ticket.quantity}</td>
                  <td className="py-2">₹{ticket.price * ticket.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-lg">Subtotal</p>
              <p className="text-lg">Tax %</p>
              <p className="text-2xl font-bold mt-2">Total</p>
            </div>
            <div className="text-right">
              <p className="text-lg">₹{calculateSubtotal()}</p>
              <p className="text-lg">0%</p>
              <p className="text-2xl font-bold mt-2">₹{calculateSubtotal()}</p>
            </div>
          </div>
          <button className="mt-6 w-full bg-green-700 py-2 text-xl font-semibold rounded-md hover:bg-green-600">
            PAY NOW
          </button>
        </div>
      )}
    </div>
  );
};

export default TicketCounter;
