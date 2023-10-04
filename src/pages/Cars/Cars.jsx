import React, { useEffect, useState } from 'react';
import CarInfo from '../../components/CarInfo/CarInfo';
import Pagination from '../../components/Pagination/Pagination';
import { useParams } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';

const Cars = () => {
    const [carData, setCarData] = useState([]);

    // Get the dynamic page number from route url
    const { page } = useParams();

    useEffect(()=>{
        fetch('/data/cars.json')
        .then( res => res.json())
        .then( data => setCarData(data) )

    }, [])
    console.log(carData);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(6);


    // Setting the index range for records to be displayed in the current page
    const indexOfLastRecord = currentPage * recordsPerPage; 
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    // Rrcords to be shown on the current page
    const currentRecords = carData.slice(indexOfFirstRecord, indexOfLastRecord);
    
    // Pages to be shown
    const noOfPages = 10;
    return (
        <div>
            <SearchBar carData={carData}/>
            <CarInfo carData={currentRecords} />
            <Pagination noOfPages={noOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>
        </div>
    );
};

export default Cars;