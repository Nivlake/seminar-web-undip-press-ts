import React from 'react'
import Sidebar_2 from 'components/Sidebar_2'

export default function detail_seminar() {
  return (
    <>
        <div className="flex">
            <aside className="h-screen sticky top-0">
                <Sidebar_2/>
            </aside>
            <div className="p-8 flex-col space-y-6 w-full">
                <div className="p-4">
                    <div className="flex flex-row flex justify-between items-center leading-normal w-1/2">
                        <div className="gap-2.5 flex flex-row">
                            <img src="/index1.svg" alt="" />
                            <div className="flex flex-col p-2.5 gap-2.5">
                                <div className="flex flex-row gap-2.5">
                                    <h3 className="w-fit px-2.5 rounded-lg border border-black border-2">Teknologi</h3>
                                </div>
                                <h1 className="text-5xl font-bold tracking-tight text-black">Judul Seminar</h1>
                                <h2 className="">Penyelenggara Seminar</h2>
                            </div> 
                        </div>
                        <div className="flex flex-col gap-2.5 p-2.5 text-center">
                            <p>Terbuka Hingga:</p>
                            <p className="font-bold">12/02/2023</p>
                            <p>Sisa Kuota:</p>
                            <p className="font-bold">0</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="p-4 space-y-4 w-1/2">
                        <h1 className="text-2xl font-bold">Deskripsi</h1>
                        <div className="w-full bg-neutral-500">
                            <p className="font-bold text-white text-center py-[5.2rem]">Image Place In Here</p>
                        </div>
                        <p className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae tortor accumsan nibh consequat gravida. Nunc et mollis erat. Phasellus vulputate vestibulum nisi, vitae ultrices mauris blandit nec. Praesent sit amet molestie nisl, sit amet varius nisi. Nulla quis cursus elit, non rutrum diam. Donec rutrum auctor massa ut lobortis. Aenean vitae accumsan nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque consectetur id neque eget congue.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae tortor accumsan nibh consequat gravida. Nunc et mollis erat. Phasellus vulputate vestibulum nisi, vitae ultrices mauris blandit nec. Praesent sit amet molestie nisl, ...
                        </p>
                    </div>
                    <div className="flex flex-col p-4 gap-4">
                        <h1 className="text-2xl font-bold">Keikutsertaan</h1>
                        <button className="bg-primary-500 hover:bg-primary-400 w-full rounded-lg px-8 py-1 text-white">Daftar</button>
                        <h1 className="text-2xl font-bold">Jadwal Pelaksanaan</h1>
                        <p>Mulai</p>
                        <p>Selesai</p>
                        <h1 className="text-2xl font-bold">Lokasi</h1>
                        <div className="flex flex-row gap-4">
                            <img src="../icon/location.svg"/>
                            <div className="flex flex-col">
                                <p>UPT Perpustakaan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Feedback</h1>
                    <div className="flex flex-col w-1/4 pt-4 gap-4">
                        <img src="../icon/stars.png" className="w-40 h-6"/>
                        <p className="text-justify">
                            Towering performance by Matt Damon as a troubled working class who needs to address his creative genius elevates this drama way above its therapeutic approach, resulting in a zeitgeist film that may touch chord with young viewers the way The Graduate did
                        </p>
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center flex justify-between">
                                <div className="flex flex-row flex items-center gap-1">
                                    <img src="../face.png" className="w-10 h-10 rounded-full"/>
                                    <p>User</p>
                                </div>
                                <p>Feb 23, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
