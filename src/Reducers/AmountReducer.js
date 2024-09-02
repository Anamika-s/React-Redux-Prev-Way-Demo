// import { act } from "react";
const init = 100;

const amountReducer =(state = init,action)=>{
    console.log(action.type)
    if(action.type==='withdraw')
        return state - action.payload;
    else if(action.type==='deposit')
        return state + action.payload;
    else 
    return state;
}

export default amountReducer;