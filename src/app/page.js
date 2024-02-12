"use client"
import Main from "@/components/Main";
import Enter from "@/components/Enter";
import { useState } from "react";

const Home = () => {
  const [userName, setUserName] = useState('');

 const handleNameSubmit = (name) => {
      setUserName(name);
 };
  return (
    <div className="w-full h-full flex-cols bg-gradient-to-b from-[#FD6FD7] to-[#FFBECA] flex justify-start items-center">


{userName ? <Main name={userName} /> : <Enter onSubmit={handleNameSubmit} />}

    </div>
  );
};

export default Home;