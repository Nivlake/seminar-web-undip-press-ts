import Link from "next/link"
import axios from "axios";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Sidebar_2() {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState(null);
  const handleLogout = () => {
    const token = localStorage.getItem('access_token');
    axios.post('https://walrus-app-elpr8.ondigitalocean.app/api/logout', {}, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(response => {
      localStorage.removeItem('access_token');
      setUser(null);
      toast.success('Successfully logged out!');
      router.push('/');
    })
    .catch(error => {
      console.log(error);
      toast.error('Error logging out!');
    });
  };
  return (
    <div className={`sidebar bg-primary-500 border-r overflow-hidden
                   ${showSidebar ? "w-96 bg-primary-500 shadow-lg ease-in-out duration-300 " : "w-[7.5rem] ease-in-out duration-300"}`}>  
        <div className="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
                <div className={`group flex items-center rounded-md w-max pt-8 ${showSidebar ? "px-8 space-x-4" : "px-11"}`}>
                    <img src="../icon/up.svg" className={`${showSidebar ? "" : "hidden"}`} onClick={() => setShowSidebar(!showSidebar)}/>
                    <img src="../icon/text-up.svg" className={`${showSidebar ? "" : "hidden"}`} />                  
                    <button 
                        onClick={() => setShowSidebar(!showSidebar)}>
                            <img src={`${showSidebar ? "../icon/chevron-left.svg" : "../icon/chevron-right.svg"}`} 
                        className="" 
                        alt=""/>
                    </button>
                </div>
                <ul className="mt-6 space-y-2 tracking-wide px-8">
                    <li className="min-w-max">
                        <a href="#" aria-label="dashboard" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-primary-400 duration-300">
                            <img src='../icon/home.svg'/>
                            <span className={`${showSidebar ? "" : "hidden"} group-hover:text-gray-700 duration-300`}>Home</span>
                            <link href="/home" rel="canonical" />
                        </a>
                    </li>
                    <li className="min-w-max">
                        <a href="#" className="bg group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-primary-400 duration-300">
                            <img src='../icon/template.svg'/>
                            <span className={`${showSidebar ? "" : "hidden"} group-hover:text-gray-700 duration-300`}>List Seminar</span>
                            <link href="/list_seminar" rel="canonical" />
                        </a>
                    </li>
                    <li className="min-w-max">
                        <a href="#" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-primary-400 duration-300">
                            <img src='../icon/certificate.svg'/>
                            <span className={`${showSidebar ? "" : "hidden"} group-hover:text-gray-700 duration-300`}>List Sertifikat</span>
                        </a>
                    </li>
                    <li className="min-w-max">
                        <a href="#" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-primary-400 duration-300">
                            <img src='../icon/berkas.svg'/>
                            <span className={`${showSidebar ? "" : "hidden"} group-hover:text-gray-700 duration-300`}>Pembaruan Berkas</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col w-max mx-auto -mb-3">
                <button onClick={handleLogout} className="group flex items-center space-x-4 px-9 py-2 text-gray-600">
                    <img src="../icon/logout.svg" className="w-10 h-10 p-1" />
                    <div className={`${showSidebar ? "" : "hidden"}`}>
                        <span className="text-white font-bold">Keluar</span>
                    </div>
                </button>
                <div className="my-4 bg-white h-[1px] w-96"></div>
                <a href="#" className="group flex items-center space-x-4 rounded-md px-9 py-2 text-gray-600">
                    <img src="../face.png" className="w-10 h-10 rounded-full"/>
                    <div className={`${showSidebar ? "" : "hidden"} flex flex-col`}>
                        <span className="text-white font-bold">User</span>
                        <span className="text-white">user@gmail.com</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}
