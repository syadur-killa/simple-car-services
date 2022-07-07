import React from 'react';
import notFound from "../../../images/404sn.gif"

const NotFound = () => {
    return (
        <div className='my-10'>
          <img className='img-fluid' src={notFound} alt="notFound"></img>  
        </div>
    );
};

export default NotFound;