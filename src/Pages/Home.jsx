import { useState } from "react";
import Banner from "../Components/Banner";


const Home = () => {
    // State for managing form inputs
    const [searchText, setSearchText] = useState('');
    const [select1, setSelect1] = useState('');
    const [select2, setSelect2] = useState('');
    const [select3, setSelect3] = useState('');
    const [select4, setSelect4] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Log or process form data
        console.log({
            searchText,
            select1,
            select2,
            select3,
            select4
        });
    }

    return (
        <div>

            <Banner />

            {/* Searching, Categorization and Sorting */}
            <section className="bg-[#eeeeee]">
                <div className="container mx-auto lg:p-10 p-5 border-2 lg:mt-16">
                    <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-5 ">

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

                        <select
                            id="select1"
                            className="bg-gray-50 lg:w-[400px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={select1}
                            onChange={(e) => setSelect1(e.target.value)}
                        >
                            <option value="" disabled>Choose a Band </option>
                            {/* <option value="">All Brand</option> */}
                            <option value="US">Pran</option>
                            <option value="CA">Arong</option>
                            <option value="FR">BDFoods</option>
                            
                        </select>

                        <select
                            id="select2"
                            className="bg-gray-50 lg:w-[400px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={select2}
                            onChange={(e) => setSelect2(e.target.value)}
                        >
                            <option value="" disabled>Choose a Category Name</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>

                        <select
                            id="select3"
                            className="bg-gray-50 lg:w-[400px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={select3}
                            onChange={(e) => setSelect3(e.target.value)}
                        >
                            <option value="" disabled>Price Range</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>

                        <select
                            id="select4"
                            className="bg-gray-50 lg:w-[400px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={select4}
                            onChange={(e) => setSelect4(e.target.value)}
                        >
                            <option value="" disabled>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                        <button onClick={handleSubmit} className="lg:w-[400px] bg-[#fc6934] rounded-md">submit</button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Home;