import React, { useState } from 'react'
import InfiniteSlider from './InfiniteSlider'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/about/${searchTerm}`);
  };
  return (
    <>
    <InfiniteSlider />
    <SearchBar />
    </>
  )
}

export default LandingPage