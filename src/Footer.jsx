import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div className=" ">
            <div className=" hidden">
                thigs with menus for tablet or desktop
            </div>
            <div className=" border-t py-4">
                <div className="flex justify-center my-4">
                    <FaFacebookSquare
                        className=" mr-4"
                        size={32}
                        color="#81899A"
                    />
                    <FaInstagramSquare
                        className=" mr-4"
                        size={32}
                        color="#81899A"
                    />
                    <FaTwitterSquare
                        className=" mr-4"
                        size={32}
                        color="#81899A"
                    />
                </div>
                <p className=" text-center  text-sm my-4">
                    &copy; Copyright Feza Finance. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
