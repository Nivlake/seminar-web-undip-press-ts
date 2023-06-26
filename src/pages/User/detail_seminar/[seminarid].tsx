import React, { useEffect, useState } from 'react'
import Sidebar_2 from 'components/Sidebar_2'
import Komentar from 'components/Komentar'
import { useRouter } from 'next/router';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function detail_seminar() {
    const router = useRouter();
    const pathSegments = router.asPath.split('/');
    const seminar_id = pathSegments[pathSegments.length - 1];
    const [seminarData, setSeminarData] = useState(null);
    const [user, setUser] = useState(null);
    const [appliedSeminars, setAppliedSeminars] = useState(null);
    const [isApplied, setIsApplied] = useState(false);



  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const appliedSeminars = localStorage.getItem("seminar_applied");
    setAppliedSeminars(appliedSeminars);
    const seminar_id = localStorage.getItem('seminar_id');
    const isSeminarApplied = appliedSeminars && appliedSeminars.includes(seminar_id);
    setIsApplied(isSeminarApplied);
    console.log(isSeminarApplied);
    

    axios.get('https://walrus-app-elpr8.ondigitalocean.app/api/user', { headers: { Authorization: `${token}`, } })
      .then(response => {
        setUser(response.data);
        console.log(response);
        localStorage.setItem('seminar_applied', response.data.seminar_applied);
        //SINI
        const isSeminarApplied =
          response.data.seminar_applied &&
          response.data.seminar_applied.includes(seminar_id);
      setIsApplied(isSeminarApplied);
      })
      .catch(error => {
        console.log(error);
        console.log(token)
      });
  }, []);
    const handleSeminarApply = async () => {
        const token = localStorage.getItem('access_token');
        try {
            axios.post(`https://walrus-app-elpr8.ondigitalocean.app/api/seminars/${seminar_id}/apply`, {
                // Add request data here, if any
              }, {
                headers: {
                  Authorization: `${token}`
                }
              })
              .then(response => {
                router.push('/User');
                // Handle successful response here
                console.log(response.data);
                const succesMessage = JSON.stringify(response.data.message);
                Swal.fire({
                    icon: 'success',
                    title: 'Yeay!',
                    text: `${succesMessage}`,
                  })
                setIsApplied(true); // Set isApplied to true after successful application
              })
              .catch(error => {
                // Handle error here
                console.log(error.response.data);
                const errorMessage = JSON.stringify(error.response.data.error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${errorMessage}`,
                  })
              });
        } catch(error) {
             // Log the error response
        }
    }

    const handleSeminarCancel = async () => {
      const token = localStorage.getItem('access_token');
      try {
          axios.post(`https://walrus-app-elpr8.ondigitalocean.app/api/seminars/${seminar_id}/cancel`, {
              // Add request data here, if any
            }, {
              headers: {
                Authorization: `${token}`
              }
            })
            .then(response => {
              router.push('/User');
              // Handle successful response here
              console.log(response.data);
              const succesMessage = JSON.stringify(response.data.message);
              Swal.fire({
                  icon: 'success',
                  title: 'Yeay!',
                  text: `${succesMessage}`,
                })
              setIsApplied(false); // Set isApplied to true after successful application
            })
            .catch(error => {
              // Handle error here
              console.log(error.response.data);
              const errorMessage = JSON.stringify(error.response.data.error);
              Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: `${errorMessage}`,
                })
            });
      } catch(error) {
           // Log the error response
      }
  }


    
    useEffect(() => {
        const fetchData = async () => {
          const segments = window.location.href.split('/');
          if (localStorage.getItem('seminar_id') === 'undefined' || localStorage.getItem('seminar_id') !== segments[segments.length - 1]) {
            const seminar_id = segments[segments.length - 1];
            localStorage.setItem('seminar_id', seminar_id);
          }
          try {
            const token = localStorage.getItem('access_token');
            const seminar_id = localStorage.getItem('seminar_id');
            const config = {
              headers: {
                // Add your desired headers here
                'Authorization': `${token}`
              },
            };
      
            const response = await axios.get(`https://walrus-app-elpr8.ondigitalocean.app/api/seminars/details/${seminar_id}`, config);
            if (response) {
                setSeminarData(response.data.seminar);
            //   console.log(response.data.applicants) // Assuming the actual data is stored in response.data
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
          // Perform any other operations that depend on participantData
        }
      }, [seminarData]);
  return (
    <>
        <div className="flex">
            <aside className="h-screen sticky top-0">
                <Sidebar_2/>
            </aside>
            <div className="p-8 flex-col space-y-6 w-full">
                <div className="p-4">
                    <div className="flex flex-row flex justify-between items-center leading-normal w-10/12">
                        <div className="gap-2.5 flex flex-row">
                            <img src="/index1.svg" alt="" />
                            <div className="flex flex-col p-2.5 gap-2.5">
                                <div className="flex flex-row gap-2.5">
                                    <h3 className="w-fit px-2.5 rounded-lg border border-black border-2">{seminarData && seminarData.category}</h3>
                                </div>
                                <h1 className="text-5xl font-bold tracking-tight text-black">{seminarData && seminarData.name}</h1>
                                <h2 className="">Penyelenggara Seminar</h2>
                            </div> 
                        </div>
                        <div className="flex flex-col gap-2.5 p-2.5 text-center space-x-4 w-3/12">
                            <p>&nbsp;&nbsp;Terbuka Hingga:</p>
                            <p className="font-bold">12/02/2023</p>
                            <p>Sisa Kuota:</p>
                            <p className="font-bold">{(seminarData && seminarData.quota) - (seminarData && seminarData.participant_count)}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between leading-normal w-10/12">
                    <div className="p-4 space-y-4 w-8/12">
                        <h1 className="text-2xl font-bold">Deskripsi</h1>
                        <div className="w-full bg-neutral-500">
                            <p className="font-bold text-white text-center py-[5.2rem]">Image Place In Here</p>
                        </div>
                        <p className="text-justify">
                            {seminarData && seminarData.full_description}
                        </p>
                    </div>
                    <div className="flex flex-col p-4 gap-2">
                        <h1 className="text-2xl font-bold">Keikutsertaan</h1>
                        {isApplied ? (
                          <button
                            className="bg-danger-500 hover:bg-danger-400 w-full rounded-lg px-8 py-1 text-white"
                            onClick={handleSeminarCancel}
                          >
                            Cancel
                          </button>
                        ) : (
                          <button
                            className="bg-primary-500 hover:bg-primary-400 w-full rounded-lg px-8 py-1 text-white"
                            onClick={handleSeminarApply}
                          >
                            Daftar
                          </button>
                        )}
                        <h1 className="text-2xl font-bold">Jadwal Pelaksanaan</h1>
                        <p>Mulai : 05 Januari 2023 11.00</p>
                        <p>Selesai : 05 Januari 2023 13.00</p>
                        <h1 className="text-2xl font-bold">Lokasi</h1>
                        <div className="flex flex-row gap-4">
                            <img src="../../icon/location.svg"/>
                            <div className="flex flex-col">
                                <p>UPT Perpustakaan</p>
                                <p>dan Undip Press, Semarang</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Feedback</h1>
                    {/* Komentar */}
                    <Komentar/>
                    {/* Komentar */}
                    <Komentar/>
                    {/* Komentar */}
                    <Komentar/>
                </div>
            </div>
        </div>
    </>
  )
}