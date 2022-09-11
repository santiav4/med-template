const Contact = () => {
    return (
        <div className=" bg-teal-600 h-[300px] flex flex-col items-center">
            <h1 className=" text-3xl font-bold text-white leading-10 py-6 w-[85%]">
                Subscribe to get latest news and other interesting offers
            </h1>
            <div className=" py-6 ">
                <input class="input" type="text" placeholder="Your email" />
                <button className=" ml-[20px] h-[50px] bg-sky-800 text-white w-[100px] rounded-full font-semibold">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Contact;
