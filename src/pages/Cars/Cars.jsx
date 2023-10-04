import React, { useEffect, useState } from 'react';
import CarInfo from '../../components/CarInfo/CarInfo';

const Cars = () => {
    const [carData, setCarData] = useState([]);

    useEffect(()=>{
        fetch('/data/cars.json')
        .then( res => res.json())
        .then( data => setCarData(data) )

    }, [])
    console.log(carData);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);


    // Setting the index range for records to be displayed in the current page
    const indexOfLastRecord = currentPage * recordsPerPage; 
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    // Rrcords to be shown on the current page
    const currentRecords = carData.slice(indexOfFirstRecord, indexOfLastRecord);
    
    // Pages to be shown
    const noOfPages = 10;
    return (
        <div>
            <CarInfo carData={carData} />
        </div>
    );
};

export default Cars;