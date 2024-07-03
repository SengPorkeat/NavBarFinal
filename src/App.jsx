import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import logo from "./assets/SportHubLogo.png";

function App() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [iconColor, setIconColor] = useState("text-white");

  const handleIconClick = () => {
    setShowSearchBar(!showSearchBar);
    setIconColor(showSearchBar ? "text-white" : "text-black");
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="w-11/12 mx-auto relative flex items-center justify-between rounded-b-lg">
      <div className="absolute inset-0 bg-gray-900 opacity-20 blur-[2px] rounded-b-lg"></div>
      <div className="relative flex items-center w-full justify-between">
        <div className="ml-[7px]">
          <img className="w-[40px]" src={logo} alt="SportHub Logo" />
        </div>
        <div>
          <ul className="text-white flex gap-8 ml-[100px]">
            <li>
              <a href="">អំពីយើង</a>
            </li>
            <li>
              <a href="">ក្លឹបកីឡា</a>
            </li>
            <li>
              <a href="">ព្រឹត្តិការណ៍</a>
            </li>
            <li>
              <a href="">ព័ត៌មាន</a>
            </li>
            <li>
              <a href="">ប្រវត្តិកីឡា</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center text-white mr-[12px]">
          <div className="relative">
            <i
              className={`fa-solid fa-magnifying-glass cursor-pointer absolute top-1/2 left-3 transform -translate-y-1/2 ${iconColor}`}
              onClick={handleIconClick}
            ></i>
            {showSearchBar && (
              <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                className="pl-10 pr-3 py-2 rounded border border-gray-300 bg-white"
                placeholder="Search..."
              />
            )}
          </div>
          <button className="bg-[#172554] py-[2px] px-6 rounded-full ml-10">
            ចូល
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
