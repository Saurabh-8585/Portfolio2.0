import { MainLogo } from "../Helpers/AssetsList";
import NavItems from "../Helpers/NavItems";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900 p-3">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex justify-center items-center flex-col">
          {MainLogo}
          <ul className="flex flex-wrap items-center mb-6 gap-4 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {NavItems.map((items,index) => (
              <li key={index}>
               <ScrollLink
                activeClass="active"
                to={items.toLowerCase()} 
                spy={true}
                smooth={true}
                duration={300}
                className="font-medium tracking-wide text-gray-700 dark:text-lightText transition-colors duration-200 hover:text-fadeMainTheme cursor-pointer hover:underline"
              >
                  {items}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className=" text-sm text-gray-500 sm:text-center dark:text-gray-400 flex justify-center items-center">
          © {new Date().getFullYear()}{" "}
          <ScrollLink to='home' className="ml-1">Saurabh Khatmode</ScrollLink>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;