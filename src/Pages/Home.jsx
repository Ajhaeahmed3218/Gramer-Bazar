import { useState } from "react";
import Banner from "../Components/Banner";


const Home = () => {
    // State for managing form inputs
    const [searchText, setSearchText] = useState('');
    const [brand, setBrand] = useState('');
    const [select2, setSelect2] = useState('');
    const [select3, setSelect3] = useState('');
    const [select4, setSelect4] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Log or process form data
        console.log({
            searchText,
            brand,
            select2,
            select3,
            select4
        });
    }

    return (
        <div className="bg-[#eeeeee]">

            <Banner />

            {/* Searching, Categorization and Sorting */}
            <section className="bg-[#eeeeee] my-4">
                <div className="container mx-auto lg:p-10 p-5 border-2 lg:mt-16">
                    <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-5 ">
                        {/* searchText  */}
                        <label className="input lg:w-[400px] input-bordered flex items-center gap-2">
                            <input
                                type="text"
                                className="grow"
                                placeholder="Search"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </label>

                        {/* brand input */}
                        <select
                            id="search"
                            className="bg-gray-50 lg:w-[400px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        >
                            <option value="" disabled>Choose a Band </option>
                            {/* <option value="">All Brand</option> */}
                            <option value="pran">Pran</option>
                            <option value="arong">Arong</option>
                            <option value="BDFoods">BDFoods</option>

                        </select>

                        {/* Category input */}
                        <select
                            id="select2"
                            className="bg-gray-50 lg:w-[400px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={select2}
                            onChange={(e) => setSelect2(e.target.value)}
                        >
                            <option value="" disabled>Choose a Category Name</option>
                            <option value="oil">Oil</option>
                            <option value="organic oil">Organic Oil</option>
                            <option value="honey">Honey</option>
                            <option value="masala">Masala</option>

                        </select>

                        {/* Price Range input */}
                        <select
                            id="select3"
                            className="bg-gray-50 lg:w-[400px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={select3}
                            onChange={(e) => setSelect3(e.target.value)}
                        >
                            <option value="" disabled>Price Range</option>
                            <option value="300">mex 300</option>
                            <option value="500">mex 500</option>
                            <option value="1000">mex 1000</option>
                            <option value="2500">mex 2500</option>
                        </select>

                        {/* Sort input */}
                        <select
                            id="select4"
                            className="bg-gray-50 lg:w-[400px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={select4}
                            onChange={(e) => setSelect4(e.target.value)}
                        >
                            <option value="" disabled>Sorting by</option>
                            <option value="US">Low to High</option>
                            <option value="CA">High to Low</option>

                        </select>
                        <button onClick={handleSubmit} className="lg:w-[400px] bg-[#fc6934] rounded-md">submit</button>
                    </form>
                </div>
            </section>


            <section className="grid lg:grid-cols-4 grid-cols-1 container mx-auto gap-4 ">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    {/* Cadr IMG */}
                    <div className="h-56 w-full">
                        <a href="#">
                            <img
                                className="mx-auto h-full dark:hidden"
                                src="oil-5-leter.jpg"
                                alt=""
                            />
                            <img
                                className="mx-auto hidden h-full dark:block"
                                src="oil-5-leter.jpg"
                                alt=""
                            />
                        </a>
                    </div>

                    <div className="pt-6">
                        <div className="mb-4 flex items-center justify-between gap-4">
                            {/* Brand Name */}
                            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                Arong
                            </span>

                            {/* Quick look and Add to favorites */}
                            <div className="flex items-center justify-end gap-1">
                                <button
                                    type="button"
                                    data-tooltip-target="tooltip-quick-look-2"
                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Quick look</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                        />
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="tooltip-quick-look-2"
                                    role="tooltip"
                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                    data-popper-placement="top"
                                >
                                    Quick look
                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                </div>

                                <button
                                    type="button"
                                    data-tooltip-target="tooltip-add-to-favorites-2"
                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Add to Favorites</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="tooltip-add-to-favorites-2"
                                    role="tooltip"
                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 lg:px-3 lg:py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                    data-popper-placement="top"
                                >
                                    Add to favorites
                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                </div>
                            </div>
                        </div>

                        {/* product name  */}
                        <a
                            href="#"
                            className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                        >
                            Local Maghi Sarisha Oil
                        </a>

                        {/* product description  */}
                        <p>
                            সয়াবিন তেল বাজারে আসার পর থেকে আমরা অনেকেই সরিষার তেলের উপকারিতা ভুলে গেছি। <a href="">seemore</a>
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                            <div className="flex items-center">
                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">5.0</span>
                        </div>

                        <div className="mt-4 mb-4 flex items-center justify-between">
                            <div>
                                <span className="text-xl font-bold text-gray-900 dark:text-white">
                                    $1099.00
                                </span>
                                <span className="text-sm line-through text-gray-500 dark:text-gray-400">
                                    $1229.00
                                </span>
                            </div>

                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                            >
                                <svg
                                    className="me-2 h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    {/* Cadr IMG */}
                    <div className="h-56 w-full">
                        <a href="#">
                            <img
                                className="mx-auto h-full dark:hidden"
                                src="ghee-1kg.jpg"
                                alt=""
                            />
                            <img
                                className="mx-auto hidden h-full dark:block"
                                src="ghee-1kg.jpg"
                                alt=""
                            />
                        </a>
                    </div>

                    <div className="pt-6">
                        <div className="mb-4 flex items-center justify-between gap-4">
                            {/* Brand Name */}
                            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                Ghorer Bazar
                            </span>

                            {/* Quick look and Add to favorites */}
                            <div className="flex items-center justify-end gap-1">
                                <button
                                    type="button"
                                    data-tooltip-target="tooltip-quick-look-2"
                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Quick look</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                        />
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="tooltip-quick-look-2"
                                    role="tooltip"
                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                    data-popper-placement="top"
                                >
                                    Quick look
                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                </div>

                                <button
                                    type="button"
                                    data-tooltip-target="tooltip-add-to-favorites-2"
                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Add to Favorites</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="tooltip-add-to-favorites-2"
                                    role="tooltip"
                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 lg:px-3 lg:py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                    data-popper-placement="top"
                                >
                                    Add to favorites
                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                </div>
                            </div>
                        </div>

                        {/* product name  */}
                        <a
                            href="#"
                            className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                        >
                            Gawa Ghee (১ কেজি)
                        </a>

                        {/* product description  */}
                        <p>
                        খাঁটি গাওয়া ঘি দুধের একটি প্রক্রিয়াজাত খাদ্য উপাদান। হাজার বছর আগে বাঙালির খাবারে ঘি-এর উৎপত্তি।  <a href="">seemore</a>
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                            <div className="flex items-center">
                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">5.0</span>
                        </div>

                        <div className="mt-4 mb-4 flex items-center justify-between">
                            <div>
                                <span className="text-xl font-bold text-gray-900 dark:text-white">
                                    Tk 1,800.00
                                </span>
                                <span className="text-sm line-through text-gray-500 dark:text-gray-400">
                                    Tk 2,000.00
                                </span>
                            </div>

                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                            >
                                <svg
                                    className="me-2 h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    {/* Cadr IMG */}
                    <div className="h-56 w-full">
                        <a href="#">
                            <img
                                className="mx-auto h-full dark:hidden"
                                src="oil-5-leter.jpg"
                                alt=""
                            />
                            <img
                                className="mx-auto hidden h-full dark:block"
                                src="oil-5-leter.jpg"
                                alt=""
                            />
                        </a>
                    </div>

                    <div className="pt-6">
                        <div className="mb-4 flex items-center justify-between gap-4">
                            {/* Brand Name */}
                            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                Arong
                            </span>

                            {/* Quick look and Add to favorites */}
                            <div className="flex items-center justify-end gap-1">
                                <button
                                    type="button"
                                    data-tooltip-target="tooltip-quick-look-2"
                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Quick look</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                        />
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="tooltip-quick-look-2"
                                    role="tooltip"
                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                    data-popper-placement="top"
                                >
                                    Quick look
                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                </div>

                                <button
                                    type="button"
                                    data-tooltip-target="tooltip-add-to-favorites-2"
                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Add to Favorites</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="tooltip-add-to-favorites-2"
                                    role="tooltip"
                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 lg:px-3 lg:py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                    data-popper-placement="top"
                                >
                                    Add to favorites
                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                </div>
                            </div>
                        </div>

                        {/* product name  */}
                        <a
                            href="#"
                            className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                        >
                            Local Maghi Sarisha Oil
                        </a>

                        {/* product description  */}
                        <p>
                            সয়াবিন তেল বাজারে আসার পর থেকে আমরা অনেকেই সরিষার তেলের উপকারিতা ভুলে গেছি। <a href="">seemore</a>
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                            <div className="flex items-center">
                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">5.0</span>
                        </div>

                        <div className="mt-4 mb-4 flex items-center justify-between">
                            <div>
                                <span className="text-xl font-bold text-gray-900 dark:text-white">
                                    $1099.00
                                </span>
                                <span className="text-sm line-through text-gray-500 dark:text-gray-400">
                                    $1229.00
                                </span>
                            </div>

                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                            >
                                <svg
                                    className="me-2 h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    {/* Cadr IMG */}
                    <div className="h-56 w-full">
                        <a href="#">
                            <img
                                className="mx-auto h-full dark:hidden"
                                src="oil-5-leter.jpg"
                                alt=""
                            />
                            <img
                                className="mx-auto hidden h-full dark:block"
                                src="oil-5-leter.jpg"
                                alt=""
                            />
                        </a>
                    </div>

                    <div className="pt-6">
                        <div className="mb-4 flex items-center justify-between gap-4">
                            {/* Brand Name */}
                            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                Arong
                            </span>

                            {/* Quick look and Add to favorites */}
                            <div className="flex items-center justify-end gap-1">
                                <button
                                    type="button"
                                    data-tooltip-target="tooltip-quick-look-2"
                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Quick look</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                        />
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="tooltip-quick-look-2"
                                    role="tooltip"
                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                    data-popper-placement="top"
                                >
                                    Quick look
                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                </div>

                                <button
                                    type="button"
                                    data-tooltip-target="tooltip-add-to-favorites-2"
                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Add to Favorites</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="tooltip-add-to-favorites-2"
                                    role="tooltip"
                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 lg:px-3 lg:py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                    data-popper-placement="top"
                                >
                                    Add to favorites
                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                </div>
                            </div>
                        </div>

                        {/* product name  */}
                        <a
                            href="#"
                            className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                        >
                            Local Maghi Sarisha Oil
                        </a>

                        {/* product description  */}
                        <p>
                            সয়াবিন তেল বাজারে আসার পর থেকে আমরা অনেকেই সরিষার তেলের উপকারিতা ভুলে গেছি। <a href="">seemore</a>
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                            <div className="flex items-center">
                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">5.0</span>
                        </div>

                        <div className="mt-4 mb-4 flex items-center justify-between">
                            <div>
                                <span className="text-xl font-bold text-gray-900 dark:text-white">
                                    $1099.00
                                </span>
                                <span className="text-sm line-through text-gray-500 dark:text-gray-400">
                                    $1229.00
                                </span>
                            </div>

                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                            >
                                <svg
                                    className="me-2 h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    {/* Cadr IMG */}
                    <div className="h-56 w-full">
                        <a href="#">
                            <img
                                className="mx-auto h-full dark:hidden"
                                src="oil-5-leter.jpg"
                                alt=""
                            />
                            <img
                                className="mx-auto hidden h-full dark:block"
                                src="oil-5-leter.jpg"
                                alt=""
                            />
                        </a>
                    </div>

                    <div className="pt-6">
                        <div className="mb-4 flex items-center justify-between gap-4">
                            {/* Brand Name */}
                            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                Arong
                            </span>

                            {/* Quick look and Add to favorites */}
                            <div className="flex items-center justify-end gap-1">
                                <button
                                    type="button"
                                    data-tooltip-target="tooltip-quick-look-2"
                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Quick look</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                        />
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="tooltip-quick-look-2"
                                    role="tooltip"
                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                    data-popper-placement="top"
                                >
                                    Quick look
                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                </div>

                                <button
                                    type="button"
                                    data-tooltip-target="tooltip-add-to-favorites-2"
                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Add to Favorites</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="tooltip-add-to-favorites-2"
                                    role="tooltip"
                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 lg:px-3 lg:py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                    data-popper-placement="top"
                                >
                                    Add to favorites
                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                </div>
                            </div>
                        </div>

                        {/* product name  */}
                        <a
                            href="#"
                            className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                        >
                            Local Maghi Sarisha Oil
                        </a>

                        {/* product description  */}
                        <p>
                            সয়াবিন তেল বাজারে আসার পর থেকে আমরা অনেকেই সরিষার তেলের উপকারিতা ভুলে গেছি। <a href="">seemore</a>
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                            <div className="flex items-center">
                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">5.0</span>
                        </div>

                        <div className="mt-4 mb-4 flex items-center justify-between">
                            <div>
                                <span className="text-xl font-bold text-gray-900 dark:text-white">
                                    $1099.00
                                </span>
                                <span className="text-sm line-through text-gray-500 dark:text-gray-400">
                                    $1229.00
                                </span>
                            </div>

                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                            >
                                <svg
                                    className="me-2 h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    {/* Cadr IMG */}
                    <div className="h-56 w-full">
                        <a href="#">
                            <img
                                className="mx-auto h-full dark:hidden"
                                src="oil-5-leter.jpg"
                                alt=""
                            />
                            <img
                                className="mx-auto hidden h-full dark:block"
                                src="oil-5-leter.jpg"
                                alt=""
                            />
                        </a>
                    </div>

                    <div className="pt-6">
                        <div className="mb-4 flex items-center justify-between gap-4">
                            {/* Brand Name */}
                            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                Arong
                            </span>

                            {/* Quick look and Add to favorites */}
                            <div className="flex items-center justify-end gap-1">
                                <button
                                    type="button"
                                    data-tooltip-target="tooltip-quick-look-2"
                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Quick look</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                        />
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="tooltip-quick-look-2"
                                    role="tooltip"
                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                    data-popper-placement="top"
                                >
                                    Quick look
                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                </div>

                                <button
                                    type="button"
                                    data-tooltip-target="tooltip-add-to-favorites-2"
                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Add to Favorites</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="tooltip-add-to-favorites-2"
                                    role="tooltip"
                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 lg:px-3 lg:py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                    data-popper-placement="top"
                                >
                                    Add to favorites
                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                </div>
                            </div>
                        </div>

                        {/* product name  */}
                        <a
                            href="#"
                            className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                        >
                            Local Maghi Sarisha Oil
                        </a>

                        {/* product description  */}
                        <p>
                            সয়াবিন তেল বাজারে আসার পর থেকে আমরা অনেকেই সরিষার তেলের উপকারিতা ভুলে গেছি। <a href="">seemore</a>
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                            <div className="flex items-center">
                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">5.0</span>
                        </div>

                        <div className="mt-4 mb-4 flex items-center justify-between">
                            <div>
                                <span className="text-xl font-bold text-gray-900 dark:text-white">
                                    $1099.00
                                </span>
                                <span className="text-sm line-through text-gray-500 dark:text-gray-400">
                                    $1229.00
                                </span>
                            </div>

                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                            >
                                <svg
                                    className="me-2 h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    {/* Cadr IMG */}
                    <div className="h-56 w-full">
                        <a href="#">
                            <img
                                className="mx-auto h-full dark:hidden"
                                src="oil-5-leter.jpg"
                                alt=""
                            />
                            <img
                                className="mx-auto hidden h-full dark:block"
                                src="oil-5-leter.jpg"
                                alt=""
                            />
                        </a>
                    </div>

                    <div className="pt-6">
                        <div className="mb-4 flex items-center justify-between gap-4">
                            {/* Brand Name */}
                            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                Arong
                            </span>

                            {/* Quick look and Add to favorites */}
                            <div className="flex items-center justify-end gap-1">
                                <button
                                    type="button"
                                    data-tooltip-target="tooltip-quick-look-2"
                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Quick look</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                        />
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="tooltip-quick-look-2"
                                    role="tooltip"
                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                    data-popper-placement="top"
                                >
                                    Quick look
                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                </div>

                                <button
                                    type="button"
                                    data-tooltip-target="tooltip-add-to-favorites-2"
                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Add to Favorites</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="tooltip-add-to-favorites-2"
                                    role="tooltip"
                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 lg:px-3 lg:py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                    data-popper-placement="top"
                                >
                                    Add to favorites
                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                </div>
                            </div>
                        </div>

                        {/* product name  */}
                        <a
                            href="#"
                            className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                        >
                            Local Maghi Sarisha Oil
                        </a>

                        {/* product description  */}
                        <p>
                            সয়াবিন তেল বাজারে আসার পর থেকে আমরা অনেকেই সরিষার তেলের উপকারিতা ভুলে গেছি। <a href="">seemore</a>
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                            <div className="flex items-center">
                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">5.0</span>
                        </div>

                        <div className="mt-4 mb-4 flex items-center justify-between">
                            <div>
                                <span className="text-xl font-bold text-gray-900 dark:text-white">
                                    $1099.00
                                </span>
                                <span className="text-sm line-through text-gray-500 dark:text-gray-400">
                                    $1229.00
                                </span>
                            </div>

                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                            >
                                <svg
                                    className="me-2 h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    {/* Cadr IMG */}
                    <div className="h-56 w-full">
                        <a href="#">
                            <img
                                className="mx-auto h-full dark:hidden"
                                src="oil-5-leter.jpg"
                                alt=""
                            />
                            <img
                                className="mx-auto hidden h-full dark:block"
                                src="oil-5-leter.jpg"
                                alt=""
                            />
                        </a>
                    </div>

                    <div className="pt-6">
                        <div className="mb-4 flex items-center justify-between gap-4">
                            {/* Brand Name */}
                            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                Arong
                            </span>

                            {/* Quick look and Add to favorites */}
                            <div className="flex items-center justify-end gap-1">
                                <button
                                    type="button"
                                    data-tooltip-target="tooltip-quick-look-2"
                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Quick look</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                        />
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="tooltip-quick-look-2"
                                    role="tooltip"
                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                    data-popper-placement="top"
                                >
                                    Quick look
                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                </div>

                                <button
                                    type="button"
                                    data-tooltip-target="tooltip-add-to-favorites-2"
                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Add to Favorites</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="tooltip-add-to-favorites-2"
                                    role="tooltip"
                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 lg:px-3 lg:py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                    data-popper-placement="top"
                                >
                                    Add to favorites
                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                </div>
                            </div>
                        </div>

                        {/* product name  */}
                        <a
                            href="#"
                            className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                        >
                            Local Maghi Sarisha Oil
                        </a>

                        {/* product description  */}
                        <p>
                            সয়াবিন তেল বাজারে আসার পর থেকে আমরা অনেকেই সরিষার তেলের উপকারিতা ভুলে গেছি। <a href="">seemore</a>
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                            <div className="flex items-center">
                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>

                                <svg
                                    className="h-4 w-4 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">5.0</span>
                        </div>

                        <div className="mt-4 mb-4 flex items-center justify-between">
                            <div>
                                <span className="text-xl font-bold text-gray-900 dark:text-white">
                                    $1099.00
                                </span>
                                <span className="text-sm line-through text-gray-500 dark:text-gray-400">
                                    $1229.00
                                </span>
                            </div>

                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                            >
                                <svg
                                    className="me-2 h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>



            </section>

            <section className="flex justify-center mt-10">
                <div className="join">
                    <input
                        className="join-item btn btn-square"
                        type="radio"
                        name="options"
                        aria-label="1"
                        defaultChecked />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                </div>
            </section>




        </div>
    );
};

export default Home;