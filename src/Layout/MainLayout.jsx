import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="bg-[#eeeeee]">
                <Navbar/>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;