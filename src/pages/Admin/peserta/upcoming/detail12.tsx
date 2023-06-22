import Admin_Sidebar from "components/Admin_Sidebar";
import React from "react";
import {useRouter} from 'next/router';
import {useState} from 'react';
import Swal from 'sweetalert2';
import Link from "next/link";


export default function upcoming(){
    const [attendance, setAttendance] = useState([true, false, true]); // Dummy attendance data
    const handleToggleAttendance = (index) => {
        const updatedAttendance = [...attendance];
        updatedAttendance[index] = !updatedAttendance[index];
        setAttendance(updatedAttendance);
    };
    const router = useRouter();
    const { seminarId } = router.query;
    return(
        <>
            <div className="flex">
                <aside className="h-screen sticky top-0">
                    <Admin_Sidebar/>
                </aside>
                <div className="w-screen flex flex-col p-8 gap-6 flex-grow">
                    <h1 className="text-3xl font-semibold px-2.5">Upcoming Seminar</h1>
                    <div className="p-2.5">
                        <div className="container flex flex-col bg-primary-300 rounded-lg p-5 gap-2.5">
                            {/* search bar */}
                            <div className="flex justify-end">
                                <div className="mb-3 xl:w-96">
                                    <div className="input-group relative flex flex-row items-stretch w-full">
                                        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-t border-l border-b border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                                        <button className="btn inline-block px-6 py-2.5 bg-white border-t border-r border-b border-solid border-gray-300 text-white font-medium text-xs leading-tight uppercase rounded-r shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                            <img src="/icon/search.svg" alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                            <table className="table-auto w-full">
                                <thead>
                                <tr className="bg-gray-700 text-white">
                                    <th className="px-4 py-2">No</th>
                                    <th className="px-4 py-2">Nama</th>
                                    <th className="px-4 py-2">Identitas</th>
                                    <th className="px-4 py-2">Email</th>
                                    <th className="px-4 py-2">Kehadiran</th>
                                </tr>
                                </thead>
                                <tbody className="bg-gray-700 text-white">
                                <tr>
                                    <td className="border px-4 py-2">1</td>
                                    <td className="border px-4 py-2">John Doe</td>
                                    <td className="border px-4 py-2">123456</td>
                                    <td className="border px-4 py-2">johndoe@example.com</td>
                                    <td className="border px-4 py-2">
                                    <button
                                        className={`${
                                        attendance[0] ? 'bg-green-500' : 'bg-red-500'
                                        } hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded`}
                                        onClick={() => handleToggleAttendance(0)}
                                    >
                                        {attendance[0] ? 'Hadir' : 'Tidak Hadir'}
                                    </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">2</td>
                                    <td className="border px-4 py-2">Jane Smith</td>
                                    <td className="border px-4 py-2">789012</td>
                                    <td className="border px-4 py-2">janesmith@example.com</td>
                                    <td className="border px-4 py-2">
                                    <button
                                        className={`${
                                        attendance[1] ? 'bg-green-500' : 'bg-red-500'
                                        } hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded`}
                                        onClick={() => handleToggleAttendance(1)}
                                    >
                                        {attendance[1] ? 'Hadir' : 'Tidak Hadir'}
                                    </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">3</td>
                                    <td className="border px-4 py-2">Bob Johnson</td>
                                    <td className="border px-4 py-2">345678</td>
                                    <td className="border px-4 py-2">bobjohnson@example.com</td>
                                    <td className="border px-4 py-2">
                                    <button
                                        className={`${
                                        attendance[2] ? 'bg-green-500' : 'bg-red-500'
                                        } hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded`}
                                        onClick={() => handleToggleAttendance(2)}
                                    >
                                        {attendance[2] ? 'Hadir' : 'Tidak Hadir'}
                                    </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                            {/* Page */}
                            <div className="flex w-fit gap-2.5 mt-2.5 ml-auto">
                                <div className="flex p-2.5 gap-2.5 bg-danger-700 rounded-lg text-base font-medium text-white">
                                    <div className="flex align-center gap-2.5">
                                        <button><img src="/icon/chevron-double-left.svg" alt="" /></button>
                                        <button><img src="/icon/chevron-left-admin.svg" alt="" /></button>
                                    </div>
                                    <div className="flex gap-5">
                                        <button type="button">1</button>
                                        <button type="button">2</button>
                                        <button type="button">3</button>
                                        <button type="button">4</button>
                                        <button type="button" disabled>...</button>
                                    </div>
                                    <div className="flex align-center gap-2.5">
                                        <button><img src="/icon/chevron-right-admin.svg" alt="" /></button>
                                        <button><img src="/icon/chevron-double-right.svg" alt="" /></button>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}