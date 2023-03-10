import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
  const dispatch = useDispatch();

  return (
    <button
    className='btn clear-btn'
    onClick={() => {
      dispatch(openModal());
    }}
  >
    clear cart
  </button>
  );
};

export default CartContainer;