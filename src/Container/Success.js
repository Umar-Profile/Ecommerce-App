import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate=useNavigate();
    const [count,setCount]=useState(15);
    useEffect(()=>{
        setInterval(()=>
        setCount((count)=>count-1),1000);
        setTimeout(()=>navigate("/"),15000);
    }, [navigate]);
  return (
    <h5 className='mt-5'>Your order have been placed succesfully. You will be redirected in {" "} {count} seconds</h5>
  );
}

export default Success