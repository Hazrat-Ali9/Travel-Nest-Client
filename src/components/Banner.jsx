import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (
        <>

            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Explore <span>
                                <Typewriter
                                    words={['Amazing', 'Breathtaking', 'Unforgettable']}
                                    loop
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={50}
                                    deleteSpeed={20}
                                    delaySpeed={1000}
                                />
                            </span> <br />
                            <span className="sm:block"> Tourist Spots </span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                            Discover Hidden Gems and Local Favorites!<br />
                            Embark on Adventures Off the Beaten Path!
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="#"
                            >
                                Get Started
                            </a>

                            <a
                                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                href="#"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
// Banner
export default Banner;