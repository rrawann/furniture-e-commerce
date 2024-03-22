import { React } from "react";
function ServiceCard({ imgURL, label, subtext }) {
    return (
        <div className="max-sm:w-[300px] max-sm:min-w-[300px] w-full p-5 ml-5 rounded-[20px] shadow-lg  border-l-4  hover:border-b-4 border-customColor">

           <div className="flex item-center justify-center mb-5"> <img src={imgURL.src} alt={label} width={40} height={40} className="bg-customColor p-2 rounded-full" /></div>


            <h1 className="mt-2 mb-2 text-2xl font-bold">{label}</h1>


            <p className="text-lg text-gray-500 mb-4">{subtext}</p>



        </div>

    );
}

export default ServiceCard;