import React from 'react';
import Feature from '../feature/Feature';

const DaisyPricing = ({card}) => {
    const {name,price,description,features} =card;
    return (
        <div>
            <div className="card  bg-base-100 shadow-sm">
  <div className="card-body">
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{name}</h2>
      <span className="text-xl">{price}</span>
    </div>
    <p>{description}</p>
    <ul className="mt-6 flex-1 flex-col gap-2 text-xs">
      
       
      
      {
                features.map((feature,index)=>
                    <li key={index}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">{feature}</span>
      </li>
                )
            }

    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block">Subscribe</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DaisyPricing;