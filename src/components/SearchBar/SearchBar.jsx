import React, { useEffect, useState } from 'react';

const SearchBar = ({carData}) => {

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
        <div className='mb-10'>
            <input 
            type='text' 
            placeholder='Search by car name...'
            value={searchTerm}
            onChange={handleSearchInputChange}/>
            <ul>
        {searchResults.map((car) => (
          <li key={car.id}>{car.car_name}</li>
        ))}
      </ul>
        </div>
    );
};

export default SearchBar;