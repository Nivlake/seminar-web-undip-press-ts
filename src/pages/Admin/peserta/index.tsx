import Admin_Sidebar from "components/Admin_Sidebar";
import React from "react";
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import axios from "axios";
import Swal from 'sweetalert2';
import Link from "next/link";

export default function Seminar(){
    // Upcoming
    const [seminarDataUpcoming, setseminarDataUpcoming] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://walrus-app-elpr8.ondigitalocean.app/api/seminars/upcoming');
            if (response) {
              setseminarDataUpcoming(response.data); // Assuming the actual data is stored in response.data
            }
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
      }, []);
      
      useEffect(() => {
        if (seminarDataUpcoming !== null) {
          console.log(seminarDataUpcoming);
          // Perform any other operations that depend on seminarDataUpcoming
        }
      }, [seminarDataUpcoming]);

    // Past
    const [seminarDataPast, setseminarDataPast] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://walrus-app-elpr8.ondigitalocean.app/api/seminars/past');
            if (response) {
              setseminarDataPast(response.data); // Assuming the actual data is stored in response.data
            }
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
      }, []);
      
      useEffect(() => {
        if (seminarDataPast !== null) {
          console.log(seminarDataPast);
          // Perform any other operations that depend on seminarDataPast
        }
      }, [seminarDataPast]);

    return(
        <>
            <div className="flex">
                <aside className="h-screen sticky top-0">
                    <Admin_Sidebar/>
                </aside>
                <div className="w-full flex flex-col p-8 gap-6">
                    <h1 className="text-3xl font-semibold px-2.5">Manajemen Peserta</h1>
                    <div className="container flex flex-row p-2.5 gap-5">
                        <div className="w-full flex flex-col gap-[1.875rem]">
                            {/* Card */}
                            <div className="w-full flex flex-col p-5 gap-2.5 bg-primary-500 rounded-lg justify-between">
                                <div className="w-full flex justify-between">
                                    <h2 className="font-bold text-xl text-white">Upcoming Seminar</h2>
                                    <Link href="/Admin/peserta/upcoming"><button type="button" className="font-bold text-medium underline underline-offset-1 text-white">see all</button></Link>
                                </div>
                                {/* Bagian Bawah */}
                                {seminarDataUpcoming && seminarDataUpcoming.slice(0, 4).map((seminarUpcoming) => (
                                <div className="flex flex-col border-t-2 border-white">
                                    <div className="flex justify-between">
                                    <div className="flex flex-col">
                                        <h2 className="font-bold text-base text-white">{seminarUpcoming.name}</h2>
                                        <h3 className="font-medium text-sm text-white">{seminarUpcoming.speaker}</h3>
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-base text-white">Total Pendaftar</h2>
                                        <h3 className="font-medium text-sm text-white text-right">{seminarUpcoming.participant_count} Orang</h3>
                                    </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            <div className="w-full flex flex-col p-5 gap-2.5 bg-primary-500 rounded-lg justify-between">
                                <div className="w-full flex justify-between">
                                    <h2 className="font-bold text-xl text-white">Past Seminar</h2>
                                    <Link href="/Admin/peserta/past"><button type="button" className="font-bold text-medium underline underline-offset-1 text-white">see all</button></Link>
                                </div>
                                {/* Bagian Bawah */}
                                {seminarDataPast && seminarDataPast.slice(0, 4).map((seminarPast) => (
                                    <div className="flex flex-col border-t-2 border-white">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col">
                                            <h2 className="font-bold text-base text-white">{seminarPast.name.slice(0,30)}</h2>
                                            <h3 className="font-medium text-sm text-white">{seminarPast.speaker}</h3>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-base text-white">Total Hadir</h2>
                                            <h3 className="font-medium text-sm text-white text-right">{seminarPast.participant_count} Orang</h3>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                        {/* Kanan */}
                        <div className="flex flex-col">
                            
                        </div>
                    </div> 
                </div>
            </div>
        </>
    );
}