import Link from "next/link";
import Sidebar_2 from 'components/Sidebar_2'

export default function User_Dashboard_Home() {
    return (
      <>
          <div className="flex">
              <aside className="h-screen sticky top-0">
                  <Sidebar_2/>
              </aside>
              <div className="p-8 flex-col space-y-6 w-full">
                  <h1 className="text-3xl font-semibold">Sertifikat </h1>
                  {/* Notification */}
                  <div className="flex flex-row space-x-4 mx-auto p-5 items-center bg-success-200 rounded-xl">
                      <img src="../icon/certificate-purple.svg" alt="" className="self-start" />
                      <div className="flex flex-col space-y-4">
                          <h5 className="text-lg font-semibold tracking-tight text-black">Selamat</h5>
                          <p className='text-neutral-700'>
                            Selamat atas keberhasilan Anda dalam mendapatkan sertifikat seminar ini ! Teruslah mengejar impian dan mengembangkan diri melalui peluang-peluang seperti ini.
                          </p>
                          <div className="flex flex row space-x-4">
                            <button className="bg-primary-500 hover:bg-primary-700 duration-300 w-36 rounded-lg px-4 py-2 text-white">Download</button>
                            <button className="bg-primary-500 hover:bg-primary-700 duration-300 w-36 rounded-lg px-4 py-2 text-white">Beri Komentar</button>
                          </div>
             
                      </div>
                  </div>
                  {/* Judul */}
                  <div className="w-full bg-neutral-500">
                        <p className="font-bold text-white text-center py-[5.2rem]">Sertifikat</p>
                    </div>
              </div>
          </div>
      </>
    )
  }
  