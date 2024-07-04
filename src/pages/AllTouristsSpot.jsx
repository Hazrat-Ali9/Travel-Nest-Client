import { useLoaderData } from "react-router-dom";
import TouristsSpotCard from "../components/TouristsSpotCard";
import { useState } from "react";
import { Helmet } from "react-helmet";

const AllTouristsSpot = () => {
    const touristSpots = useLoaderData();
    const [sortedTouristSpots, SetSortedTouristSpots] = useState(touristSpots);

    const handleSort = (option) => {
        if (option === 1) {
            fetch(`https://b9a10-travelnest.vercel.app/tourist-spots-sort/`)
                .then(res => res.json())
                .then(data => {
                    SetSortedTouristSpots(data);
                })
        }
    }

    return (
        <div>
            <Helmet>
                <title>All Tourists Spots</title>
            </Helmet>
            <div className="flex justify-center items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Sort</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSort(1)}><a>Average Cost</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    sortedTouristSpots.map(spot => (
                        <TouristsSpotCard
                            key={spot._id}
                            spot={spot}
                        ></TouristsSpotCard>
                    ))
                }
            </div>

        </div>
    );
};

export default AllTouristsSpot;