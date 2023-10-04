import React, { useEffect, useState } from 'react';
import CarCard from '../CarCard/CarCard';

const CarInfo = ({carData}) => {
    
    // console.log(carData);
    return (

        <div className='grid grid-cols-3 gap-6'>
            {
                carData.map(car => <CarCard car={car} key={car._id}>{car.car_name}</CarCard>)
            }
        </div>
    );
};

export default CarInfo;