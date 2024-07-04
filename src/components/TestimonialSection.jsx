
const TestimonialSection = () => {
    return (
        <div>
            <section className="my-8 ">
                <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-4xl font-semibold leading-none text-center">What our users are saying about us</h1>
                </div>
                <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                    <div className="flex flex-col items-center mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 text-gray-700 dark:text-gray-300">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">I recently used your travel platform to plan my trip to Southeast Asia, and I couldn't be happier with the experience. The website's user-friendly interface made it easy for me to explore various destinations and find valuable information about each place. Thanks to your comprehensive guides and recommendations, I was able to create an unforgettable itinerary that exceeded my expectations. I highly recommend your website to anyone looking for reliable travel resources and inspiration!</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 text-gray-700 dark:text-gray-300">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg bg-violet-400 dark:bg-violet-600"></span>
                        <p>Sarah Johnson</p>
                    </div>
                    <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 text-gray-700 dark:text-gray-300">
                                <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">I stumbled upon your website while planning my family's vacation to Southeast Asia, and it turned out to be a game-changer! The wealth of information provided, from destination highlights to travel tips, helped me make informed decisions and ensure a smooth travel experience for my loved ones. The personalized recommendations tailored to different interests and budgets were particularly helpful in crafting an itinerary that catered to everyone's preferences. Thank you for simplifying the trip planning process and making our holiday truly memorable!</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 text-gray-700 dark:text-gray-300">
                                <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg bg-violet-400 dark:bg-violet-600"></span>
                        <p>Alex Chen</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TestimonialSection;