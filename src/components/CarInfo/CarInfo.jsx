import React, { useEffect, useState } from 'react';

const CarInfo = ({carData}) => {
 
    console.log(carData);
    return (

        <div className='grid grid-cols-3 gap-6'>
            {
                carData.map(car => <p car={car} key={car._id}>{car.car_name}</p>)
            }
        </div>
    );
};

export default CarInfo;