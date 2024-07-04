import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [spots, setSpots] = useState();
    const [loading, setLoading] = useState(true);
    const [change, setChange] = useState(true);

    useEffect(() => {
        const fetchSpots = async () => {
            await fetch(`https://b9a10-travelnest.vercel.app/tourist-spots-user/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setSpots(data);
                    setLoading(false);
                })
        }
        fetchSpots();

    }, [change])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            fetch(`https://b9a10-travelnest.vercel.app/tourist-spots/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    setChange(!change);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Tourist Spot has been deleted.",
                            icon: "success"
                        });
                        toast.success("Your Tourist Spot Successfully Deleted");
                    }
                })
        });
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center my-10">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        )

    }

    return (
        <div>
            <Helmet>
                <title>My List</title>
            </Helmet>
            <div className="mx-auto overflow-x-auto max-w-5xl">
                <table
                    className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900"
                >
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Tourists Spot Name</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                                Country Name
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Location</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                                Average Cost
                            </th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            spots.map(spot => (

                                <tr key={spot._id}>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                                        {spot.tourists_spot_name}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">{spot.country_Name}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">{spot.location}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">{spot.average_cost}</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <Link
                                            to={`/tourists-spot-update/${spot._id}`}
                                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Update
                                        </Link>
                                        <a
                                            onClick={() => handleDelete(spot._id)}
                                            className="inline-block rounded bg-red-600 px-4 py-2 ml-4 text-xs font-medium text-white hover:bg-red-700"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>

                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;