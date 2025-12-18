import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Redux/ReduxSlicer'
//creating store 
export const store = configureStore({
    reducer:{
      counterRed : counterReducer  
    }
})