import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { AppLayout } from "../components/AppLayout";
import { Error } from "../components/Error";
import { Layout } from "../components/Layout";

 export function MainRouter(){

    const router=createBrowserRouter([
        {
         path:"/",
         element:<AppLayout/>,
         errorElement:<Error/>,
         children:[{
            index:true,
        
            element:<Layout/>
         }
        ]

        }
    ])


    return <RouterProvider router={router}></RouterProvider>

}