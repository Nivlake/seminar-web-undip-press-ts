import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const [name, setName] = useState("");
    const [no_hp, setNo_hp] = useState("");
    const router = useRouter();
    const handleRegister = async () => {
    const data = {
        name: name,
        no_hp: no_hp,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
    }
    console.log('Sending data:', data);
    try {
        const response = await axios.post("https://walrus-app-elpr8.ondigitalocean.app/api/register", data);
        // console.log(response.body);

        // Check if the response data indicates that the email address is already in use
        if (response.data.errors && response.data.errors.email) {
            console.log("memek")
            toast.error('Email address is already in use');
        } else {
            // Redirect the user to a different page after successful registration
            toast.success('Registration successful!');
            router.push('/Login');
        }
    } catch (error) {
        if (error.response.data.email!= null){
        console.error(error.response.data);
        toast.error(error.response.data.email[0]);
        }
        else if (error.response.data.password!= null){
            console.error(error.response.data);
            toast.error(error.response.data.password[0]);
            }
        else if (error.response.data.no_hp!= null){
                console.error(error.response.data);
                toast.error(error.response.data.no_hp[0]);
                }
        else if (error.response.data.name!= null){
            console.error(error.response.data);
            toast.error(error.response.data.name[0]);
            }
    }
    
}
    return (
        <>
            <style>@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')</style>
            <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center ">
                <div className="bg-primary-500 text-black rounded-3xl shadow-xl w-full overflow-hidden "style={{ maxWidth: '1000px' }}>
                    <div className="md:flex w-full">
                        <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div className="mb-10">
                                <img src='/undip-press.svg' />
                            </div>
                            <div className="flex-col space-y-4">
                                <div className="flex -mx-3">
                                    <div className="w-full px-3">
                                        <label className="text-xl text-neutral-25 font-semibold px-1">Masuk ke Seminar</label>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3">
                                        <label className="text-xs text-neutral-25 font-semibold px-1">Nama Lengkap</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input id="name" type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John Smith"value={name} onChange={(e) => setName(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3">
                                        <label className="text-xs text-neutral-25 font-semibold px-1">No HP</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-phone-outline text-gray-400 text-lg"></i></div>
                                            <input id="no_hp" type="tel" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="085780653365"value={no_hp} onChange={(e) => setNo_hp(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3">
                                        <label className="text-xs text-neutral-25 font-semibold px-1">Email</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input id="email" type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com"value={email} onChange={(e) => setEmail(e.target.value)}/>
                                            </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3">
                                        <label className="text-xs text-neutral-25 font-semibold px-1">Password</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input id="password" type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************"value={password} onChange={(e) => setPassword(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3">
                                        <label className="text-xs text-neutral-25 font-semibold px-1">Konfirmasi Password</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input id="password_confirmation" type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************"value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>      
                            </div>
                            <div className="flex -mx-3 pt-8">
                                <div className="w-full px-3 mb-12">
                                    <button id="daftar" className="flex flex-row justify-between block w-full py-2 bg-primary-400 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"onClick={handleRegister}>
                                        DAFTAR
                                        <img className="pt-1" src='/arrow.svg'/>
                                    </button>
                                        
                                </div>
                            </div>
                            <div className="flex space-x-8 justify-center">
                                <p className="text-white">Sudah Punya Akun ?</p>
                                <button className="text-info-50 font-bold" id="daftar">
                                    <Link href="/Login">Login</Link>
                                </button>
                            </div>            
                        </div>           
                        <div className="hidden sm:block md:w-1/2 sm:bg-white sm:py-10 sm:px-10 sm:flex sm:justify-center">
                            <img src='/login.svg'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}