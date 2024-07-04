import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const TouristsSpotDetails = () => {
    const spot = useLoaderData()
    const { imageURL, tourists_spot_name, country_Name, location, description, average_cost, seasonality, travel_time, totalVisitorsPerYear } = spot;
    return (
        <div>
            <Helmet>
                <title>{tourists_spot_name}</title>
            </Helmet>
            <div className="flow-root rounded-lg border mx-4 border-gray-100 py-3 shadow-sm dark:border-gray-700">
                <dl className="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-700">

                    <img src={imageURL} alt="" className="h-56 w-full rounded-md object-cover mb-4" />

                </dl>
                <dl className="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-700">
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800"
                    >
                        <dt className="font-medium text-gray-900 dark:text-white">Tourists Spot Name </dt>
                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{tourists_spot_name}</dd>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800"
                    >
                        <dt className="font-medium text-gray-900 dark:text-white">Country Name</dt>
                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{country_Name}</dd>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800"
                    >
                        <dt className="font-medium text-gray-900 dark:text-white">Location</dt>
                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{location}</dd>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800"
                    >
                        <dt className="font-medium text-gray-900 dark:text-white">Average Cost</dt>
                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">${average_cost}</dd>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800"
                    >
                        <dt className="font-medium text-gray-900 dark:text-white">Seasonality</dt>
                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{seasonality}</dd>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800"
                    >
                        <dt className="font-medium text-gray-900 dark:text-white">Travel Time</dt>
                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{travel_time}</dd>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800"
                    >
                        <dt className="font-medium text-gray-900 dark:text-white">Total Visitors Per Year</dt>
                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{totalVisitorsPerYear}</dd>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800"
                    >
                        <dt className="font-medium text-gray-900 dark:text-white">Short Description</dt>
                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                            {description}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default TouristsSpotDetails;