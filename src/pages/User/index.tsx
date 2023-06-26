import Link from 'next/link'
import Sidebar_2 from 'components/Sidebar_2'
import Seminar from 'components/Seminar'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Komentar from 'components/Komentar';
import Notifikasi from 'components/Notifikasi';

export default function User_Dashboard_Home() {
    const [seminarApplied, setSeminarApplied] = useState(null);
    const [user, setUser] = useState(null);
    const [noKtp, setKtp] = useState(null);

    useEffect(() => {
      const token = localStorage.getItem('access_token');
      axios.get('https://walrus-app-elpr8.ondigitalocean.app/api/user', { headers: { Authorization: `${token}`, } })
        .then(response => {
          setUser(response.data);
          console.log(response.data.no_KTP);
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          console.log(token)
        });
    }, []);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = localStorage.getItem('access_token');
            const response = await axios.get("https://walrus-app-elpr8.ondigitalocean.app/api/seminars/applied", { headers: { Authorization: `${token}`, } });
            if (response) {
              setSeminarApplied(response.data.seminars); // Assuming the actual data is stored in response.data
              console.log(response.data.seminars);
            }
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
      }, []);
      
      useEffect(() => {
        if (seminarApplied !== null) {
          console.log(seminarApplied);
          // Perform any other operations that depend on seminarApplied
        }
      }, [seminarApplied]);
  return (
    <>
        <div className="flex">
            <aside className="h-screen sticky top-0">
                <Sidebar_2/>
            </aside>
            <div className="p-8 flex-col space-y-6 w-full">
                <h1 className="text-3xl font-semibold">Selamat Datang, {user && user.name}</h1>
                {/* Notification */}
                  {(user && user.no_KTP == null) ? (<Notifikasi/>) : (<></>)}
                {/* Judul */}
                <h2 className="text-2xl font-semibold">Seminar Yang Diikuti</h2>    
                <div className="flex flex-col gap-y-4 md:flex-row lg:flex-row md:space-x-4 lg:space-x-4">  
                {seminarApplied && seminarApplied.map((seminar) => (
                    <Link href={`/User/detail_seminar/${seminar.seminar_id}`}>
                        <Seminar
                            key={seminar.seminar_id}
                            name={seminar.seminar_name}
                            short_description={seminar.seminar_short_description}
                            speaker={seminar.seminar_speaker}
                            date_and_time={seminar.seminar_date} 
                        />
                    </Link>
                ))}
                </div>
            </div>
        </div>
    </>
  )
}
