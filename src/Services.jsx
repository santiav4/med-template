import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";

const Services = () => {
    return (
        <div className=" text-[#14183E] ">
            <div className="w-[100%]">
                <div className=" hidden bg-hero8 bg-center bg-no-repeat   h-[300px] mb-4"></div>
                <div className=" flex flex-col items-center ">
                    <div className="w-[100%]">
                        <h1 className="  text-4xl font-bold  pb-4">
                            We turn information into actionable insights
                        </h1>
                        <div className=" flex items-center my-6 font-semibold">
                            <BsFillCheckCircleFill
                                color="#0AA9CC"
                                size={24}
                                className=" mr-2"
                            />
                            <p>Valuation Services</p>
                        </div>
                        <div className=" flex items-center my-6 font-semibold">
                            <BsFillCheckCircleFill
                                color="#0AA9CC"
                                size={24}
                                className=" mr-2"
                            />
                            <p>Development of Financial Models</p>
                        </div>
                        <div className=" flex items-center my-6 font-semibold">
                            <BsFillCheckCircleFill
                                color="#0AA9CC"
                                size={24}
                                className=" mr-2"
                            />
                            <p>Feasibility Studies & Business Plans</p>
                        </div>
                    </div>
                    <button className=" bg-[#1C3F66] text-white font-semibold w-[150px] h-[50px] rounded-full my-6 ">
                        See Our Services
                    </button>
                </div>
            </div>
            {/* ------------- */}
            <div>
                <div>
                    <div className=" bg-[#FFF9FB]">
                        <h1 className="font-bold text-3xl py-4">
                            Strategy Driven Leadership Development
                        </h1>
                        <p className="  text-slate-400 py-4">
                            Feza Finance team is a diverse network of
                            consultants and industry professionals with a global
                            mindset and a collaborative culture. We work to
                            understand your issues and are driven to ask better
                            questions in the pursuit of making your business
                            work better
                        </p>
                    </div>
                    <div className=" ">
                        <h1 className=" font-bold text-2xl py-4">
                            Organizational Design for Business Agility
                        </h1>

                        <p className="py-4 text-slate-400">
                            We help you weather today's uncetainty through out
                            best team intelligence and need
                        </p>
                        <a
                            className=" flex items-center text-[#01A9BD] py-4"
                            href="">
                            <p className=" text-[#01A9BD] font-semibold mr-2">
                                See out solutions
                            </p>
                            <AiOutlineArrowRight className=" font-bold" />
                        </a>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col bg-[#FFF9FB] px-6 ">
                        <div className=" py-4">
                            <BsPencilSquare size={32} color={"pink"} />
                        </div>
                        <div>
                            <h1 className=" font-bold text-2xl py-4">
                                Organizational Development
                            </h1>
                            <p className=" py-4">
                                Bring to the table win-win survival strategies
                                to ensure proactive domination
                            </p>
                            <a
                                className=" flex items-center py-4 font-semibold text-[#01A9BD]"
                                href="">
                                <p className=" mr-2 text-[#01A9BD]">
                                    Read more
                                </p>
                                <AiOutlineArrowRight />
                            </a>
                        </div>
                    </div>
                    {/* ======= */}
                    <div className="flex flex-col py-4 bg-[#FFF9FB] px-6">
                        <div className=" py-4">
                            <BsPencilSquare size={32} color={"pink"} />
                        </div>
                        <div>
                            <h1 className=" font-bold text-2xl py-4">
                                Supercharged Coaching
                            </h1>
                            <p className=" py-4">
                                Podcasting operational change management inside
                                of workflows to establish a framework taking
                            </p>
                            <a
                                className=" flex items-center py-4 font-semibold text-[#01A9BD]"
                                href="">
                                <p className=" mr-2 text-[#01A9BD]">
                                    Read more
                                </p>
                                <AiOutlineArrowRight />
                            </a>
                        </div>
                    </div>
                    {/* ============== */}
                    <div className="flex flex-col bg-[#FFF9FB] py-4 px-6">
                        <div className="py-4">
                            <BsPencilSquare size={32} color={"pink"} />
                        </div>
                        <div>
                            <h1 className=" font-bold text-2xl py-4">
                                Company & Business Setup
                            </h1>
                            <p className=" py-4">
                                Capitalize on low hanging fruit to identify a
                                ballpark vlue added activity to a beta test
                            </p>
                            <a
                                className=" flex items-center font-semibold py-4 text-[#01A9BD]"
                                href="">
                                <p className=" mr-2 text-[#01A9BD]">
                                    Read more
                                </p>
                                <AiOutlineArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
