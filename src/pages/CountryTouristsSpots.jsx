import { useLoaderData, useParams } from "react-router-dom";
import CountryTouristsSpotCard from "../components/CountryTouristsSpotCard";
import { Helmet } from "react-helmet";

const CountryTouristsSpots = () => {
    const touristSpots = useLoaderData()
    const params = useParams()
    return (
        <>
            <Helmet>
                <title>{params.country_Name} - Tourists Spots</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5">

                {
                    touristSpots.map(spot => (
                        <CountryTouristsSpotCard
                            key={spot._id}
                            spot={spot}
                        >
                        </CountryTouristsSpotCard>
                    ))
                }
            </div>
        </>

    );
};

export default CountryTouristsSpots;