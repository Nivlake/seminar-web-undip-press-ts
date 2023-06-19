export default function Seminar() {
    return (
      <div className="max-w-xs rounded-xl overflow-hidden shadow-lg">
        <img src="/homecard.svg" alt="Placeholder" className="w-full" />
        <div className="p-5 space-y-4">
          <div className="flex flex-row space-x-2">
            <img src="../icon/narasumber.svg" />
            <div className="text-neutral-900 flex flex-row">
                <div>
                    Narasumber 1, Narasumber 2
                </div>
            </div>
          </div>
          <div className="font-bold text-xl mb-2">The Future of Artificial Intelligence</div>
          <p className="text-gray-700 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet semper ipsum semper ipsum semper
            ipsum semper ipsum semper ipsum semper ipsum.
          </p>
          <div className="flex flex-col">
            <div className="font-bold text-gray-900">
                Rabu, 31 Januari 2023
            </div>
            <div className="font-bold text-gray-900">
                11.00 - 13.00 WIB
            </div>
           </div>
        </div>
      </div>
    );
  }
  