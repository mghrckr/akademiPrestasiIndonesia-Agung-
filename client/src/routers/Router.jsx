import { createBrowserRouter } from "react-router-dom";

import UserHome from "../views/UserHome"
import Layout from "../components/Layout";

const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <UserHome />
            }
        ]
    }
]);

export default Router
