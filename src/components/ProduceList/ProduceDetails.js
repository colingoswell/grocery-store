import {AddToCart} from '../../store/cart'
import {useDispatch} from 'react-redux'
import { useState,useEffect } from 'react';

function ProduceDetails({ produce }) {

  // const [count,setCout] = useState(1)
  const cartItem = {};

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(AddToCart(produce.id))
  },[dispatch])



  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={()=>dispatch(AddToCart(produce.id))}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;