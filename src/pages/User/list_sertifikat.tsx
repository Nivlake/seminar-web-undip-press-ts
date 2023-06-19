import React, { useState } from 'react'
import Sidebar_2 from 'components/Sidebar_2'
import Sertifikat from 'components/Sertifikat'

export default function list_sertifikat() {
    return (
        <>
            <div className="flex">
                <aside className="h-screen sticky top-0">
                    <Sidebar_2/>
                </aside>
                <div className="p-8 flex-col space-y-6 w-full">
                <div className="flex flex-row justify-between">
                {/* Judul */}
                <h1 className="text-3xl font-semibold">Profil</h1>
                {/* Search Bar */}
                    <div className="flex flex-row justify-end">
                        
                    </div>

                </div>

                {/* Judul */}
                <div className="flex flex-row justify-between">
                <h2 className="text-2xl font-semibold">List Sertifikat</h2>  
                    <div className="flex flex-row justify-end">
                    <div className="relative">
                            <input
                            type="text"
                            className="block px-4 py-2 w-80 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Search"
                            style={{ paddingRight: '2rem'}} // Adjust the value as needed
                            />
                            <img
                            src="../icon/search.svg"
                            className="absolute right-3 top-2.5 text-purple-700"
                            style={{ pointerEvents: 'none' }}
                            alt="Search icon"
                            />
                        </div>
                    </div>
                </div>

                {/* Sertifikat */}
                <Sertifikat/>

                {/* Sertifikat */}
                <Sertifikat/>

                {/* Sertifikat */}
                <Sertifikat/>

            </div>
            </div>
        </>
      )
  }