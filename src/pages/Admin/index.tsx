import Admin_Sidebar from "components/Admin_Sidebar";
import Link from "next/link";
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Admin(){
    const [user, setUser] = useState(null);

    useEffect(() => {
      const token = localStorage.getItem('access_token');
      axios.get('https://walrus-app-elpr8.ondigitalocean.app/api/user', { headers: { Authorization: `${token}`, } })
        .then(response => {
          setUser(response.data);
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          console.log(token)
        });
    }, []);
    return (
        <>
            <div className="flex">
                <aside className="h-screen sticky top-0">
                    <Admin_Sidebar/>
                </aside>
                <div className="p-8 gap-6">
                    <h1 className="text-3xl font-semibold px-2.5">Selamat Datang, {user && user.name}</h1>
                    <div className="flex flex-col gap-2.5">
                        <div className="container mt-6 flex flex-row gap-5 mx-auto">  
                            {/* Card */}
                            <Link href="/Admin/seminar" className="flex flex-col w-[28.563rem] items-center bg-primary-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-primary-400">
                                <div className="flex flex-row items-center justify-between py-[1.688rem] px-[3.75rem] leading-normal">
                                    <img src="/icon/seminar.svg" alt="" />
                                    <h5 className="ml-3 text-2xl font-bold tracking-tight text-black">Manajemen Seminar</h5>
                                </div>
                            </Link>
                            {/* Card */}
                            <Link href="/Admin/peserta" className="flex flex-col w-[28.563rem] items-center bg-primary-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-primary-400">
                                <div className="flex flex-row items-center justify-between py-[1.688rem] px-[3.75rem] leading-normal">
                                    <img src="/icon/user_admin2.svg" alt="" />
                                    <h5 className="ml-3 text-2xl font-bold tracking-tight text-black">Manajemen Peserta</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}