import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
const Benefits = () => {
    const benefits = [
        {
            id: 1,
            icon: <FaStackOverflow size={32} color={"pink"} />,
            title: "Independent Advice",
            body: "Capitalize on low hanging fruit to identify a ballpark value added.",
        },
        {
            id: 2,
            icon: <AiOutlineFileDone size={32} color={"pink"} />,
            title: "Independent Advice",
            body: "Override digital divide with additional clickthroughs froms DevOps.",
        },
        {
            id: 3,
            icon: <FaRegHandshake size={32} color={"pink"} />,
            title: "Independent Advice",
            body: "Nanotechnology immersion along the information highway will close loop.",
        },
    ];
    return (
        <div className=" border-slate-300 my-6 md:my-20 bg-[#fafafa]  md:flex ">
            <div className="md:px-4   ">
                <h1 className=" font-bold text-4xl lg:text-5xl pt-4 ">
                    Future is brigter when you're more prepared
                </h1>
                <p className="  pt-4 ">
                    We bring the breathe of out experience and industry
                    knowledge to help you succeed.
                </p>
                <a
                    className=" flex items-center underline decoration-solid py-4  text-[#01AEC6] font-semibold"
                    href="https://www.google.com/">
                    <p className="mr-2"> See More</p>
                    <div>
                        <AiOutlineArrowRight />
                    </div>
                </a>
            </div>
            {/* //--------- */}
            {benefits.map((benefit) => (
                <div>
                    {benefit.id == 3 && (
                        <hr className="w-[80%] md:hidden mx-auto bg-slate-300 font-bold h-[2px] " />
                    )}
                    <div
                        className={`${
                            benefit.id == 1 ? "bg-white" : ""
                        } py-4 md:py-0 px-4 md:px-4 rounded-xl `}>
                        <div className="py-2">{benefit.icon}</div>
                        <h3 className=" text-xl font-bold my-2 py-2">
                            {benefit.title}
                        </h3>
                        <p className="py-2">{benefit.body}</p>
                    </div>
                </div>
            ))}

            {/* //--------- */}
            {/* <div className=" py-4 md:py-0 md:border-r-[1px] px-4 md:px-4 rounded-xl">
                <div className="py-2">
                    <AiOutlineFileDone size={32} color={"pink"} />
                </div>
                <h3 className=" text-xl font-bold my-2 py2 ">
                    Independent Advice
                </h3>
                <p className="py-2">
                    Capitalize on low hanging fruit to identify a ballpark value
                    added
                </p>
            </div> */}
            {/* //--------- */}

            {/* <div className="py-2  md:py-0 px-4 md:px-4">
                <div className="py-2">
                    <FaRegHandshake size={32} color={"pink"} />
                </div>
                <h3 className=" text-xl font-bold my-2 py-2">
                    Independent Advice
                </h3>
                <p className="py-2">
                    Capitalize on low hanging fruit to identify a ballpark value
                    added
                </p>
            </div> */}
        </div>
    );
};

export default Benefits;
