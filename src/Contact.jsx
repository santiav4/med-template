const Contact = () => {
    return (
        <div className=" lg:w-[768px] lg:mx-auto bg-gradient-to-r  from-[#57B7C3] to-[#FFC3D4]  flex flex-col items-start p-6 rounded-xl">
            <h1 className=" text-3xl font-bold text-white leading-10 py-6  ">
                Subscribe to get latest news and other interesting offers
            </h1>
            <div className="  w-[100%] ">
                <input class="input" type="text" placeholder="Your email" />
                <button className=" ml-[20px] h-[50px] bg-sky-800 text-white w-[30%] hover:bg-sky-500 max-w-[140px] rounded-xl font-semibold">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Contact;
