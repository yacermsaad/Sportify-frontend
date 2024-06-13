import React from 'react';

const BlogSection = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                <div role="main" className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">This Week Blogs</h1>
                    <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
                </div>
                <div className="lg:flex items-stretch md:mt-12 mt-8">
                    <div className="lg:w-1/2">
                        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                            <div className="sm:w-1/2 relative">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold text-white">The Decorated Ways</h2>
                                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                        <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <svg className="fill-current text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <img src="https://img.freepik.com/photos-premium/saut-remise-forme-coureur-femme-noire-piste-course-lors-seance-entrainement-cardio-exercice-sportif-ete-course-pied-sprinteuse-africaine-bonne-sante-mission-pour-objectifs-dans-stade_590464-112050.jpg" className="w-full" alt="chair" />
                            </div>
                            <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold text-white">The Decorated Ways</h2>
                                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                        <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <svg className="fill-current text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <img src="https://img.freepik.com/photos-premium/saut-remise-forme-coureur-femme-noire-piste-course-lors-seance-entrainement-cardio-exercice-sportif-ete-course-pied-sprinteuse-africaine-bonne-sante-mission-pour-objectifs-dans-stade_590464-112050.jpg" className="w-full" alt="wall design" />
                            </div>
                        </div>
                        <div className="relative">
                            <div>
                                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                                    <h2 className="text-xl font-semibold text-white">The Decorated Ways</h2>
                                    <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                    <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                        <svg className="fill-current text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <img src="https://img.freepik.com/photos-premium/saut-remise-forme-coureur-femme-noire-piste-course-lors-seance-entrainement-cardio-exercice-sportif-ete-course-pied-sprinteuse-africaine-bonne-sante-mission-pour-objectifs-dans-stade_590464-112050.jpg" alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block" />
                            <img src="https://img.freepik.com/photos-premium/saut-remise-forme-coureur-femme-noire-piste-course-lors-seance-entrainement-cardio-exercice-sportif-ete-course-pied-sprinteuse-africaine-bonne-sante-mission-pour-objectifs-dans-stade_590464-112050.jpg" alt="sitting place" className="w-full mt-4 sm:hidden" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                        <div className="relative">
                            <div>
                                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                                    <h2 className="text-xl font-semibold text-white">The Decorated Ways</h2>
                                    <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                    <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                        <svg className="fill-current text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <img src="https://thumbs.dreamstime.com/b/portraits-d-athl%C3%A8te-et-dressez-vous-une-femme-de-fitness-avant-faire-l-exercice-la-course-sur-piste-sport-%C3%A0-ext%C3%A9rieur-fort-260941356.jpg" alt="sitting place" className="w-full sm:block hidden" />
                            <img src="https://thumbs.dreamstime.com/b/portraits-d-athl%C3%A8te-et-dressez-vous-une-femme-de-fitness-avant-faire-l-exercice-la-course-sur-piste-sport-%C3%A0-ext%C3%A9rieur-fort-260941356.jpg" alt="sitting place" className="w-full sm:hidden" />
                        </div>
                        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                            <div className="relative w-full">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold text-white">The Decorated Ways</h2>
                                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                        <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <svg className="fill-current text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <img src="https://image.made-in-china.com/202f0j00hBtUmCInHacG/Men-s-Sports-Quick-Drying-Tight-Fitting-Training-Suit-Running-Fitness-Clothing-Men-Yoga-Clothing-Set.webp" className="w-full" alt="chair" />
                            </div>
                            <div className="relative w-full sm:mt-0 mt-4">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold text-white">The Decorated Ways</h2>
                                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                                        <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <svg className="fill-current text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <img src="https://static.runnea.com/images/202402/es-uno-de-los-mayores-inconvenientes-al-correr-segu769n-un-estudio-realizado-por-adidas-XxXx90.jpg?0" className="w-full" alt="wall design" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogSection;
