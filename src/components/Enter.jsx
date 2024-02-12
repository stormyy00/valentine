
import { useState } from 'react';
import Link from 'next/link';
import sanrio from "../../public/sanrio.gif";
import Image from "next/image";

const Enter = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(name);
  };

  return (
    <div className="flex flex-cols justify-start items-center h-screen w-9/12 ">
      <Image src={sanrio} alt="sanrio" className='scale-50'/>
      <div className='flex flex-col '>

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="border-2 border-black bg-transparent rounded-md p-2 mb-4 placeholder:text-black "
        />
      <button

onClick={handleSubmit}
className="bg-pink-500 text-white rounded-xl px-4 py-2"
>
        Submit

      </button>
        </div>
    </div>
  );
};

export default Enter;
