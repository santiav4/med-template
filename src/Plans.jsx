import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaUserMd } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const plans = [
    {
        id: 1,
        price: 99,
        type: "Private",
        icon: <FaUserMd size={36} />,
        perks: [
            "Functional Strategy",
            "Strategy & Operations",
            "Organisational Strategy",
            "Business Model Transformation",
            "Corporate Strategy",
        ],
    },
    {
        id: 2,
        price: 128,
        type: "Business",
        icon: <FaUserFriends size={40} />,
        perks: [
            "Functional Strategy",
            "Strategy & Operations",
            "Organisational Strategy",
            "Business Model Transformation",
            "Corporate Strategy",
        ],
    },
    {
        id: 3,
        price: 150,
        type: "Corporate",
        icon: <FaUsers size={36} />,
        perks: [
            "Functional Strategy",
            "Strategy & Operations",
            "Organisational Strategy",
            "Business Model Transformation",
            "Corporate Strategy",
        ],
    },
];
const Plans = () => {
    return (
        <div className="  py-4 text-[#14183E] ">
            <h1 className=" font-bold text-5xl text-center py-4">
                Our special plan for your business
            </h1>
            <div className="md:flex">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className=" md:w-[30%] border rounded-xl border-gray-200 w-[100%] mx-auto p-8 md:p-4 my-4">
                        <div className="py-4  flex items-center md:block">
                            {plan.icon}
                            <h1 className="font-bold text-4xl ml-4 md:ml-0 md:mt-4 ">
                                {plan.type}
                            </h1>
                        </div>
                        <div className="   flex items-end my-9 md:my-4">
                            <p className=" text-5xl sm:text-7xl md:text-6xl mr-2 md:mr-0">
                                $
                            </p>
                            <h1 className=" text-5xl sm:text-7xl md:text-6xl font-bold text-right ">
                                {plan.price}
                            </h1>
                            <p>/year</p>
                        </div>

                        {plan.perks.map((perk, index) => (
                            <div
                                key={index}
                                className=" flex items-center py-3 text-[#01A9BD] ">
                                <BsFillCheckCircleFill className=" md:text-lg mr-2 md:w-[15%]" />
                                <p className="  sm:text-3xl md:text-base md:w-[85%]">
                                    {perk}
                                </p>
                            </div>
                        ))}

                        {/* <div className=" flex items-center py-3 text-[#01A9BD]">
                            <BsFillCheckCircleFill
                                size={22}
                                className=" mr-2"
                            />
                            <p className="text-3xl">Functional Stratefy</p>
                        </div>
                        <div className=" flex items-center py-3 text-[#01A9BD]">
                            <BsFillCheckCircleFill
                                size={22}
                                className=" mr-2"
                            />
                            <p className="text-3xl">Functional Stratefy</p>
                        </div>
                        <div className=" flex items-center py-3 text-[#01A9BD]">
                            <BsFillCheckCircleFill
                                size={22}
                                className=" mr-2"
                            />
                            <p className="text-3xl">Functional Stratefy</p>
                        </div>
                        <div className=" flex items-center py-3 text-[#01A9BD]">
                            <BsFillCheckCircleFill
                                size={22}
                                className=" mr-2"
                            />
                            <p className="text-3xl">Functional Stratefy</p>
                        </div> */}

                        <button
                            className={` ${
                                plan.id == 2
                                    ? "bg-sky-800 hover:bg-sky-500 hover:border-sky-500 text-white"
                                    : "hover:bg-sky-800"
                            } w-[140px] h-[50px] font-semibold border my-6  border-sky-800 rounded-full  hover:text-white transition-all ease-in-out 75`}>
                            Choose Plan
                        </button>
                    </div>
                ))}

                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Plans;
