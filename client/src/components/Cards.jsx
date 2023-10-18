import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from '../store/actionCreators';

export default function Cards() {
    let navigate = useNavigate()
    const loading = useSelector((state) => state.items.loading);
    const items = useSelector((state) => state.items.items);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);



    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    return (
        <>
            {loading && (
                <div className="flex items-center justify-center mt-24">
                    <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" width="200" height="100" alt="Five Monkeys" id="logo" data-height-percentage="100" data-actual-width="600" data-actual-height="237"></img>

                </div>
            )}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <Slider {...sliderSettings}>
                    <div>
                        <img className="w-full h-auto" src="https://fthmb.tqn.com/wC2k0OqA4vWE0lURpzEacJo5OlE=/768x0/filters:no_upscale()/170108504-589d50105f9b58819cd2d1bf.jpg" alt="Carousel Image 1" />
                    </div>
                    <div>
                        <img className="w-full h-auto" src="https://th.bing.com/th/id/OIP.DfBhVi57hrXQC5CG0lSpvwHaFv?pid=ImgDet&w=800&h=620&rs=1" alt="Carousel Image 2" />
                    </div>
                    <div>
                        <img className="w-full h-auto" src="https://th.bing.com/th/id/OIP._oTEsABpae1O5aVryQ_oFgAAAA?pid=ImgDet&rs=1" alt="Carousel Image 3" />
                    </div>
                </Slider>
                <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                    <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                        <span className="inline-block mb-1 sm:mb-4">
                            Fresh Colors
                            <br className="hidden md:block" />
                            make Happiness
                        </span>
                        <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                    </h2>
                    <p className="text-gray-700 lg:text-sm lg:max-w-md">
                        Colors serve as a filter for how we perceive a myriad of things, from the world around us to the people in it. Colors can remind you of happy memories associated with holidays, nature, and trips.
                    </p>
                </div>
                <a href="/" aria-label="View Item">
                    <button
                        type="button" className="mt-2 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Muat Ulang
                    </button>
                </a>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    {items.map((item, index) => (
                        <a  key={item.id} aria-label="View Item">
                            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                <img className="object-cover w-full h-56 md:h-64 xl:h-80" src={item.url} alt="" />
                                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                    <p className="mb-4 text-lg font-bold text-white">{item.title}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
