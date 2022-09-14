import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";

const Services = () => {
    const services = [
        {
            id: 1,
            icon: <BsPencilSquare size={32} color={"pink"} />,
            title: "Organisational Development",
            body: "Bring to the table win-win survival strategies to ensure proactive domination",
            link: "Read more",
        },
        {
            id: 2,
            icon: <BsPencilSquare size={32} color={"pink"} />,
            title: "Superchargerd Coaching",
            body: "Podcasting operational change management inside of workflows to establish a framework taking",
            link: "Read more",
        },
        {
            id: 3,
            icon: <BsPencilSquare size={32} color={"pink"} />,
            title: "Company & Business Setup",
            body: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test",
            link: "Read more",
        },
    ];

    const benefits = [
        {
            id: 1,
            icon: (
                <BsFillCheckCircleFill
                    color="#0AA9CC"
                    className="  mr-2 text-2xl md:w-[20%] md:text-4xl lg:text-5xl "
                />
            ),
            benefit: "Valuation Services",
        },
        {
            id: 2,
            icon: (
                <BsFillCheckCircleFill
                    color="#0AA9CC"
                    className=" mr-2 text-2xl md:w-[20%] md:text-4xl lg:text-5xl"
                />
            ),
            benefit: "Development of Financial Models",
        },
        {
            id: 3,
            icon: (
                <BsFillCheckCircleFill
                    color="#0AA9CC"
                    className=" mr-2 text-2xl md:w-[20%] md:text-4xl lg:text-5xl"
                />
            ),
            benefit: "Feasibility Studies & Business Plans",
        },
    ];
    return (
        <div className=" text-[#14183E] ">
            <div className="w-[100%] md:flex md:justify-between">
                <div className=" hidden md:block rounded-xl bg-hero8 bg-left bg-no-repeat w-[45%] h-[600px] mb-4"></div>
                <div className=" flex flex-col items-center md:items-start sm:my-10 md:w-[45%] ">
                    <h1 className="  text-4xl sm:text-5xl md:text-4xl font-bold  pb-4">
                        We turn information into actionable insights
                    </h1>
                    <div className="w-[100%] sm:w-[90%] md:w-[100%] sm:my-7 ">
                        {benefits.map((benefit) => (
                            <div className=" flex items-center my-6 font-semibold">
                                {benefit.icon}
                                <p className="md:w-[80%] sm:text-3xl md:text-2xl sm:my-4">
                                    {benefit.benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                    <button className=" bg-[#1C3F66] text-white font-semibold w-[150px] h-[50px] rounded-xl my-6 ">
                        See Our Services
                    </button>
                </div>
            </div>
            {/* ------------- */}
            <div className="md:flex ">
                <div className="md:w-[70%]">
                    <div className=" bg-[#FFF9FB] md:p-10">
                        <h1 className="font-bold text-3xl py-4">
                            Strategy Driven Leadership Development
                        </h1>
                        <p className="  text-slate-400 py-4 px-4 md:px-0">
                            Feza Finance team is a diverse network of
                            consultants and industry professionals with a global
                            mindset and a collaborative culture. We work to
                            understand your issues and are driven to ask better
                            questions in the pursuit of making your business
                            work better
                        </p>
                    </div>

                    <div className="md:p-10 ">
                        <h1 className=" font-bold text-3xl py-4">
                            Organizational Design for Business Agility
                        </h1>

                        <p className="py-4 px-4 md:px-0 text-slate-400">
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
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex flex-col md:flex-row  bg-[#FFF9FB] px-6 md:p-10 ">
                            <div className=" py-4 md:mr-4">{service.icon}</div>
                            <div>
                                <h1 className=" font-bold text-2xl py-4">
                                    {service.title}
                                </h1>
                                <p className=" py-4">{service.body}</p>
                                <a
                                    className=" flex items-center py-4 font-semibold text-[#01A9BD]"
                                    href="">
                                    <p className=" mr-2 text-[#01A9BD]">
                                        {service.link}
                                    </p>
                                    <AiOutlineArrowRight />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
