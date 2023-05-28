import Sidebar_2 from 'components/Sidebar_2'
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
    fullName: string;
    email: string;
    password: string;
    phoneNumber: string;
}

export default function User_Profile() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
    console.log(errors);
  return (
    <>
        <div className="flex">
            <aside className="h-screen sticky top-0">
                <Sidebar_2/>
            </aside>
            <div className="p-8 flex-col space-y-6 w-full">
                {/* Judul */}
                <h1 className="text-3xl font-semibold">Profil</h1>   
                <div className="flex flex-col gap-y-4 md:flex-row lg:flex-row md:space-x-4 lg:space-x-28">  
                    {/* Card */}
                    <div className="max-w-xs overflow-hidden">
                        <div className="bg-primary-100 flex justify-center items-center">
                            <img src="../icon/profile.svg" className="p-4"/>
                        </div>
                        <div className="p-5 space-y-4 bg-neutral-100">
                            {/* ini nanti kalo sukses dikasih toast react aja */}
                            <button className="flex justify-center items-center w-72 h-21 p-2 text-white rounded-lg bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 duration-300 mx-auto" type="submit">Pilih Gambar</button>
                            <p className="text-gray-700">
                            Besar file maksimum (X)mb. Format file yang diperbolehkan: .JPG .JPEG .PNG
                            </p>
                        </div>
                    </div>
                    {/* Form */}
                    <form className="flex flex-col space-y-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-row items-center">
                            <label className="w-32">Nama Lengkap</label>
                            <input className={`${errors?.fullName? "focus:border-danger-500" : "focus:border-indigo-500"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="text" placeholder="ini keisi data dari database" 
                                {...register("fullName", {
                                    required: true, 
                                    maxLength: 100
                                })} 
                            />
                            <button className="text-primary-500 ml-2">Ubah</button>
                            {errors?.fullName?.type === "required" && <p className="ml-1 text-danger-500">This field is required</p>}
                            {errors?.fullName?.type === "maxLength" && (<p className="ml-1 text-danger-500">First name cannot exceed 20 characters</p>)}
                        </div>
                        <div className="flex flex-row items-center">
                            <label className="w-32">Email</label>
                            <input id="email" className={`${errors?.email? "focus:border-danger-500" : "focus:border-indigo-500"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="text" placeholder="ini keisi data dari database" 
                                {...register("email", {
                                    required: true, 
                                    pattern: /^\S+@\S+$/i
                                })} 
                            />
                            <button className="text-primary-500 ml-2">Ubah</button>
                            {errors?.email?.type === "required" && <p className="ml-1 text-danger-500">This field is required</p>}
                            {errors?.email?.type === "pattern" && <p className="ml-1 text-danger-500">Invalid email address</p>}
                        </div>
                        <div className="flex flex-row items-center">
                            <label className="w-32">Password</label>
                            <input className={`${errors?.password? "focus:border-danger-500" : "focus:border-indigo-500"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="text" placeholder="ini keisi data dari database" 
                                {...register("password", {
                                    required: true, 
                                    maxLength: 100
                                })} 
                            />
                            <button className="text-primary-500 ml-2">Ubah</button>
                            {errors?.password?.type === "required" && <p className="ml-1 text-danger-500">This field is required</p>}
                            {errors?.password?.type === "maxLength" && (<p className="ml-1 text-danger-500">First name cannot exceed 20 characters</p>)}
                        </div>
                        <div className="flex flex-row items-center">       
                            <label className="w-32">No HP</label>   
                            <input className={`${errors?.phoneNumber? "focus:border-danger-500" : "focus:border-indigo-500"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="tel" placeholder="ini keisi data dari database" 
                                {...register("phoneNumber", {
                                    required: true, 
                                    minLength: 6, 
                                    maxLength: 12
                                })} 
                            />
                            <button className="text-primary-500 ml-2">Ubah</button>
                            {errors?.phoneNumber?.type === "required" && <p className="ml-1 text-danger-500">This field is required</p>}
                            {errors?.phoneNumber?.type === "minLength" && (<p className="ml-1 text-danger-500">Mobile number cannot be less than 6 digits</p>)}
                        </div>
                        <div className="">
                            <button className="w-32 p-2 text-white rounded-lg bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 duration-300" type="submit">Update</button>
                        </div>     
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}