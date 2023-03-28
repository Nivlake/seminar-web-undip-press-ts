import Link from "next/link"
import axios from "axios";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    axios.get('http://127.0.0.1:8000/api/user', { headers: { Authorization: `${token}`, } })
      .then(response => {
        setUser(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        console.log(token)
      });
  }, []);
  
  const handleLogout = () => {
    const token = localStorage.getItem('access_token');
    axios.post('http://127.0.0.1:8000/api/logout', {}, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then(response => {
      localStorage.removeItem('access_token');
      setUser(null);
      toast.success('Successfully logged out!');
      router.push('/');
    })
    .catch(error => {
      console.log(error);
      toast.error('Error logging out!');
    });
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="bg-primary-500">
      <nav className="px-28 py-6">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <img src="/logo.svg" alt="logo" />
            <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
              <Link href="/" className="pr-5 pt-3 text-white">Home</Link>
              <Link href="/about" className="px-5 py-3 text-white ">All Seminar</Link>
              <Link href="/contact" className="px-5 py-3 text-white ">Contact</Link>
              {user ? (
              <button className='px-5 py-3 text-white rounded-lg bg-primary-300 hover:bg-primary-600 focus:bg-primary-600'onClick={handleLogout}>Logout</button>
            ) : (
              <Link href='/Login'><button className='px-5 py-3 text-white rounded-lg bg-primary-300 hover:bg-primary-600 focus:bg-primary-600'>Sign In</button></Link>
            )}
            </div>
        <div className="md:hidden">
          <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
          onClick={() => setIsOpen(!isOpen)}>{isOpen ? (<img src="/x.svg" alt="" />) : (<img src="/Menu.svg" alt="" />)}
          </button>
        </div>
        </div>
      </nav>
    </div>
    
    </>
  );
}