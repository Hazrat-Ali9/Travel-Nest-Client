import {
    createBrowserRouter,
} from "react-router-dom"
import MainLayout from "../mainLayout/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TouristsSpotDetails from "../pages/TouristsSpotDetails";
import UpdateTouristsSpot from "../pages/UpdateTouristsSpot";
import CountryTouristsSpots from "../pages/CountryTouristsSpots";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://b9a10-travelnest.vercel.app/tourist-spots/'),
            },
            {
                path: "all-tourists-spot",
                element: <AllTouristsSpot></AllTouristsSpot>,
                loader: () => fetch('https://b9a10-travelnest.vercel.app/tourist-spots/'),
            },
            {
                path: "tourists-spot-details/:id",
                element: <PrivateRoute> <TouristsSpotDetails></TouristsSpotDetails> </PrivateRoute>,
                loader: ({params}) => fetch(`https://b9a10-travelnest.vercel.app/tourist-spots/${params.id}`),
            },
            {
                path: "tourists-spot-country/:country_Name",
                element: <PrivateRoute> <CountryTouristsSpots></CountryTouristsSpots> </PrivateRoute>,
                loader: ({params}) => fetch(`https://b9a10-travelnest.vercel.app/tourist-spots-country/${params.country_Name}`),
            },
            {
                path: "add-tourists-spot",
                element: <PrivateRoute> <AddTouristsSpot></AddTouristsSpot></PrivateRoute>,
            },
            {
                path: "my-list",
                element: <PrivateRoute> <MyList></MyList></PrivateRoute>,
            },
            {
                path: "tourists-spot-update/:id",
                element: <PrivateRoute> <UpdateTouristsSpot></UpdateTouristsSpot> </PrivateRoute>,
                loader: ({params}) => fetch(`https://b9a10-travelnest.vercel.app/tourist-spots/${params.id}`)
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
        ],
    },
]);