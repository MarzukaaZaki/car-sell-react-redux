import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Cars from "../pages/Cars/Cars";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children:[
            {
                path:'/',
                element: <Cars/>
            }
        ]
    }
])


export default router;