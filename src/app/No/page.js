import Link from "next/link";

const page = () => {
    return (
      <div className="w-full h-screen bg-gradient-to-b from-[#FD6FD7] to-[#FFBECA] flex justify-center items-center">

        
        <Link 
        href="/Yes"
        className="text-white text-5xl">I know you miss clicked so click here to see the surprise </Link>

      </div>
    );
  };
  
  export default page;