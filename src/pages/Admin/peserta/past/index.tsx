import Admin_Sidebar from "components/Admin_Sidebar";
import React from "react";
import {useEffect, useState} from 'react';
import axios from "axios";
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Link from "next/link";


export default function upcoming(){
    const [showModal, setShowModal] = useState(false);
    const [seminarData, setSeminarData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://walrus-app-elpr8.ondigitalocean.app/api/seminars/past');
            if (response) {
              setSeminarData(response.data); // Assuming the actual data is stored in response.data
            }
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
    }, []);
      
      useEffect(() => {
        if (seminarData !== null) {
          console.log(seminarData);
          // Perform any other operations that depend on seminarData
        }
      }, [seminarData]);
    const Delete = () =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    const Save = () =>{
        Swal.fire({
            title: 'Do you want to save the changes?',
            showCancelButton: true,
            confirmButtonText: 'Save',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            }
          })
    }
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Calculate the index range for the current page
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = seminarData && seminarData.slice(indexOfFirstRow, indexOfLastRow);

    return(
        <>
            <div className="flex">
                <aside className="h-screen sticky top-0">
                    <Admin_Sidebar/>
                </aside>
                <div className="w-screen flex flex-col p-8 gap-6 flex-grow">
                    <h1 className="text-3xl font-semibold px-2.5">Past Seminar</h1>
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
                                <thead className="bg-gray-700 text-white">
                                    <tr>
                                        <th className="px-6 py-3 text-left uppercase tracking-wider text-center">Judul</th>
                                        <th className="px-6 py-3 text-left uppercase tracking-wider text-center">Tanggal Penyelenggaraan</th>
                                        <th className="px-6 py-3 text-left uppercase tracking-wider text-center">Total Peserta</th>
                                        <th className="px-6 py-3 text-left uppercase tracking-wider text-center"></th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                    {seminarData && currentRows.map((seminar) => (
                                        <tr key={seminar.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{seminar.name.slice(0,50)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{seminar.date_and_time}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{seminar.participant_count} Orang</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                                            <Link href={`/Admin/peserta/past/detail/${seminar.id}`}>
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Details
                                                </button>
                                            </Link>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                {/* Modal */}
                                {showModal ? (
                                <div className="fixed z-10 inset-0">
                                    <div className="flex items-center justify-center min-h-screen">
                                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
                                    <div className="relative bg-white rounded-lg p-6 gap-6 overflow-y-scroll max-h-[80vh]">
                                        <button
                                        className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-600"
                                        onClick={() => setShowModal(false)}
                                        >
                                        <svg
                                            className="h-6 w-6 fill-current"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title>Close</title>
                                            <path
                                            d="M14.348 14.849a1 1 0 01-1.414 0l-3.536-3.535-3.536 3.535a1 1 0 01-1.414 0 1 1 0 010-1.414l3.535-3.536-3.535-3.536a1 1 0 010-1.414 1 1 0 011.414 0l3.536 3.535 3.536-3.535a1 1 0 011.414 0 1 1 0 010 1.414l-3.535 3.536 3.535 3.536a1 1 0 010 1.414z"
                                            ></path>
                                        </svg>
                                        </button>
                                        <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
                                        {/* content */}
                                        <form action="" className="flex flex-col px-2.5 gap-5">
                                        <div className="flex w-[14.5rem] h-[14.5rem] bg-neutral-500 justify-center items-center">
                                            <h3 className="text-white">Insert Image Here</h3>
                                        </div>
                                        <div className="flex w-[44.188rem] h-[12.438rem] bg-neutral-500 justify-center items-center">
                                            <h3 className="text-white">Insert Image Here</h3>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex h-11 gap-8 items-center">
                                            <h3 className="w-[8.875rem]">Nama Seminar</h3>
                                            <input type="text" className="w-[38.625rem] h-full border border-neutral-300 rounded-md" />
                                        </div>
                                        <div className="flex h-[10.25rem] gap-8 items-center">
                                            <h3 className="w-[8.875rem]">Deskripsi</h3>
                                            <textarea className="w-[38.625rem] h-full border border-neutral-300 rounded-md" />
                                        </div>
                                        <div className="flex h-11 gap-8 items-center">
                                            <h3 className="w-[8.875rem]">Nama Pembicara</h3>
                                            <input type="text" className="w-[38.625rem] h-full border border-neutral-300 rounded-md" />
                                        </div>
                                        <div className="flex h-11 gap-8 items-center">
                                            <h3 className="w-[8.875rem]">Kategori</h3>
                                            <input type="text" className="w-[38.625rem] h-full border border-neutral-300 rounded-md" />
                                        </div>
                                        <div className="flex h-11 gap-8 items-center">
                                            <h3 className="w-[8.875rem]">Tanggal Penyelenggaraan</h3>
                                            <input type="date" className="w-[11.75rem] h-full border border-neutral-300 rounded-md" />
                                        </div>
                                        </div>
                                        </form>
                                        <div className="flex flex-row gap-2.5 mt-5">
                                            <button className="flex flex-row bg-success-600 py-2.5 px-7 rounded-lg"
                                            onClick={Save}>
                                            <h3>Save</h3>
                                            </button>
                                            <button className="flex flex-row bg-danger-600 py-2.5 px-5 rounded-lg"
                                            onClick={() => setShowModal(false)}>
                                            <h3>Cancel</h3>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                ) : null}
                            </div>
                            {/* Page */}
                            <div className="flex gap-2.5 mt-2.5 justify-between">
                              {/* Page select */}
                              <div className="flex p-2.5 gap-2.5 bg-danger-700 rounded-lg text-base font-medium">
                                <select
                                  id="pageselect"
                                  className="bg-danger-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  value={rowsPerPage}
                                  onChange={(e) => {
                                    setRowsPerPage(parseInt(e.target.value));
                                    setCurrentPage(1); // Set currentPage to 1 on select change
                                  }}
                                >
                                  <option value="5">5</option>
                                  <option value="10">10</option>
                                  <option value="20">20</option>
                                  <option value={seminarData ? seminarData.length : 0}>All</option>
                                </select>
                              </div>

                              {/* Page Navigation */}
                              <div className="flex p-2.5 gap-2.5 bg-danger-700 rounded-lg text-base font-medium text-white">
                                <div className="flex align-center gap-2.5">
                                  <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                                    <img src="/icon/chevron-double-left.svg" alt="" />
                                  </button>
                                  <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                                    <img src="/icon/chevron-left-admin.svg" alt="" />
                                  </button>
                                </div>
                                <div className="flex gap-5">
                                  {currentPage !== 1 && (
                                    <>
                                      <span className="self-end">...</span>
                                      <button type="button" onClick={() => setCurrentPage(currentPage - 1)}>
                                        {currentPage - 1}
                                      </button>
                                    </>
                                  )}
                                  <button type="button" className="w-8 bg-white text-red-500 font-bold rounded-lg">
                                    {currentPage}
                                  </button>
                                  {currentPage !== Math.ceil(seminarData && seminarData.length / rowsPerPage) && (
                                    <>
                                      <button type="button" onClick={() => setCurrentPage(currentPage + 1)}>
                                        {currentPage + 1}
                                      </button>
                                      <span className="self-end">...</span>
                                    </>
                                  )}
                                </div>
                                <div className="flex align-center gap-2.5">
                                  <button
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    disabled={currentPage === Math.ceil(seminarData && seminarData.length / rowsPerPage)}
                                  >
                                    <img src="/icon/chevron-right-admin.svg" alt="" />
                                  </button>
                                  <button
                                    onClick={() => setCurrentPage(Math.ceil(seminarData && seminarData.length / rowsPerPage))}
                                    disabled={currentPage === Math.ceil(seminarData && seminarData.length / rowsPerPage)}
                                  >
                                    <img src="/icon/chevron-double-right.svg" alt="" />
                                  </button>
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