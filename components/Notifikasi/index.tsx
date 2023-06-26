import Link from "next/link";

export default function Notifikasi() {
    return (
        <>
            <div className="flex flex-row space-x-4 mx-auto p-5 items-center bg-danger-100 rounded-xl">
                <img src="../icon/warning.svg" alt="" className="self-start" />
                <div className="flex flex-col space-y-4">
                    <h5 className="text-md font-semibold tracking-tight text-black">Pemberitahuan</h5>
                    <p className='text-neutral-700'>
                        Anda belum melengkapi form pengisian semua data yang dibutuhkan, jika anda belum melengkapi semua data yang dibutuhkan, anda tidak dapat menggunakan fitur lain. Harap segera melakukan pengisian data yang dibutuhkan.
                    </p>
                    <Link href="/User/pembaruan_berkas">
                        <button className="bg-danger-500 hover:bg-danger-600 w-36 rounded-lg px-8 py-1 text-white">Lengkapi</button>
                    </Link>
                </div>
            </div>
        </>
    );
  }