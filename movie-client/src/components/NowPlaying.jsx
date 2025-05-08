import { Url } from "./Url"
import { replaceNowPlaying } from "../store/NowPlayingSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
export function NowPlaying(){
 const nowPlaying=useSelector(state=>state.playing)
 const [isloading,setIsLoading]=useState()
 const dispatch=useDispatch()

const fetchMovie=useFetch(setIsLoading,"Now Playing")
   
   useEffect(()=>{
   fetchMovie().then((res)=>{
    dispatch(replaceNowPlaying,res)
   })

   })
 

 console.log(nowPlaying)


    return <>
     <h1>Now playing</h1>
     
    </>
}