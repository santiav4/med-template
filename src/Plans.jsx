import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaUserMd } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
const Plans = () => {
    return (
        <div className="  py-4 text-[#14183E] ">
            <h1 className=" font-bold text-3xl text-center py-4">
                Our special plan for your business
            </h1>
            <div>
                <div className=" border  border-gray-700 w-[80%] mx-auto p-4 my-4">
                    <h1 className="text-3xl font-bold text-right py-4">
                        $99/yr
                    </h1>
                    <div className="py-4">
                        <FaUserMd size={32} />
                    </div>
                    <h1 className="font-bold text-2xl py-4">Private</h1>
                    <div className=" flex items-center py-3 text-[#01A9BD]">
                        <BsFillCheckCircleFill size={22} className=" mr-2" />
                        <p>Functional Stratefy</p>
                    </div>
                    <div className=" flex items-center py-3 text-[#01A9BD]">
                        <BsFillCheckCircleFill size={22} className=" mr-2" />
                        <p>Functional Stratefy</p>
                    </div>
                    <div className=" flex items-center py-3 text-[#01A9BD]">
                        <BsFillCheckCircleFill size={22} className=" mr-2" />
                        <p>Functional Stratefy</p>
                    </div>
                    <div className=" flex items-center py-3 text-[#01A9BD]">
                        <BsFillCheckCircleFill size={22} className=" mr-2" />
                        <p>Functional Stratefy</p>
                    </div>
                    <div className=" flex items-center py-3 text-[#01A9BD]">
                        <BsFillCheckCircleFill size={22} className=" mr-2" />
                        <p>Functional Stratefy</p>
                    </div>

                    <button className=" w-[140px] h-[50px] font-semibold border my-6  border-gray-600 rounded-full">
                        Choose Plan
                    </button>
                </div>
                {/* =================== */}
                <div className=" border  border-gray-700 w-[80%] mx-auto p-4 my-4">
                    <h1 className="text-3xl font-bold text-right py-4">
                        $128/yr
                    </h1>
                    <div className="py-4">
                        <FaUserFriends size={32} />
                    </div>
                    <h1 className="font-bold text-2xl py-4">Business</h1>
                    <div className=" flex items-center py-3 text-[#01A9BD]">
                        <BsFillCheckCircleFill size={22} className=" mr-2" />
                        <p>Functional Stratefy</p>
                    </div>
                    <div className=" flex items-center py-3 text-[#01A9BD]">
                        <BsFillCheckCircleFill size={22} className=" mr-2" />
                        <p>Functional Stratefy</p>
                    </div>
                    <div className=" flex items-center py-3 text-[#01A9BD]">
                        <BsFillCheckCircleFill size={22} className=" mr-2" />
                        <p>Functional Stratefy</p>
                    </div>
                    <div className=" flex items-center py-3 text-[#01A9BD]">
                        <BsFillCheckCircleFill size={22} className=" mr-2" />
                        <p>Functional Stratefy</p>
                    </div>
                    <div className=" flex items-center py-3 text-[#01A9BD]">
                        <BsFillCheckCircleFill size={22} className=" mr-2" />
                        <p>Functional Stratefy</p>
                    </div>

                    <button className=" w-[140px] h-[50px] font-semibold border my-6 bg-[#204169] text-white border-gray-600 rounded-full">
                        Choose Plan
                    </button>
                </div>
                {/* ================= */}
                <div className=" border  border-gray-700 w-[80%] mx-auto p-4 my-4">
                    <h1 className="text-3xl font-bold text-right py-4">
                        $150/yr
                    </h1>
                    <div className="py-4">
                        <FaUsers size={32} />
                    </div>
                    <h1 className="font-bold text-2xl py-4">Corporate</h1>
                    <div className=" flex items-center py-3 text-[#01A9BD]">
                        <BsFillCheckCircleFill size={22} className=" mr-2" />
                        <p>Functional Stratefy</p>
                    </div>
                    <div className=" flex items-center py-3 text-[#01A9BD]">
                        <BsFillCheckCircleFill size={22} className=" mr-2" />
                        <p>Functional Stratefy</p>
                    </div>
                    <div className=" flex items-center py-3 text-[#01A9BD]">
                        <BsFillCheckCircleFill size={22} className=" mr-2" />
                        <p>Functional Stratefy</p>
                    </div>
                    <div className=" flex items-center py-3 text-[#01A9BD]">
                        <BsFillCheckCircleFill size={22} className=" mr-2" />
                        <p>Functional Stratefy</p>
                    </div>
                    <div className=" flex items-center py-3 text-[#01A9BD]">
                        <BsFillCheckCircleFill size={22} className=" mr-2" />
                        <p>Functional Stratefy</p>
                    </div>

                    <button className=" w-[140px] h-[50px]  font-semibold border my-6 border-gray-600 rounded-full">
                        Choose Plan
                    </button>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Plans;
