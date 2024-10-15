import React, { useEffect, useState } from 'react'
import axios from 'axios';

function TestApi() {

    const [message,setMessage] = useState('');
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/test/')
          .then((response) => setMessage(response.data.message))
          .catch((error) => console.log(error));
      }, []);
  return (
    <div>
      <h1 className='text-4xl font-bold'>Message from Djanog:</h1>
      <p className='text-2xl font-semibold'>{message}</p>
    </div>
  )
}

export default TestApi
