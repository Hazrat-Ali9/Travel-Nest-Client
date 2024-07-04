import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

const CountryTouristsSpotCard = ({ spot }) => {
    const { _id, imageURL, tourists_spot_name, country_Name, location, description, average_cost, seasonality } = spot;
    return (
        <div>
            <article
                className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25"
            >
                <img
                    alt=""
                    src={imageURL}
                    className="h-56 w-full object-cover"
                />

                <div className="p-4 sm:p-6">
                    <p>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            {country_Name} - {tourists_spot_name}
                        </h3>
                    </p>

                    <p>
                        <h3 className="mt-2 text-base font-medium text-gray-700 dark:text-white">
                            {location}
                        </h3>
                    </p>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                        {description}
                    </p>

                    <p>
                        <h3 className="mt-2 text-base font-medium text-gray-700 dark:text-white">
                            ${average_cost}
                        </h3>
                    </p>

                    <p>
                        <h3 className="mt-2 text-base font-medium text-gray-700 dark:text-white">
                        Seasonality: {seasonality}
                        </h3>
                    </p>

                    <Link to={`/tourists-spot-details/${_id}`}
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                        Find out more

                        <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                            &rarr;
                        </span>
                    </Link>
                </div>
            </article>
        </div>
    );
};

export default CountryTouristsSpotCard;


CountryTouristsSpotCard.propTypes = {
    spot: PropTypes.object,
}