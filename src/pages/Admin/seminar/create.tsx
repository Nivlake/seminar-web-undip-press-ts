import React from "react";
import { ChangeEvent, useState } from "react";
import Admin_Sidebar from 'components/Admin_Sidebar';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';


export default function createSeminar(){
  const router = useRouter();
  const Delete = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      router.push('/Admin/seminar');
    }
  };
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
  const [selectedOption, setSelectedOption] = useState("");
  const handleFirstOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="flex">
        <aside className="h-screen sticky top-0">
          <Admin_Sidebar/>
        </aside>
        <div className="w-full flex flex-col p-8 gap-6">
          <h1 className="text-3xl font-semibold px-2.5">Data Seminar</h1>
          {/* Form */}
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
              <div className="flex h-11 gap-8 items-center">
                <h3 className="w-[8.875rem]">Lokasi</h3>
                {/* <button className="w-[11.75rem] h-full border border-neutral-300 rounded-md"></button> */}
                <div className="flex flex-col gap-1 h-5">
                  <div className="flex flex-col gap-2.5 justify-center">
                    <div className="">
                      <select
                        className="w-[11.75rem] border border-neutral-300 rounded-lg"
                        name=""
                        id=""
                        value={selectedOption}
                        onChange={handleFirstOptionChange}
                      >
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex h-11 items-center">
                    {selectedOption === "Online" && (
                      <input
                        type="text"
                        placeholder="Masukkan Link Webinar"
                        className="w-[38.625rem] h-11 border border-neutral-300 rounded-md"
                      />
                    )}
                    {selectedOption === "Offline" && (
                      <input
                        type="text"
                        placeholder="Masukkan Alamat Lengkap"
                        className="w-[38.625rem] h-11 border border-neutral-300 rounded-md"
                      />
                    )}
                  </div>
                </div>
            </div>
            </div>
          </form>
          <div className="flex flex-row gap-2.5 mt-7">
            <button 
            className="flex flex-row bg-success-600 py-2.5 px-7 rounded-lg"
            onClick={Save}>
              <h3>Save</h3>
            </button>
            <button 
            className="flex flex-row bg-danger-600 py-2.5 px-5 rounded-lg"
            onClick={Delete}>
              <h3>Cancel</h3>
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
}
