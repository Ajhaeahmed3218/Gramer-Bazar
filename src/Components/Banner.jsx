import bannerImg from"../../public/family.png"
const Banner = () => {

    return (
        <div>
            <div style={{backgroundImage:`url(${bannerImg})`}} className={`bg-[url(${bannerImg})] bg-cover bg-center lg:h-[80vh] h-[50vh] ] w-full ]`}>
                {/* Content goes here */}
            </div>
        </div>
    );
};

export default Banner;
