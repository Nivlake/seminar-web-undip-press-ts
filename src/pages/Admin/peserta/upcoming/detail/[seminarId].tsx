import Admin_Sidebar from "components/Admin_Sidebar";
import React from "react";
import {useRouter} from 'next/router';
import {useEffect,useState} from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
import Link from "next/link";
import ExcelJS from 'exceljs';
import FileSaver from 'file-saver';

export default function upcoming(){
    const [attendance, setAttendance] = useState([true, false, true]); // Dummy attendance data
    const handleToggleAttendance = (index) => {
        const updatedAttendance = [...attendance];
        updatedAttendance[index] = !updatedAttendance[index];
        setAttendance(updatedAttendance);
    };
    const router = useRouter();
    const pathSegments = router.asPath.split('/');
    const seminar = pathSegments[pathSegments.length - 1];
    const [participantData, setParticipantData] = useState(null);
    const [namaseminar, setNamaSeminar] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = localStorage.getItem('access_token');
            const config = {
              headers: {
                // Add your desired headers here
                'Authorization': `${token}`
              },
            };
      
            const response = await axios.get(`https://walrus-app-elpr8.ondigitalocean.app/api/seminars/${seminar}`, config);
            if (response) {
              setParticipantData(response.data.applicants);
              setNamaSeminar(response.data.nama_seminar);
            //   console.log(response.data.applicants) // Assuming the actual data is stored in response.data
            }
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
      }, []);


      //handle using excel js to download excel file based on participantdata
        const handleDownload = async () => {
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet(namaseminar);
            worksheet.columns = [
                { header: 'Nama', key: 'participant_name', width: 30 },
                { header: 'Identitas', key: 'participant_phone', width: 30 },
                {header: 'Email', key: 'participant_email', width: 30},
                { header: 'instansi', key: 'participant_instansi', width: 30},
                { header: 'fakultas', key: 'participant_fakultas', width: 30},
                { header: 'posisi', key: 'participant_posisi', width: 30},
                { header: 'Kehadiran', key: 'attendance', width: 30 },
            ];
            worksheet.addRows(participantData);
            const buf = await workbook.xlsx.writeBuffer();
            const blob = new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            FileSaver.saveAs(blob, `Daftar Hadir ${namaseminar}.xlsx`);
        };
      useEffect(() => {
        if (participantData !== null) {
          console.log(participantData);
          // Perform any other operations that depend on participantData
        }
      }, [participantData]);
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
                                    <th className="px-4 py-2">Nama</th>
                                    <th className="px-4 py-2">Identitas</th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                {participantData && participantData.map((participant) => (
                                        <tr key={participant.participant_id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">{participant.participant_name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">{participant.participant_phone}</td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            </table>

                            </div>
                            {/* Page */}
                            <div className="flex w-fit gap-2.5 mt-2.5 ml-auto">
                            <button onClick={handleDownload} className="btn inline-block px-6 py-2.5 bg-white border-t border-r border-b border-solid border-gray-300 text-blue-700 font-medium text-xs leading-tight uppercase rounded-r shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
    Export to Excel
</button>
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