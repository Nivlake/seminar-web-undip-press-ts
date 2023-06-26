import Sidebar_2 from 'components/Sidebar_2'
import axios from 'axios';
import { toast } from "react-toastify"
import { useState } from "react";
import { useRouter } from "next/router";

export default function User_Dashboard_Home() {
    const [showModal, setShowModal] = useState(false);
    const [rateValue, setRateValue] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false);
    const [stars, setStars] = useState(0);
    const [review, setReview] = useState("");
    const router = useRouter();
    const pathSegments = router.asPath.split('/');
    const id_seminar = parseInt(pathSegments[pathSegments.length - 1]);
  
    const handleSubmit = () => {
        if (rateValue) {
            setIsSubmit(true);
            handleSubmitFeedback();
            setTimeout(() => {
                setShowModal(false)
              }, 1000); // 1000 milliseconds = 1 second
        }
    };

    const handleSubmitFeedback = async () => {
        const token = localStorage.getItem('access_token');
        const data = {
            id_seminar: id_seminar,
            stars: stars,
            review: review
        }
        console.log('Sending data:', data);
        try {
            axios.post("https://walrus-app-elpr8.ondigitalocean.app/api/ratings/add", data, {
                headers: {
                  Authorization: `${token}`,
                //   'Sec-Fetch-Site': 'cross-site'
                },
                // referrerPolicy: 'no-referrer'
              })
              .then(response => {
                // Handle successful response here
                console.log(response.data);
                toast.success("Berhasil memberikan feedback");
              })
              .catch(error => {
                // Handle error here
                console.log(error.response);
                const errorMessage = JSON.stringify(error.response.data.error);
                toast.error(`${errorMessage}`);
              });
        } catch(error) {
             // Log the error response
        }
    };
    return (
      <>
            <div className="flex">
                <aside className="h-screen sticky top-0">
                    <Sidebar_2/>
                </aside>
                <div className="p-8 flex-col space-y-6 w-full">
                    <h1 className="text-3xl font-semibold">Sertifikat </h1>
                    {/* Notification */}
                    <div className="flex flex-row space-x-4 mx-auto p-5 items-center bg-success-200 rounded-xl">
                        <img src="../icon/certificate-purple.svg" alt="" className="self-start" />
                        <div className="flex flex-col space-y-4">
                            <h5 className="text-lg font-semibold tracking-tight text-black">Selamat</h5>
                            <p className='text-neutral-700'>
                                Selamat atas keberhasilan Anda dalam mendapatkan sertifikat seminar ini ! Teruslah mengejar impian dan mengembangkan diri melalui peluang-peluang seperti ini.
                            </p>
                            <div className="flex flex row space-x-4">
                                <button className="bg-primary-500 hover:bg-primary-700 duration-300 w-36 rounded-lg px-4 py-2 text-white">Download</button>
                                <button 
                                className="bg-primary-500 hover:bg-primary-700 duration-300 w-36 rounded-lg px-4 py-2 text-white"
                                onClick={() => setShowModal(true)}
                                >
                                    Beri Komentar
                                </button>                           
                            </div>
                        </div>
                    </div>
                    {/* Judul */}
                    <div className="w-full bg-neutral-500">
                        <p className="font-bold text-white text-center py-[5.2rem]">Sertifikat</p>
                    </div>
                </div>
                    {showModal ? (
                        <div className="justify-center items-center backdrop-blur flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="w-[480px] h-[480px] whitespace-nowrap overflow-hidden transition-all">
                        <div
                            className="inline-block break-words align-top whitespace-normal transition-all h-[480px] w-[480px]"
                            style={{
                                transform: isSubmit
                                    ? "translateX(-100%)"
                                    : "translateX(0%)",
                            }}
                        >
                            <div
                                className="w-[480px] h-[480px] p-5 rounded-3xl text-white flex flex-col gap-8"
                                style={{
                                    background: "#222731",
                                }}
                            >
                                <div>
                                    {/* <Image/> */}
                                </div>
                                <h1 className="text-2xl font-bold">Bagaimana pengalaman anda ?</h1>
                                <div className="grid grid-cols-5 gap-5">
                                    {[1, 2, 3, 4, 5].map((value) => {
                                        return (
                                            <div
                                                key={value}
                                                className={`grid place-content-center  h-12 w-12 rounded-full cursor-pointer  transition-all ${
                                                    value === rateValue
                                                        ? "bg-orange-500  text-white"
                                                        : "text-gray-400 hover:bg-white hover:text-orange-500 bg-zinc-900"
                                                }`}
                                                onClick={() => { setRateValue(value); setStars(value); }}
                                            >
                                                {value}
                                            </div>
                                        );
                                    })}
                                </div>
                                <input className="focus:border-indigo-500 w-full p-2 rounded-lg border-2 border-gray-200 outline-none text-black" type="text" placeholder="Tuliskan komentar" value={review} onChange={(e) => setReview(e.target.value)}  />
                                <button
                                    className="w-full bg-success-500 rounded-3xl py-3 hover:bg-success-700 transition-all"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                                <button
                                    className="w-full bg-danger-500 rounded-3xl py-3 hover:bg-danger-700 transition-all"
                                    onClick={() => setShowModal(false)}
                                >
                                    Batalkan
                                </button>
                            </div>
                        </div>
                        <div
                            className="inline-block whitespace-normal transition-all h-[480px] w-[480px]"
                            style={{
                                transform: isSubmit
                                    ? "translateX(-100%)"
                                    : "translateX(0%)",
                            }}
                        >
                            <div
                                className="w-[480px] h-[480px] p-5 rounded-3xl text-white flex flex-col items-center gap-8"
                                style={{
                                    background: "#222731",
                                }}
                            >
                                {/* <Image/> */}
                                <span className="text-center bg-zinc-900  px-5 py-2 rounded-3xl text-orange-500">
                                    You select {rateValue} out of 5
                                </span>

                                <h1 className="text-2xl font-bold text-center">
                                    Terima Kasih !
                                </h1>
                                <p className="text-sm text-gray-400 text-center">
                                    Terima kasih atas feedback yang Anda berikan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
            </div>
      </>
    )
  }
  