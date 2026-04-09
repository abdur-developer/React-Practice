import React from 'react';
import Data from '../data/Data';

const Country = (props) => {
    // console.log(props);
    return (
        <Data {...props}/>
    );
};

export default Country;