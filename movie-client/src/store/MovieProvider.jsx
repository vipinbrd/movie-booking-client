import { configureStore } from "@reduxjs/toolkit";
import { HeroSectionSlice } from "./HeroSectionSlice";


 export const MovieStore=configureStore({
    reducer:{
        hero:HeroSectionSlice.reducer
    }
})