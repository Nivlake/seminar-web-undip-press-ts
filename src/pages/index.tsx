import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);
// Import Swiper styles
import 'swiper/css';import Header from 'components/header';
import Footer from 'components/footer';
import Link from 'next/link';

const Home = () => {
  const [user, setUser] = useState(null);
  const [seminarDataUpcoming, setseminarDataUpcoming] = useState(null);
  const [seminarDataPast, setseminarDataPast] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem('access_token');
    axios
      .get('https://walrus-app-elpr8.ondigitalocean.app/api/user', {
        headers: { Authorization: `${token}` },
      })
      .then((response) => {
        setUser(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        console.log(token);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://walrus-app-elpr8.ondigitalocean.app/api/seminars/upcoming');
        if (response) {
          setseminarDataUpcoming(response.data); // Assuming the actual data is stored in response.data
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (seminarDataUpcoming !== null) {
      console.log(seminarDataUpcoming);
      // Perform any other operations that depend on seminarDataUpcoming
    }
  }, [seminarDataUpcoming]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://walrus-app-elpr8.ondigitalocean.app/api/seminars/past');
        if (response) {
          setseminarDataPast(response.data); // Assuming the actual data is stored in response.data
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (seminarDataPast !== null) {
      console.log(seminarDataPast);
      // Perform any other operations that depend on seminarDataPast
    }
  }, [seminarDataPast]);
  return (
    <>
      <Header user={user} />

      {/* TOP Part */}
      <div className="bg-primary-500 p-28">
        <div className="container flex flex-row justify-between mx-auto gap-60">
          {/* Left Side */}
          <div className="flex-1">
            <h1 className="text-5xl text-white font-semibold">Tingkatkan pengetahuanmu melalui seminar UNDIP</h1>
            <h2 className="mt-4 text-lg text-white font-normal">
              Bergabunglah dengan Seminar UNDIP, di mana kamu akan mendapat kesempatan untuk belajar dari para ahli industri dan pemikir terkemuka di bidangmu.
            </h2>
            {user ? (
              <button className="mt-4 px-5 py-3 text-white rounded-lg bg-primary-300 hover:bg-primary-600 focus:bg-primary-600">
                Hai {user && user.name}
              </button>
            ) : (
              <Link href="/Login">
                <button className="mt-4 px-5 py-3 text-white rounded-lg bg-primary-300 hover:bg-primary-600 focus:bg-primary-600">Sign In</button>
              </Link>
            )}
          </div>
          {/* Right Side */}
          <img className="hidden xl:block mt-12 xl:mt-0" src="/homeasset.svg" alt="" />
        </div>
      </div>

      {/* Bottom Part */}
      {/* Upcoming Seminar */}
      <div className="bg-white px-28 py-24 flex flex-col justify-center gap-16">
        <div className="gap-16">
          <h1 className="text-4xl font-semibold flex justify-center">Upcoming Seminar</h1>
          <h2 className="flex justify-center mt-7 text-lg font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</h2>
        </div>
        <div className="container mx-auto relative">
          {/* Navigation buttons */}
          <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            pagination={{ clickable: true }}
            navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
          >
            {seminarDataUpcoming &&
              seminarDataUpcoming.map((seminar) => (
                <SwiperSlide key={seminar.id}>
                  <div className="max-w-xs bg-white border border-transparent rounded-lg shadow">
                    <a href="#">
                      <img className="rounded-t-lg h-64 object-cover" src="/homecard.svg" alt="" />
                    </a>
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{seminar.name}</h5>
                      </a>
                      <p className="mb-3 font-normal text-black truncate">{seminar.short_description}.</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>

      {/* Bottom Part */}
      {/* Upcoming Seminar */}
      <div className="bg-white px-28 py-24 flex flex-col justify-center gap-16">
        <div className="gap-16">
          <h1 className="text-4xl font-semibold flex justify-center">Past Seminar</h1>
          <h2 className="flex justify-center mt-7 text-lg font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</h2>
        </div>
        <div className="container mx-auto relative">
          {/* Navigation buttons */}
          <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            pagination={{ clickable: true }}
            navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
          >
            {seminarDataPast &&
              seminarDataPast.map((seminar) => (
                <SwiperSlide key={seminar.id}>
                  <div className="max-w-xs bg-white border border-transparent rounded-lg shadow">
                    <a href="#">
                      <img className="rounded-t-lg h-64 object-cover" src="/homecard.svg" alt="" />
                    </a>
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{seminar.name}</h5>
                      </a>
                      <p className="mb-3 font-normal text-black truncate">{seminar.short_description}.</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
