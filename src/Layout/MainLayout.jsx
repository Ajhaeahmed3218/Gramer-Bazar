import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="bg-[#eeeeee]">
                <Navbar/>
                <Outlet/>
                <Footer/>
            </div>










        </div>
    );
};

export default MainLayout;