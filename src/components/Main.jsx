"use client"
import { useState } from 'react';
import Button from './Button'
import Image from 'next/image';
import sanrio from "../../public/sanrio.gif";

const Main = ({name}) => {
    const [startTimer, setStartTimer] = useState(false);
  
    const handleClick = () => {
      // Set startTimer state to true when the "YES" button is clicked
      setStartTimer(true);
    };
  
    // Redirect to the Yes page when startTimer is true
    if (startTimer) {
      // Use Next.js's router.push to navigate
      window.location.href = '/Yes'; // Navigate to the Yes page
      return null; // Render nothing
    }

  return (
    <div className="w-full h-full bg-gradient-to-b from-[#FD6FD7] to-[#FFBECA] flex justify-start items-center">

<Image src={sanrio} alt="sanrio" className='scale-75'/>
<div className='flex flex-col items-center w-11/12'>
    <div className='text-4xl text-pink-600 drop-shadow-lg'>

    {name ? `Will you be my valentinee ${name}???` : "Vaentine??"}
    </div>
        <div className='flex flex-cols gap-20'>


        <button
        onClick={handleClick}
        className='flex justify-center items-center h-14 w-40 text-lg rounded-xl shadow-md bg-pink-500 text-white mt-8 mr-72'>YES</button>

        <Button/>
        </div>
</div>
    </div>
  );
};
export default Main;