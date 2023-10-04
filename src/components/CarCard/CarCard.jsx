import React from 'react';
import { BsPeople, BsSpeedometer } from 'react-icons/bs'
import { BiGasPump } from 'react-icons/bi'
import { PiSteeringWheelDuotone } from 'react-icons/pi'
import { AiOutlineHeart } from 'react-icons/ai'

const CarCard = ({ car }) => {
    const { car_name, model_year, transmission_type, fuel_type, seating_capacity, lease_price, fuel_efficiency, car_image } = car;
    return (
        <div
            class="mx-5 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-5">
            <div
                class="relative overflow-hidden bg-cover bg-no-repeat p-3"
                data-te-ripple-init
                data-te-ripple-color="light">
                <img
                    class="rounded-t-lg"
                    src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
                    alt="" />
                <a href="#!">
                    <div
                        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
            </div>
            <div class="p-6">
                <div className='flex justify-between mb-5'>
                    <h5
                        class="mb-2 text-xl font-medium leading-tight">
                        {car_name}
                    </h5>
                    <h6 className='px-4 py-2 text-xs border-dashed border-2 border-orange-500  rounded-full'>{model_year}</h6>
                </div>

                <div className='grid grid-cols-2 gap-3 mb-5'>
                    <div className='flex'>
                        <BsPeople className='text-blue-400 mt-1 me-3' />
                        <p>{seating_capacity} People</p>
                    </div>
                    <div className='flex'>
                        <BiGasPump className='text-blue-400 mt-1 me-3' />
                        <p>{fuel_type}</p>
                    </div>
                    <div className='flex'>
                        <BsSpeedometer className='text-blue-400 mt-1 me-3' />
                        <p>{fuel_efficiency}</p>
                    </div>
                    <div className='flex'>
                        <PiSteeringWheelDuotone className='text-blue-400 mt-1 me-3' />
                        <p>{transmission_type}</p>
                    </div>
                </div>
                <hr className='shadow-sm mb-5' />
                <div className='flex justify-between'>
                    <p className='text-xl'>{lease_price}</p>
                    <div>
                        <button className='bg-blue-100 p-2 rounded-lg me-4'>
                            <AiOutlineHeart className='text-blue-400' />
                        </button>
                        <button
                            type="button"
                            class="inline-block rounded bg-blue-400 text-white px-6 pb-2 pt-2.5 text-sm rounded-lg"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Rent Now
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CarCard;