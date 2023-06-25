import axios from 'axios';
import Sidebar_2 from 'components/Sidebar_2'
import { use, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';

interface IFormInput {
    name: string;
    email: string;
    password: string;
    no_hp: string;
}

export default function User_Profile() {
    const [user, setUser] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const [isUpdateEmail, setIsUpdateEmail] = useState(false);
    const [isUpdateName, setIsUpdateName] = useState(false);
    const [isUpdatePassword, setIsUpdatePassword] = useState(false);
    const [isUpdateNumber, setIsUpdateNumber] = useState(false);

    const onSubmit: SubmitHandler<IFormInput> = data => handleUpdate(data);
    const token = localStorage.getItem('access_token');
    console.log(errors);

    useEffect(() => {
        axios.get('https://walrus-app-elpr8.ondigitalocean.app/api/user', { headers: { Authorization: `${token}`, } })
          .then(response => {
            setUser(response.data);
            console.log(response);
          })
          .catch(error => {
            console.log(error);
            console.log(token)
          });
      }, []);

      const [name, setname] = useState(`${user?.name}`);
      const [email, setEmail] = useState(`${user?.email}`);
      const [password, setPassword] = useState("**************");
      const [no_hp, setno_hp] = useState(`${user?.no_hp}`);

      useEffect(() => {
        if (user) {
          setname(user.name);
          setEmail(user.email);
          setno_hp(user.no_hp);
        }
      }, [user]);

      const handleUpdate = async (data: IFormInput) => {
        try {
            axios.put("https://walrus-app-elpr8.ondigitalocean.app/api/user/editprofile", data, {
                headers: {
                  Authorization: `${token}`,
                //   'Sec-Fetch-Site': 'cross-site'
                },
                // referrerPolicy: 'no-referrer'
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
                            {/* Nama Lengkap */}
                            <label className="w-32">Nama Lengkap</label>
                            <input className={`${errors?.name? "focus:border-danger-500" : "focus:border-indigo-500"} ${isUpdateName? "" : "opacity-50 cursor-not-allowed"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="text" placeholder="" 
                                {...register("name", { 
                                    maxLength: 100,
                                    pattern: /^[A-Za-z\s]+$/i 
                                })} 
                                value = {name}
                                onChange = {e => setname(e.target.value)}
                                disabled = {!isUpdateName}
                            />
                            <button className="text-primary-500 ml-2" type="button" onClick={() => setIsUpdateName(true)}>Ubah</button>
                            {errors?.name?.type === "pattern" && <p className="ml-1 text-danger-500">Please enter alphabetic characters only</p>}
                            {errors?.name?.type === "maxLength" && (<p className="ml-1 text-danger-500">First name cannot exceed 20 characters</p>)}
                        </div>
                        <div className="flex flex-row items-center">
                            {/* Email */}
                            <label className="w-32">Email</label>
                            <input id="email" className={`${errors?.email? "focus:border-danger-500" : "focus:border-indigo-500"} ${isUpdateEmail? "" : "opacity-50 cursor-not-allowed"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="text" placeholder="" 
                                {...register("email", {
                                    pattern: /^\S+@\S+$/i
                                })} 
                                value = {email}
                                onChange = {e => setEmail(e.target.value)}
                                disabled = {!isUpdateEmail}
                            />
                            <button className="text-primary-500 ml-2" type="button" onClick={() => setIsUpdateEmail(true)}>Ubah</button>
                            {errors?.email?.type === "pattern" && <p className="ml-1 text-danger-500">Invalid email address</p>}
                        </div>
                        <div className="flex flex-row items-center">
                            {/* Password */}
                            <label className="w-32">Password</label>
                            <input className={`${errors?.password? "focus:border-danger-500" : "focus:border-indigo-500"} ${isUpdatePassword? "" : "opacity-50 cursor-not-allowed"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="password" placeholder="" 
                                {...register("password", {
                                    maxLength: 100
                                })} 
                                value = {password}
                                onChange = {e => setPassword(e.target.value)}
                                disabled = {!isUpdatePassword}
                            />
                            <button className="text-primary-500 ml-2" type="button" onClick={() => setIsUpdatePassword(true)}>Ubah</button>
                            {errors?.password?.type === "maxLength" && (<p className="ml-1 text-danger-500">First name cannot exceed 20 characters</p>)}
                        </div>
                        <div className="flex flex-row items-center">
                            {/* No HP */}
                            <label className="w-32">No HP</label>   
                            <input className={`${errors?.no_hp? "focus:border-danger-500" : "focus:border-indigo-500"} ${isUpdateNumber? "" : "opacity-50 cursor-not-allowed"} w-96 p-2 rounded-lg border-2 border-gray-200 outline-none`} type="tel" placeholder="" 
                                {...register("no_hp", {
                                    minLength: 6, 
                                    maxLength: 12
                                })}
                                value = {no_hp}
                                onChange = {e => setno_hp(e.target.value)} 
                                disabled = {!isUpdateNumber}
                            />
                            <button className="text-primary-500 ml-2" type="button" onClick={() => setIsUpdateNumber(true)}>Ubah</button>
                            {errors?.no_hp?.type === "minLength" && (<p className="ml-1 text-danger-500">Mobile number cannot be less than 6 digits</p>)}
                        </div>
                        <div className="">
                            <button className={`${isUpdateNumber || isUpdateEmail || isUpdatePassword || isUpdateName? "" : "opacity-50 cursor-not-allowed pointer-events-none"} w-32 p-2 text-white rounded-lg bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 duration-300 `} type="submit">Update</button>
                        </div>     
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}