import React from "react";
import { useState } from 'react';


export default function Modal(){
  const [showModal, setshowModal] = useState(false);
  return(
    <>
    <div className="flex md:flex-col justify-center items-center mt-40">
      <div className="flex gap-5">
        <button 
        type="button" 
        className="bg-blue-500 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline:none focus:outline-none"
        onClick={()=>setshowModal(true)}>
          Open Modal
        </button>
      </div>

    </div>
    </>
  );
}