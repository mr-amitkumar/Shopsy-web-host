import Logo from "../../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#Services" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];
const DropdowmLinks = [

{
    id: 1,
    name: "Trending Items",
    link: "/#",
},
{
    id: 2,
    name: "Top Rated",
    link: "/#",
},
{
    id: 3,
    name: "Best Selling ",
    link: "/#",         
},


]
const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" /> Shopsy
            </a>
          </div>
          {/* searchbar*/}
          <div className="flex justify-between items-center gap-4">
            <div className=" relative group hidden sm:block">
              <input
                type="text"
                name="Search"
                id="Search"
                placeholder="Search.."
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-500 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary text-black
                dark:bg-gray-800 dark:text-white dark:border-gray-600"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3
               dark:group-hover:text-primary transition-all duration-300 text-xl cursor-pointer
              "/>
            </div>
            {/* order button */}
            <button
              onClick={() => alert("order has not done yet")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white py-1 px-4 rounded-xl flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-300">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* darkmode switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4  hover:text-primary duration-300"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* dropdown */}
          <li className="group relative cursor-pointer">
            <a href="/#" className="flex items-center gap-[2px] py-2">
              Trending Items
              <span>
                <FaCaretDown className="transition-all  duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[999] hidden group-hover:block w-[150px] rounded-md bg-white p-2
             text-black  shadow-md dark:bg-gray-800 dark:text-white">
                <ul>
                    {DropdowmLinks.map((data)=>(
                        <li key={data.id}>
                        <a href={data.link}  className="inline-block w-full  p-2 text-center rounded-md hover:bg-primary/20">{data.name}</a>
                    </li>
                    ))}     
                </ul>
            </div>
          </li> 
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
