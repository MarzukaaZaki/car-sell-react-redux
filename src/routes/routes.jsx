import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Cars from "../pages/Cars/Cars";

const router = createBrowserRouter([
    {
        path:'/page/:pagenumber',
        element: <Root/>,
        children:[
            {
                path:'/page/:pagenumber',
                element: <Cars/>
            }
        ]
    }
])


export default router;