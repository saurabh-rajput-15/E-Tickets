import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
 
const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (searchTerm.trim()) {
        navigate(`/about/${searchTerm}`);
      }
    };

  return (
    <>
    <div className="absolute inset-0 flex items-center justify-center z-20">
    <form   onSubmit={handleSearch} className="form-input w-4/5 max-w-lg">
    <input 
      type="text" 
      placeholder="Search for museum,Forts, Zoo, and more..."
      value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
      className="w-4/5 max-w-lg px-4 py-3 text-lg border-none rounded-lg shadow-lg outline-none bg-zinc-300"
      />
      </form>
  </div>
  
      </>
  )
}

export default SearchBar