import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10">
                <aside className="max-w-[600px]">
                    <Link to={'/'} className="flex justify-center items-center gap-1 text-xl "><FaHome className="lg:text-3xl text-[#fc6934]" /><div className="lg:font-bold font-semibold lg:text-2xl">Gramer<span className="text-[#fc6934]">Bazar</span></div></Link>
                    <p className="text-[16px]">
                        গ্রামের বাজার , যেখানে স্বাস্থ্য এবং স্থায়িত্বের প্রতিশ্রুতি আমরা যা কিছু করি তার কেন্দ্রবিন্দুতে। আমরা মানসম্পন্ন নিরাপদ পণ্যগুলির একটি বৈচিত্র্যময় পরিসীমা সরবরাহ করতে পেরে গর্বিত যা কেবল আপনার শরীরকেই পুষ্ট করে না বরং পৃথিবিকে একটি স্বাস্থ্যকর গ্রহে পরিণত করতে অবদান রাখে। gramer-bazar-f75f9.web.app এ, আমরা সুস্থতার পরিসিমা বৃদ্ধির জন্য বিশুদ্ধ, প্রাকৃতিক উপাদানগুলির শক্তিতে বিশ্বাস করি।
                    </p>
                </aside>
                <nav>
                    <h6 className="font-bold text-[#fc6934]">COMPANY</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">রিটার্ন পলিসি</a>
                    <a className="link link-hover">রিফান্ড পলিসি</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-[#fc6934]">QUICK HELP</h6>
                    <a className="link link-hover">গ্রাহক সেবা</a>
                    <a className="link link-hover">Contact</a>
                    
                </nav>
                <nav>
                    <h6 className="footer-title">DBID ID : 43736133445</h6>
                    
                </nav>
            </footer>
        </div>
    );
};

export default Footer;