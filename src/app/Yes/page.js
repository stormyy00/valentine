"use client"
import { useState, useEffect } from 'react';
import { links }from "@/data/texts"

const Page = () => {

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // Set a timer to redirect after 5 seconds (for example)
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 3000); // 5000 milliseconds = 5 seconds

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures useEffect runs only once when component mounts

  // Redirect to another page when redirect state is true
  if (redirect) {
    const randomIndex = Math.floor(Math.random() * links.length);
  const selectedLink = links[randomIndex];

  // Redirect to the selected link
  window.location.href = selectedLink;

  return null; // Render nothing
    // Use Next.js's router.push to navigate
    // window.location.href = 'https://www.youtube.com/watch?v=TxZoIH7wO0k'; // Replace '/another-page' with your desired destination
    // return null; // Render nothing
  }
    return (
      <div className="w-full h-screen bg-gradient-to-b from-[#FD6FD7] to-[#FFBECA] flex justify-center items-center">

        
        <p className="text-white text-5xl">Awesome see you on 2/14 </p>
      </div>
    );
  };
  
  export default Page;