 "use client"
 import { useRouter } from 'next/navigation';
 import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
   const router = useRouter()
   const [keyword,Setkeyword] = useState<string>("")
   const routing = () =>{
     router.push(`/?word=${keyword}`)
     Setkeyword(() => "")
   }
  return (
    <div className="flex justify-center mt-10 ">
      <div className="relative">
        <div 
        className="absolute inset-y-0 left-0 flex items-center pl-4"
        onClick={() => routing()}
       >
          <FaSearch className="text-gray-500" />
        </div>
        <input
          value={keyword}
          type="text"
          placeholder="Recherche..."
          className="px-10 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          onChange={(e) => Setkeyword(() => e.target.value)}
        />
 
      </div>
    </div>
  );
};

export default SearchBar;
