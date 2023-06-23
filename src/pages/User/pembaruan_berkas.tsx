import Link from 'next/link'
import { useState } from "react"
import Sidebar_2 from 'components/Sidebar_2';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';
import Swal from 'sweetalert2';

interface IFormInput {
    ktpNumber: string;
    bornPlace: string;
    date: string;
    address: string;
}

export default function pembaruan_berkas() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const router = useRouter();

    const [ktpNumber, setKtpNumber] = useState("");
    const [bornPlace, setBornPlace] = useState("");
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    
    const handleSubmitBerkas = async (data: IFormInput) => {
        const token = localStorage.getItem('access_token');
        // const data = {
        //     ktpNumber: ktpNumber,
        //     bornPlace: bornPlace,
        //     date: date,
        //     address: address
        // }
        try {
            axios.post("https://walrus-app-elpr8.ondigitalocean.app/user/update", data, {
                headers: {
                  Authorization: `${token}`
                }
              })
              .then(response => {
                // Handle successful response here
                console.log(response.data);
                const succesMessage = JSON.stringify(response.data.message);
                Swal.fire({
                    icon: 'success',
                    title: 'Yeay!',
                    text: `${succesMessage}`,
                  })

              })
              .catch(error => {
                // Handle error here
                console.log(error.response);
                const errorMessage = JSON.stringify(error.response);
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

    const onSubmit: SubmitHandler<IFormInput> = data => { 
        handleSubmitBerkas(data) 
        console.log(data)
    }

  return (
    <>
        <div className="flex">
            <aside className="h-screen sticky top-0">
                <Sidebar_2/>
            </aside>
            <div className="p-8 space-y-6 w-full">
                <h1 className="text-3xl font-semibold">Pembaruan Berkas</h1> 
                <div className="flex flex-col gap-y-4">  
                    {/* Form */}
                    <form className="flex flex-col space-y-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-row items-center">
                            <label className="w-32">No KTP</label>
                            <input className={`${errors?.ktpNumber? "focus:border-danger-500" : "focus:border-indigo-500"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="text" placeholder="" 
                                {...register("ktpNumber", {
                                    required: true, 
                                    maxLength: 100,
                                    pattern: /^\d+$/ // Only allow numbers
                                })}
                                value={ktpNumber} 
                                onChange={(e) => setKtpNumber(e.target.value)} 
                            />
                            {errors?.ktpNumber?.type === "required" && <p className="ml-1 text-danger-500">This field is required</p>}
                            {errors?.ktpNumber?.type === "maxLength" && (<p className="ml-1 text-danger-500">First name cannot exceed 20 characters</p>)}
                            {errors?.ktpNumber?.type === "pattern" && (<p className="ml-1 text-danger-500">Not the correct format for a KTP</p>)}
                        </div>
                        <div className="flex flex-row items-center">
                            <label className="w-32">Tempat Lahir</label>
                            <input className={`${errors?.bornPlace? "focus:border-danger-500" : "focus:border-indigo-500"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="text" placeholder="" 
                                {...register("bornPlace", {
                                    required: true,
                                })}
                                value={bornPlace} 
                                onChange={(e) => setBornPlace(e.target.value)} 
                            />
                            {errors?.bornPlace?.type === "required" && <p className="ml-1 text-danger-500">This field is required</p>}
                        </div>
                        <div className="flex flex-row items-center">
                            <label className="w-32">Tanggal Lahir</label>
                            <input className={`${errors?.date? "focus:border-danger-500" : "focus:border-indigo-500"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="date" placeholder=""
                                {...register("date", {required: true})}
                                value={date} 
                                onChange={(e) => setDate(e.target.value)}
                            />
                            {errors?.date?.type === "required" && <p className="ml-1 text-danger-500">This field is required</p>}
                        </div>  
                        <div className="flex flex-row items-center">
                            <label className="w-32">Alamat</label>
                            <input className={`${errors?.address? "focus:border-danger-500" : "focus:border-indigo-500"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="text" placeholder="" 
                                {...register("address", {
                                    required: true
                                })}
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)} 
                            />
                            {errors?.address?.type === "required" && <p className="ml-1 text-danger-500">This field is required</p>}
                        </div>
                        {/* ini nanti kalo sukses dikasih toast react aja */}
                        <button className="w-32 p-2 text-white rounded-lg bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 duration-300" type="submit">Update</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
