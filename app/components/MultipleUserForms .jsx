import React, { useState } from 'react';

const UserForm = ({ index, totalUsers, handleInputChange }) => {
  const [name, setName] = useState('');
  const [aadhaarFile, setAadhaarFile] = useState(null);

  const handleFileUpload = (event) => {
    setAadhaarFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form submission for the individual user
    handleInputChange(index, { name, aadhaarFile });
  };

  return (
    <div className="p-4 mb-4 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">User {index + 1}</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor={`name-${index}`}>
          Name
        </label>
        <input
          id={`name-${index}`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter your name"
          required
        />
      </div>

      {index === 0 && (
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor={`mobile-${index}`}>
            Mobile No
          </label>
          <input
            id={`mobile-${index}`}
            type="tel"
            onChange={(e) => handleInputChange(index, { mobile: e.target.value })}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your mobile number"
            required
          />
        </div>
      )}

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor={`aadhaar-${index}`}>
          Aadhaar Upload
        </label>
        <input
          id={`aadhaar-${index}`}
          type="file"
          onChange={(e) => setAadhaarFile(e.target.files[0])}
          className="w-full px-3 py-2 border rounded-md"
          accept=".pdf,.jpg,.jpeg,.png"
          required
        />
      </div>
    </div>
  );
};

const MultipleUserForms = () => {
  const [users, setUsers] = useState([{ name: '', mobile: '', aadhaarFile: null }]);

  const handleInputChange = (index, data) => {
    const updatedUsers = [...users];
    updatedUsers[index] = { ...updatedUsers[index], ...data };
    setUsers(updatedUsers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('All Users Data:', users);
    // Process submission for all users here
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-8">
      {[0, 1, 2, 3].map((index) => (
        <UserForm 
          key={index} 
          index={index} 
          totalUsers={users.length} 
          handleInputChange={handleInputChange} 
        />
      ))}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Submit All
      </button>
    </form>
  );
};

export default MultipleUserForms;
