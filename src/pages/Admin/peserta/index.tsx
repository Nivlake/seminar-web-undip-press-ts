import Admin_Sidebar from "components/Admin_Sidebar";
import Link from "next/link";

export default function Seminar(){
    return(
        <>
            <div className="flex">
                <aside className="h-screen sticky top-0">
                    <Admin_Sidebar/>
                </aside>
                <div className="w-full flex flex-col p-8 gap-6">
                    <h1 className="text-3xl font-semibold px-2.5">Manajemen Peserta</h1>
                    <div className="container flex flex-row p-2.5 gap-5">
                        <div className="w-full flex flex-col gap-[1.875rem]">
                            {/* Card */}
                            <div className="w-full flex flex-col p-5 gap-2.5 bg-primary-300 rounded-lg justify-between">
                                <div className="w-full flex justify-between">
                                    <h2 className="font-bold text-xl">Upcoming Seminar</h2>
                                    <Link href="/Admin/peserta/upcoming"><button type="button" className="font-bold text-medium underline underline-offset-1">see all</button></Link>
                                </div>
                                {/* Bagian Bawah */}
                                <div className="flex flex-col border-t-2 border-black">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col">
                                            <h2 className="font-bold text-base">Judul Seminar</h2>
                                            <h3 className="font-medium text-sm">Pembicara</h3>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-base">Total Pendaftar</h2>
                                            <h3 className="font-medium text-sm text-right">100 Orang</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col border-t-2 border-black">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col">
                                            <h2 className="font-bold text-base">Judul Seminar</h2>
                                            <h3 className="font-medium text-sm">Pembicara</h3>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-base">Total Pendaftar</h2>
                                            <h3 className="font-medium text-sm text-right">100 Orang</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col border-t-2 border-black">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col">
                                            <h2 className="font-bold text-base">Judul Seminar</h2>
                                            <h3 className="font-medium text-sm">Pembicara</h3>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-base">Total Pendaftar</h2>
                                            <h3 className="font-medium text-sm text-right">100 Orang</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col border-t-2 border-black">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col">
                                            <h2 className="font-bold text-base">Judul Seminar</h2>
                                            <h3 className="font-medium text-sm">Pembicara</h3>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-base">Total Pendaftar</h2>
                                            <h3 className="font-medium text-sm text-right">100 Orang</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col border-t-2 border-black">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col">
                                            <h2 className="font-bold text-base">Judul Seminar</h2>
                                            <h3 className="font-medium text-sm">Pembicara</h3>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-base">Total Pendaftar</h2>
                                            <h3 className="font-medium text-sm text-right">100 Orang</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-col p-5 gap-2.5 bg-primary-300 rounded-lg justify-between">
                                <div className="w-full flex justify-between">
                                    <h2 className="font-bold text-xl">Past Seminar</h2>
                                    <Link href="/Admin/peserta/past"><button type="button" className="font-bold text-medium underline underline-offset-1">see all</button></Link>
                                </div>
                                {/* Bagian Bawah */}
                                <div className="flex flex-col border-t-2 border-black">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col">
                                            <h2 className="font-bold text-base">Judul Seminar</h2>
                                            <h3 className="font-medium text-sm">Pembicara</h3>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-base">Total Hadir</h2>
                                            <h3 className="font-medium text-sm text-right">70 Orang</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col border-t-2 border-black">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col">
                                            <h2 className="font-bold text-base">Judul Seminar</h2>
                                            <h3 className="font-medium text-sm">Pembicara</h3>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-base">Total Hadir</h2>
                                            <h3 className="font-medium text-sm text-right">70 Orang</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col border-t-2 border-black">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col">
                                            <h2 className="font-bold text-base">Judul Seminar</h2>
                                            <h3 className="font-medium text-sm">Pembicara</h3>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-base">Total Hadir</h2>
                                            <h3 className="font-medium text-sm text-right">70 Orang</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col border-t-2 border-black">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col">
                                            <h2 className="font-bold text-base">Judul Seminar</h2>
                                            <h3 className="font-medium text-sm">Pembicara</h3>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-base">Total Hadir</h2>
                                            <h3 className="font-medium text-sm text-right">70 Orang</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col border-t-2 border-black">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col">
                                            <h2 className="font-bold text-base">Judul Seminar</h2>
                                            <h3 className="font-medium text-sm">Pembicara</h3>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-base">Total Hadir</h2>
                                            <h3 className="font-medium text-sm text-right">70 Orang</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Kanan */}
                        <div className="flex flex-col">
                            
                        </div>
                    </div> 
                </div>
            </div>
        </>
    );
}