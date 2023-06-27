import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Sertifikat2 from 'components/Sertifikat2';

export default function Verify() {
    const [kode_sertifikat, setKodeSertifikat] = useState('');
    const [data, setData] = useState(null);

    const handleSubmit = async (event) => {
        setData(null);
        event.preventDefault();
        try {
          const response = await axios.post('https://walrus-app-elpr8.ondigitalocean.app/api/sertifikat/show', {
            kode_sertifikat: kode_sertifikat,
          });
          if (response) {
            setData(response.data);
            console.log(response.data);
            toast.success('Sertifikat ditemukan');
          }
        } catch (error) {
          console.log(error);
          toast.error('Sertifikat tidak ditemukan');
          setData(null);
        }
      };

    return (
        <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Verifikasi Kredensial Sertifikat</h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-wrap gap-4">
          <div className="flex-1">
              <label htmlFor="kode_sertifikat" className="sr-only">kode_sertifikat:</label>
              <input type="text" name="kode_sertifikat" id="kode_sertifikat" value={kode_sertifikat} onChange={(event) => setKodeSertifikat(event.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="kode_sertifikat" />
            </div>
            <div className="flex-1">
              <button type="submit" className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Search</button>
            </div>
            </div>
        </form>
        <div className="w-full bg-neutral-500">
  {data ? (
    <Sertifikat2
      data={{
        nama: data.nama,
        seminarname: data.seminarname,
        seminardate: data.seminardate,
        kode_sertifikat: data.kode_sertifikat,
      }}
    />
  ) : null}
</div>
</div>
</div>
    );
}