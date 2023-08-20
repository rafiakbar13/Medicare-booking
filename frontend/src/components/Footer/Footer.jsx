import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.linkedin.com/in/abdul-muqeet-7b1b3b1b2/",
    icon: <RiLinkedinFill className="w-4 h-5 group-hover:text-white" />,
  },
  {
    path: "https://www.youtube.com/channel/UCQ6OQg6mZLZG2xkj3XtYn9w",
    icon: <AiFillYoutube className="w-4 h-5 group-hover:text-white" />,
  },
  {
    path: "#",
    icon: <AiOutlineInstagram className="w-4 h-5 group-hover:text-white" />,
  },
  {
    path: "#",
    icon: <AiFillGithub className="w-4 h-5 group-hover:text-white" />,
  },
];

const quickLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks2 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get Opinion",
  },
];

const quickLinks3 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-10 pb-16">
      <div className="container">
        <div className="flex flex-col justify-between md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright &copy; {year} developed by Rafi All right reserved
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="border border-solid w-9 h-9 border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={link.path}
                    className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor transition duration-300"
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I Want To
            </h2>
            <ul>
              {quickLinks2.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={link.path}
                    className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor transition duration-300"
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks3.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={link.path}
                    className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor transition duration-300"
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
