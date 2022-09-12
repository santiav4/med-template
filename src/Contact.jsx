const Contact = () => {
    return (
        <div className=" bg-teal-600  flex flex-col items-start p-6">
            <h1 className=" text-3xl font-bold text-white leading-10 py-6 ">
                Subscribe to get latest news and other interesting offers
            </h1>
            <div className="  w-[100%] ">
                <input class="input" type="text" placeholder="Your email" />
                <button className=" ml-[20px] h-[50px] bg-sky-800 text-white w-[30%] max-w-[140px] rounded-full font-semibold">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Contact;
