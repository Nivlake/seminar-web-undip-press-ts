import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar_2 from "components/Sidebar_2";
import Sertifikat from "components/Sertifikat";
import Link from "next/link";

interface SeminarData {
  seminarname: string;
  seminardate: string;
  seminarspeaker: string;
  // kode_sertifikat: string;
}

export default function ListSertifikat() {
  const [sertifikat, setSertifikat] = useState<SeminarData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    axios
      .get("http://localhost:8000/api/user/sertifikat", {
        headers: { Authorization: `${token}` },
      })
      .then((response) => {
        setSertifikat(response.data.seminardata);
        console.log(response.data.seminardata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredSertifikat = sertifikat.filter((data) =>
    data.seminarname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex">
        <aside className="h-screen sticky top-0">
          <Sidebar_2 />
        </aside>
        <div className="p-8 flex-col space-y-6 w-full">
          <div className="flex flex-row justify-between">
            {/* Judul */}
            <h1 className="text-3xl font-semibold">Profil</h1>
            {/* Search Bar */}
            <div className="flex flex-row justify-end">
              <div className="relative">
                <input
                  type="text"
                  className="block px-4 py-2 w-80 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search"
                  style={{ paddingRight: "2rem" }} // Adjust the value as needed
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
                <img
                  src="../icon/search.svg"
                  className="absolute right-3 top-2.5 text-purple-700"
                  style={{ pointerEvents: "none" }}
                  alt="Search icon"
                />
              </div>
            </div>
          </div>

          {/* Judul */}
          <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-semibold">List Sertifikat</h2>
            <div className="flex flex-row justify-end"></div>
          </div>

          {/* Sertifikat */}
          <div className="grid grid-rows-1 gap-4">
            {filteredSertifikat.map((data, index) => (
              <Link href={`/User/detail_sertifikat/${data.id_seminar}`}>
                <Sertifikat
                  key={index}
                  data={{
                    seminarname: data.seminarname,
                    seminardate: data.seminardate,
                    seminarspeaker: data.seminarspeaker,
                    // kode_sertifikat: data.kode_sertifikat,
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}