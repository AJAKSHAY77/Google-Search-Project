import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";
import { Input } from "postcss";

const SearchInput = () => {

    const [searchQuery, setSearchQuery] = useState("")
    




    return <div id="searchBox" className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white
     hover:shadow-c hover:border-0 focus-within:shodow-c focus-within:border-0">
         
    <AiOutlineSearch size={20} color="#9aa0a6"/>
        <input type="text" onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
              
            className=" grow outline-0 text-black/[0.87]"

        />  
        
        <div className="flex items-center gap-3">

            {searchQuery && <IoMdClose
                onClick={() => (setSearchQuery(""))}
                size={24}
                color="#70757a"
                className="cursor-pointer" />}
               <img className="h-6 w-6 cursor-pointer" src={MicIcon}/>
                <img className="h-6 w-6 cursor-pointer" src={ImageIcon}/>

        </div>
    </div>;
};

export default SearchInput;