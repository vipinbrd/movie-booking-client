import { configureStore } from "@reduxjs/toolkit";
import { HeroSectionSlice } from "./HeroSectionSlice";
import { NowPlayingSlice } from "./NowPlayingSlice";


 export const MovieStore=configureStore({
    reducer:{
        hero:HeroSectionSlice.reducer,
        playing:NowPlayingSlice.reducer
    }
})