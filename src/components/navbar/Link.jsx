import React from 'react';

const Link = ({nl}) => {
    return (
        <div className='hover:bg-amber-400'>
            <a href="">{nl.name}</a>
        </div>
    );
};

export default Link;