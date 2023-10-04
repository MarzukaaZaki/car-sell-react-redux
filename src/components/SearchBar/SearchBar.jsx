import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import CarCard from '../CarCard/CarCard';

const SearchBar = ({ carData }) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filteredCars = carData.filter((car) =>
      car.car_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredCars);
  }, [searchTerm, carData]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='mb-10 bg-[#f0f4fb] px-6 py-4 shadow-sm'>
      <div className='flex'>
        <input
          type='text'
          placeholder='Search by car name...'
          value={searchTerm}
          onChange={handleSearchInputChange}
          className='rounded-full px-6 py-3 w-1/3 shadow-sm' />
        <BsSearch className='text-[#bdc3c6] font-bold mt-3 -ms-10' />
      </div>

      <ul>
        <div className='mt-3 grid grid-cols-2'>
          {searchResults.map((car) => (
            
            <CarCard key={car._id} car={car} ></CarCard>
          ))}
        </div>

      </ul>
    </div>
  );
};

export default SearchBar;