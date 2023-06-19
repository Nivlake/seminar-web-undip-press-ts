import Link from "next/link"
import axios from "axios";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Register() {
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
                                          <input id="nama" type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John Smith"/>
                                      </div>
                                  </div>
                              </div>
                              <div className="flex -mx-3">
                                  <div className="w-full px-3">
                                      <label className="text-xs text-neutral-25 font-semibold px-1">No HP</label>
                                      <div className="flex">
                                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-phone-outline text-gray-400 text-lg"></i></div>
                                          <input id="nomer" type="tel" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="085780653365"/>
                                      </div>
                                  </div>
                              </div>
                              <div className="flex -mx-3">
                                  <div className="w-full px-3">
                                      <label className="text-xs text-neutral-25 font-semibold px-1">Email</label>
                                      <div className="flex">
                                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                          <input id="email" type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com"/>
                                      </div>
                                  </div>
                              </div>
                              <div className="flex -mx-3">
                                  <div className="w-full px-3">
                                      <label className="text-xs text-neutral-25 font-semibold px-1">Password</label>
                                      <div className="flex">
                                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                          <input id="password" type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************"/>
                                      </div>
                                  </div>
                              </div>     
                          </div>
                          <div className="flex -mx-3 pt-8">
                              <div className="w-full px-3 mb-12">
                                  <button id="daftar" className="flex flex-row justify-between block w-full py-2 bg-primary-400 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
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