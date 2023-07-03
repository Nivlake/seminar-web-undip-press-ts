import React from "react";
import { ChangeEvent, useState } from "react";
import Admin_Sidebar from 'components/Admin_Sidebar';
import Swal from 'sweetalert2';
import axios from "axios"
import { useRouter } from 'next/router';
import { toast } from "react-toastify"


export default function createSeminar(){
  const router = useRouter();
  const [name, setNamaSeminar] = useState("");
  const [short_description, setDeskripsi] = useState("");
  const [speaker, setPembicara] = useState("");
  const [category, setKategori] = useState("");
  const [date_and_time, settanggalPenyelenggaraan] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [alamat, setAlamat] = useState("");
  const [inputValue, setInputValue] = useState('');
  const [quota, setQuota] = useState('');
  const [full_description, setFullDescription] = useState('');


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
  // const formatDateTime = (dateTime) => {
  //   const selectedDate = new Date(dateTime);
  //   const day = selectedDate.getDate().toString().padStart(2, '0');
  //   const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
  //   const year = selectedDate.getFullYear();
  //   const hours = selectedDate.getHours().toString().padStart(2, '0');
  //   const minutes = selectedDate.getMinutes().toString().padStart(2, '0');
  //   const seconds = selectedDate.getSeconds().toString().padStart(2, '0');
  //   return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  // };
  const handleCreateSeminar = async () => {
    const date = new Date(date_and_time);
    const formattedDate = date.toISOString().split('T')[0];
    const formattedTime = date.toTimeString().split(' ')[0];
  
    const data = {
      name: name,
      short_description: short_description,
      full_description: full_description,
      speaker: speaker,
      category: category,
      date_and_time: `${formattedDate} ${formattedTime}`,
      lokasi: lokasi,
      quota: parseInt(quota),
      alamat: alamat,
    };
  
    console.log('Sending data:', data);
    try {
      const token = localStorage.getItem('access_token');
      const response = await axios.post(
        'https://walrus-app-elpr8.ondigitalocean.app/api/seminars',
        data,
        {
          headers: {
            'Authorization': `${token}`, // Replace YOUR_AUTH_TOKEN with the actual authorization token
          },
        }
      );
      if (response.data.errors) {
        console.log('Waduh');
      } else {
        toast.success('Adding seminar succesfull!');
        router.push('/Admin/seminar');
      }
    } catch (error) {
      if (error.response.data.name != null) {
        console.error(error.response.data);
        toast.error(error.response.data.name[0]);
      }
      else if (error.response.data.short_description != null) {
        console.error(error.response.data);
        toast.error(error.response.data.short_description[0]);
      }
      else if (error.response.data.full_description != null) {
        console.error(error.response.data);
        toast.error(error.response.data.full_description[0]);
      }
      else if (error.response.data.speaker != null) {
        console.error(error.response.data);
        toast.error(error.response.data.speaker[0]);
      }
      else if (error.response.data.category != null) {
        console.error(error.response.data);
        toast.error(error.response.data.category[0]);
      }
      else if (error.response.data.date_and_time != null) {
        console.error(error.response.data);
        toast.error(error.response.data.date_and_time[0]);
      }
      else if (error.response.data.lokasi != null) {
        console.error(error.response.data);
        toast.error(error.response.data.lokasi[0]);
      }
      else if (error.response.data.quota != null) {
        console.error(error.response.data);
        toast.error(error.response.data.quota[0]);
      }
      else if (error.response.data.alamat != null) {
        console.error(error.response.data);
        toast.error(error.response.data.alamat[0]);
      }
    }
  };
  
    const Save = async () => {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showCancelButton: true,
        confirmButtonText: 'Save',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await handleCreateSeminar();
            Swal.fire('Saved!', '', 'success');
          } catch (error) {
            // Handle the error case
            Swal.fire('Save failed!', '', 'error');
          }
        }
      });
    };
    
  const [selectedOption, setSelectedOption] = useState("");
  const handleFirstOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setLokasi(selectedValue);
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    setAlamat(inputValue); // Send the input value to the setAlamat function
  };

  return (
    <>
      <div className="flex">
        <aside className="h-screen sticky top-0">
          <Admin_Sidebar/>
        </aside>
        <div className="w-full flex flex-col p-8 gap-6">
          <h1 className="text-3xl font-semibold px-2.5">Buat Seminar Baru</h1>
          {/* Form */}
          <form action="" className="flex flex-col px-2.5 gap-5">
            {/* <div className="flex w-[14.5rem] h-[14.5rem] bg-neutral-500 justify-center items-center">
              <h3 className="text-white">Insert Image Here</h3>
            </div>
            <div className="flex w-[44.188rem] h-[12.438rem] bg-neutral-500 justify-center items-center">
              <h3 className="text-white">Insert Image Here</h3>
            </div> */}
            <div className="flex flex-col gap-4">
              <div className="flex h-11 gap-8 items-center">
                <h3 className="w-[8.875rem]">Nama Seminar</h3>
                <input type="text" className="w-[38.625rem] h-full border border-neutral-300 rounded-md" onChange={(e) => setNamaSeminar(e.target.value)} />
              </div>
              <div className="flex h-[10.25rem] gap-8 items-center">
                <h3 className="w-[8.875rem]">Deskripsi Pendek</h3>
                <textarea className="w-[38.625rem] h-full border border-neutral-300 rounded-md" onChange={(e) => setDeskripsi(e.target.value)}/>
              </div>
              <div className="flex h-[10.25rem] gap-8 items-center">
                <h3 className="w-[8.875rem]">Deskripsi Panjang</h3>
                <textarea className="w-[38.625rem] h-full border border-neutral-300 rounded-md" onChange={(e) => setFullDescription(e.target.value)}/>
              </div>
              <div className="flex h-11 gap-8 items-center">
                <h3 className="w-[8.875rem]">Nama Pembicara</h3>
                <input type="text" className="w-[38.625rem] h-full border border-neutral-300 rounded-md" onChange={(e) => setPembicara(e.target.value)}/>
              </div>
              <div className="flex h-11 gap-8 items-center">
                <h3 className="w-[8.875rem]">Kategori</h3>
                <input type="text" className="w-[38.625rem] h-full border border-neutral-300 rounded-md" onChange={(e) => setKategori(e.target.value)}/>
              </div>
              <div className="flex h-11 gap-8 items-center">
                <h3 className="w-[8.875rem]">Kuota</h3>
                <input
                  type="number"
                  className="w-[38.625rem] h-full border border-neutral-300 rounded-md"
                  onChange={(e) => setQuota(e.target.value)}
                />
              </div>
              <div className="flex h-11 gap-8 items-center">
                <h3 className="w-[8.875rem]">Tanggal dan Waktu Penyelenggaraan</h3>
                <input
                  type="datetime-local"
                  className="w-[11.75rem] h-full border border-neutral-300 rounded-md"
                  onChange={(e) => settanggalPenyelenggaraan(e.target.value)}
                />
              </div>

              <div className="flex h-11 gap-8 items-center">
                <h3 className="w-[8.875rem]">Lokasi</h3>
                {/* <button className="w-[11.75rem] h-full border border-neutral-300 rounded-md"></button> */}
                <div className="flex flex-col gap-1 h-5">
                  <div className="flex flex-col gap-2.5 justify-center">
                    <div>
                      <select
                        className="w-[11.75rem] border border-neutral-300 rounded-lg"
                        name=""
                        id=""
                        value={selectedOption}
                        onChange={handleFirstOptionChange}
                      >
                        <option value="">---</option>
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
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                    )}
                    {selectedOption === "Offline" && (
                      <input
                        type="text"
                        placeholder="Masukkan Alamat Lengkap"
                        className="w-[38.625rem] h-11 border border-neutral-300 rounded-md"
                        value={inputValue}
                        onChange={handleInputChange}            
                      />
                    )}
                  </div>
                </div>
            </div>
            </div>
          </form>
          <div className="flex flex-row gap-2.5 mt-7">
            <button 
            className="flex flex-row bg-info-600 py-2.5 px-7 rounded-lg text-white"
            onClick={Save}>
              <h3>Save</h3>
            </button>
            <button 
            className="flex flex-row bg-danger-600 py-2.5 px-5 rounded-lg text-white"
            onClick={Delete}>
              <h3>Cancel</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
