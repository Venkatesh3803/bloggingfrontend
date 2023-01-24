
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"

const Hero = () => {

    const user = useSelector((state) => state.user.user)
    return (
        <div className="my-10 relative overflow-hidden">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mr-5 rounded-2xl overflow-hidden">
                <img className="h-56 w-full object-fill sm:h-72 md:h-96 lg:h-full lg:w-full" src={"https://images.unsplash.com/photo-1665686304129-a6e2d16923e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} alt="" />
            </div>
            <div className="mx-auto max-w-7xl ">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
                    <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Start Your Journey As </span>
                                <span className="block text-indigo-600 xl:inline"> Blogger </span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                {user ?
                                    <Link to={`/dashboard`}>
                                        <div className="rounded-md shadow">
                                            <p className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">Start Now</p>
                                        </div>
                                    </Link> :
                                    <Link to={"/login"}>
                                        <div className="rounded-md shadow">
                                            <p className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">Start Now</p>
                                        </div>
                                    </Link>
                                }
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>


        </div>

    )
}

export default Hero
