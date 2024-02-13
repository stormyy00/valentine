
import { useState } from 'react';
import Link from 'next/link';
import sanrio from "../../public/sanrio.gif";
import Image from "next/image";
import { collection, addDoc } from 'firebase/firestore'; 
import { db } from '@/utils/firebase';

const Enter = ({ onSubmit, onTextSubmit }) => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  // const handleSubmit = () => {

  // };

  const handleSubmit = async () => {
    onSubmit(name);
    if (name.trim() !== '') {
      try {
        // Add data to Firestore
        const docRef = await addDoc(collection(db, 'names'), {
          content: name,
          timestamp: new Date()
        });
  
        console.log('Data sent to Firestore:', { content: name, timestamp: new Date() });
        console.log('Document reference:', docRef.id);

        // Check if onTextSubmit is a function before calling it
        if (typeof onTextSubmit === 'function') {
          onTextSubmit(name, docRef.id); // Pass the text and the document ID
        }
     
  
        // Call the function to send and fetch data to/from Flask server
        // console.log("TEST", text)
        // const response = await fetch(`/api/fetch?text=${text}`, {
        //   method: "POST",
        //   body: text
        // })

        // const data = await response.json()
        // onbiasScore(data.average_probabilities.probability.Biased)
        // onBarScore(data.compound_mean)

        // console.log(data)
  
        setName('');
      } catch (error) {
        console.error('Error adding document to Firestore: ', error);
      }
    }
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
