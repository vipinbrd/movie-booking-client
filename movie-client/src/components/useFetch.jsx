import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Url } from "./Url";

export function useFetch(category){

  

   
   async function fetchMovie(){
   const req=await fetch(`${Url}/api/movies/${encodedName}`)
   const res=await req.json()
   setIsLoading(false)
   return res;

   }
   return fetchMovie;







}