import { BiMenuAltRight } from "react-icons/bi";

const Nav = () => {
    return (
        <nav className="flex items-center justify-between bg-green-700">
            <div>Logo</div>
            <div>
                <BiMenuAltRight />
            </div>
        </nav>
    );
};

export default Nav;
