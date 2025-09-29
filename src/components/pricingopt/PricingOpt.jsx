

import React, { use } from 'react';
import PricingCard from '../pricingcard/PricingCard';
import DaisyPricing from '../daisypricing/DaisyPricing';

const PricingOpt = ({pricingPromise}) => {
   
    const data =use(pricingPromise)
    console.log(data)

    return (
        <div className='m-6'>
            <h1 className='text-2xl'>Get Our Membership</h1>
            <div className='grid grid-cols-3 gap-3 '>
                {
                    data.map(card=><DaisyPricing 
                        key={card.id} card={card}></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOpt;