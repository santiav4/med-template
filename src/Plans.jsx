import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaUserMd } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const plans = [
    {
        id: 1,
        price: 99,
        type: "Private",
        icon: <FaUserMd size={40} />,
        perks: [
            "Functional Strategy",
            "Functional Strategy",
            "Functional Strategy",
            "Functional Strategy",
            "Functional Strategy",
        ],
    },
    {
        id: 2,
        price: 128,
        type: "Private",
        icon: <FaUserFriends size={40} />,
        perks: [
            "Functional Strategy",
            "Functional Strategy",
            "Functional Strategy",
            "Functional Strategy",
            "Functional Strategy",
        ],
    },
    {
        id: 3,
        price: 150,
        type: "Private",
        icon: <FaUsers size={40} />,
        perks: [
            "Functional Strategy",
            "Functional Strategy",
            "Functional Strategy",
            "Functional Strategy",
            "Functional Strategy",
        ],
    },
];
const Plans = () => {
    return (
        <div className="  py-4 text-[#14183E] ">
            <h1 className=" font-bold text-5xl text-center py-4">
                Our special plan for your business
            </h1>
            <div>
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className=" border  border-gray-200 w-[100%] mx-auto p-8 my-4">
                        <h1 className=" text-6xl font-bold text-right py-4">
                            ${plan.price}/yr
                        </h1>
                        <div className="py-4">{plan.icon}</div>
                        <h1 className="font-bold text-4xl py-4">{plan.type}</h1>
                        {plan.perks.map((perk, index) => (
                            <div
                                key={index}
                                className=" flex items-center py-3 text-[#01A9BD]">
                                <BsFillCheckCircleFill
                                    size={28}
                                    className=" mr-2"
                                />
                                <p className="text-3xl">{perk}</p>
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

                        <button className=" w-[140px] h-[50px] font-semibold border my-6  border-gray-600 rounded-full">
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
