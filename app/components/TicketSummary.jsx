
import React from 'react';

export default function TicketSummary({ tickets = [] }) { 
  const calculateSubtotal = () => {
    return tickets.reduce((total, ticket) => total + ticket.price * ticket.quantity, 0);
  };

  const subtotal = calculateSubtotal();

  return (
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
          {tickets.map((ticket) => (
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
          <p className="text-lg">₹{subtotal}</p>
          <p className="text-lg">0%</p>
          <p className="text-2xl font-bold mt-2">₹{subtotal}</p>
        </div>
      </div>
      <button className="mt-6 w-full bg-green-700 py-2 text-xl font-semibold rounded-md hover:bg-green-600">
        PAY NOW
      </button>
    </div>
  );
}
