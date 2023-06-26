export default function Sertifikat({ data }) {
    return (
      <>
        <div className="flex flex-row space-x-4 mx-auto p-5 items-center bg-neutral-300 rounded-xl">
          <div className="gap-2.5 flex flex-row w-10/12">
            <img src="/index1.svg" alt="" />
            <div className="flex flex-col p-2.5 gap-2.5">
              <div className="flex flex-row gap-2.5">
                <h3 className="w-fit px-2.5 rounded-lg border border-black border-2">
                  Teknologi
                </h3>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-black">
                {data.seminarname}
              </h1>
              <h2 className="text-xl">{data.seminarspeaker}</h2>
            </div>
          </div>
          <div className="flex flex-row justify-end w-10/12">
            <div className="flex flex-col gap-2 items-end">
              <p className="font-bold text-xl tracking-tight text-black">
                Tanggal Diselenggarakan
              </p>
              <p className="font-bold text-xl tracking-tight">
                {data.seminardate}
              </p>
              <div className="font-bold text-xl text-success-500 flex items-center">
                Selesai
                <img
                  className="ml-2 text-success-500"
                  src="../icon/accept-icon.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }