

import React from 'react';
import Feature from '../feature/Feature';

const PricingCard = ({card}) => {
    const {name,price,description,features} =card;
    return (
        <div className='border p-3 rounded-lg space-y-3 bg-sky-100 '>
            <div>
                <h1 className="text-5xl">{name}</h1>
                <p>{price}</p>
            </div>
            <div className='flex-1'>
                <p>{description}</p>
                {
                features.map(feature=><Feature feature={feature} ></Feature>)
            }
            </div>
            
            <button className='bg-red-300 w-full'>Subscribe</button>
        </div>
    );
};

export default PricingCard;