import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
        <div className='bg-secondary p-3'>
        <h3 className='header'>Ecommerce App</h3>
        <div className='row justify-content-center pt-2 pb-1'> 
        <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex'>
        <button className='btn btn-success me-4' onClick={()=>navigate('/')}>
        Home
        </button>
        <input className='form-control' type='search' placeholder='search...' />
        <button className='btn btn-success ms-3' onClick={()=>navigate('cart')}>
        Cart
        </button>
        </div>
        </div>
        </div>
  )
}

export default Header