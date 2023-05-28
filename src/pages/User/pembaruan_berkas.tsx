import Link from 'next/link'
import { useState } from "react"
import Sidebar_2 from 'components/Sidebar_2';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
    email: string;
    fullName: string;
    ktpNumber: string;
    bornPlace: string;
    date: string;
    address: string;
    phoneNumber: string;
}

export default function pembaruan_berkas() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
    console.log(errors);

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
                            <label className="w-32">Email</label>
                            <input id="email" className={`${errors?.email? "focus:border-danger-500" : "focus:border-indigo-500"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="text" placeholder="" 
                                {...register("email", {
                                    required: true, 
                                    pattern: /^\S+@\S+$/i
                                })} 
                            />
                            {errors?.email?.type === "required" && <p className="ml-1 text-danger-500">This field is required</p>}
                            {errors?.email?.type === "pattern" && <p className="ml-1 text-danger-500">Invalid email address</p>}
                        </div>
                        <div className="flex flex-row items-center">
                            <label className="w-32">Nama Lengkap</label>
                            <input className={`${errors?.fullName? "focus:border-danger-500" : "focus:border-indigo-500"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="text" placeholder="" 
                                {...register("fullName", {
                                    required: true, 
                                    maxLength: 100
                                })} 
                            />
                            {errors?.fullName?.type === "required" && <p className="ml-1 text-danger-500">This field is required</p>}
                            {errors?.fullName?.type === "maxLength" && (<p className="ml-1 text-danger-500">First name cannot exceed 20 characters</p>)}
                        </div>
                        <div className="flex flex-row items-center">
                            <label className="w-32">No KTP</label>
                            <input className={`${errors?.ktpNumber? "focus:border-danger-500" : "focus:border-indigo-500"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="text" placeholder="" 
                                {...register("ktpNumber", {
                                    required: true, 
                                    maxLength: 100
                                })} 
                            />
                            {errors?.ktpNumber?.type === "required" && <p className="ml-1 text-danger-500">This field is required</p>}
                            {errors?.ktpNumber?.type === "maxLength" && (<p className="ml-1 text-danger-500">First name cannot exceed 20 characters</p>)}
                        </div>
                        <div className="flex flex-row items-center">
                            <label className="w-32">Tempat Lahir</label>
                            <input className={`${errors?.bornPlace? "focus:border-danger-500" : "focus:border-indigo-500"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="text" placeholder="" 
                                {...register("bornPlace", {
                                    required: true,
                                })} 
                            />
                            {errors?.bornPlace?.type === "required" && <p className="ml-1 text-danger-500">This field is required</p>}
                        </div>
                        <div className="flex flex-row items-center">
                            <label className="w-32">Tanggal Lahir</label>
                            <input className={`${errors?.date? "focus:border-danger-500" : "focus:border-indigo-500"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="date" placeholder=""
                                {...register("date", {required: true})}
                            />
                            {errors?.date?.type === "required" && <p className="ml-1 text-danger-500">This field is required</p>}
                        </div>  
                        <div className="flex flex-row items-center">
                            <label className="w-32">Alamat</label>
                            <input className={`${errors?.address? "focus:border-danger-500" : "focus:border-indigo-500"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="text" placeholder="" 
                                {...register("address", {
                                    required: true
                                })} 
                            />
                            {errors?.address?.type === "required" && <p className="ml-1 text-danger-500">This field is required</p>}
                        </div>
                        <div className="flex flex-row items-center">       
                            <label className="w-32">No HP</label>   
                            <input className={`${errors?.phoneNumber? "focus:border-danger-500" : "focus:border-indigo-500"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="tel" placeholder="" 
                                {...register("phoneNumber", {
                                    required: true, 
                                    minLength: 6, 
                                    maxLength: 12
                                })} 
                            />
                            {errors?.phoneNumber?.type === "required" && <p className="ml-1 text-danger-500">This field is required</p>}
                            {errors?.phoneNumber?.type === "minLength" && (<p className="ml-1 text-danger-500">Mobile number cannot be less than 6 digits</p>)}
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
