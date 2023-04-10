import Link from 'next/link'
import Sidebar_2 from 'components/Sidebar_2'

export default function User_Dashboard_Home() {
  return (
    <>
        <div className="flex">
            <aside className="h-screen sticky top-0">
                <Sidebar_2/>
            </aside>
            <div className="p-8 flex-col space-y-6 w-full">
                <h1 className="text-3xl font-semibold">Selamat Datang, User</h1>
                {/* Notification */}
                <div className="flex flex-row space-x-4 mx-auto p-5 items-center bg-danger-100 rounded-xl">
                    <img src="../icon/warning.svg" alt="" className="self-start" />
                    <div className="flex flex-col space-y-4">
                        <h5 className="text-md font-semibold tracking-tight text-black">Pemberitahuan</h5>
                        <p className='text-neutral-700'>
                            Anda belum melengkapi form pengisian semua data yang dibutuhkan, jika anda belum melengkapi semua data yang dibutuhkan, anda tidak dapat menggunakan fitur lain. Harap segera melakukan pengisian data yang dibutuhkan.
                        </p>
                        <button className="bg-danger-500 hover:bg-danger-600 w-36 rounded-lg px-8 py-1 text-white">Lengkapi</button>
                    </div>
                </div>
                {/* Judul */}
                <h2 className="text-2xl font-semibold">Seminar Yang Diikuti</h2>    
                <div className="flex flex-col gap-y-4 md:flex-row lg:flex-row md:space-x-4 lg:space-x-4">  
                    {/* Card */}
                    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg">
                        <img src="/homecard.svg" alt="Placeholder" className="w-full" />
                        <div className="p-5 space-y-4">
                        <div className="flex flex-row space-x-2">
                                <img src="../icon/narasumber.svg"/>
                                <div className="text-neutral-900 flex flex-row">
                                    <p>Narasumber 1</p>
                                    <p>Narasumber 2</p>
                                </div>  
                            </div>
                            <div className="font-bold text-xl mb-2">
                                The Future of Artificial Intelligence
                            </div>
                            <p className="text-gray-700 line-clamp-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet semper ipsum semper ipsum semper ipsum semper ipsum semper ipsum semper ipsum.
                            </p>
                        </div>
                    </div>
                    {/* Card */}
                    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg">
                        <img src="/homecard.svg" alt="Placeholder" className="w-full" />
                        <div className="p-5 space-y-4">
                        <div className="flex flex-row space-x-2">
                                <img src="../icon/narasumber.svg"/>
                                <div className="text-neutral-900 flex flex-row">
                                    <p>Narasumber 1</p>
                                    <p>Narasumber 2</p>
                                </div>  
                            </div>
                            <div className="font-bold text-xl mb-2">
                                The Future of Artificial Intelligence
                            </div>
                            <p className="text-gray-700 line-clamp-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet semper ipsum semper ipsum semper ipsum semper ipsum semper ipsum semper ipsum.
                            </p>
                        </div>
                    </div>
                    {/* Card */}
                    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg">
                        <img src="/homecard.svg" alt="Placeholder" className="w-full" />
                        <div className="p-5 space-y-4">
                        <div className="flex flex-row space-x-2">
                                <img src="../icon/narasumber.svg"/>
                                <div className="text-neutral-900 flex flex-row">
                                    <p>Narasumber 1</p>
                                    <p>Narasumber 2</p>
                                </div>  
                            </div>
                            <div className="font-bold text-xl mb-2">
                                The Future of Artificial Intelligence
                            </div>
                            <p className="text-gray-700 line-clamp-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet semper ipsum semper ipsum semper ipsum semper ipsum semper ipsum semper ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
