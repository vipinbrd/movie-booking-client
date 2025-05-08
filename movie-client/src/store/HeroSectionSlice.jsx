import { createSlice } from "@reduxjs/toolkit";

export const HeroSectionSlice=createSlice({

    name:"hero",
    initialState:[],
    reducers:{
       replaceHeroSection(state,payload){
        return payload.payload;
       } 
    }
})
export const {replaceHeroSection}=HeroSectionSlice.actions 