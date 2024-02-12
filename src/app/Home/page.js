"use client"
import Link from "next/link";

import Main from "@/components/Main";
import { useState } from "react";
import Enter from "@/components/Enter";

const Page = () => {
    const [userName, setUserName] = useState('');

 const handleNameSubmit = (name) => {
      // Set the entered name to the state
      setUserName(name);
    };
    return (
      <div className="w-full flex justify-center items-center">
       {userName ? <Main name={userName} /> : <Enter onSubmit={handleNameSubmit} />}

      </div>
    );
  };
  
  export default Page;