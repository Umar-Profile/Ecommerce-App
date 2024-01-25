import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductListItem from '../Components/ProductListItem'
import { modifyItem, removeItem } from '../Redux/Reducer/Cart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const list = useSelector((state)=>state.cart.list);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const incrementItem=(item)=>{
      dispatch(modifyItem({...item, count: item.count +1}));
    }
    const decrementItem=(item)=>{
      if(item.count===1){
        dispatch(removeItem(item))
      }
      else
      dispatch(modifyItem({...item, count: item.count -1}));
    }
    const removeItemCart=(item)=>{
      dispatch(removeItem(item))
    }
  return (
    <div>{list.length>0?(<div>{list.map((item) => (<ProductListItem {...item} key={item.id} incrementItem={()=>incrementItem(item)} decrementItem={()=>decrementItem(item)} removeItem={()=>removeItemCart(item)}/>))}
    <button className='btn btn-success' onClick={()=>navigate('/checkout')}>Go to Checkout</button>
    </div>):(<h3>No items in a cart</h3> )} </div>
  );
}
export default Cart