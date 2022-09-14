import { BiMenuAltRight } from "react-icons/bi";

const Nav = () => {
    const links = ["Services", "Resources", "Company", "Blog", "Contact Us"];
    return (
        <nav className="flex items-center  justify-between md:justify-start h-10 pt-6 px-6  text-white">
            <div className="bg-[#FFC3D4] rounded-sm w-7 lg:w-9 font-bold text-center text-xl lg:text-2xl ">
                m
            </div>
            <div className="hidden md:text-white  md:flex md:list-none md:ml-[20%]">
                {links.map((link, index) => (
                    <li
                        key={index}
                        className="mr-4 text-xl  font-semibold hover:cursor-pointer hover:text-[#01AEC6] transition ease-in-out delay-75">
                        {link}
                    </li>
                ))}
            </div>

            <div className="text-black md:hidden">
                <BiMenuAltRight class={"mobile-menu"} />
            </div>
        </nav>
    );
};

export default Nav;
