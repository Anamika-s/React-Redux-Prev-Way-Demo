import React from 'react'
import { useSelector } from 'react-redux'
import { actionCreators } from '../Actions/Index';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
export const Shop = () => {
    const amount = useSelector(state=>state.amount)
const dispatch = useDispatch();

const {WithdrawMoney, DepositMoney} = bindActionCreators(
    actionCreators,dispatch);

  return (
    <div>Shop Component

        <h1> {amount} </h1>

        {/* <button onClick={()=>(dispatch(actionCreators.WithdrawMoney(100)))}>  Withdraw </button>
     
        <button onClick={()=>(dispatch(actionCreators.DepositMoney(100)))}>  Deposit </button> */}
    
    <button onClick={()=>WithdrawMoney(100)}>  Withdraw </button>
     
     <button onClick={()=>DepositMoney(100)}>  Deposit </button>
 
    </div>
  )
}
