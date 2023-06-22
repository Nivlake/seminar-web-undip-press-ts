export default function Seminar(props: { name: any; short_description: any; speaker: any; date_and_time: any; }) {
    return (
      <div className="max-w-xs rounded-xl overflow-hidden shadow-lg">
        <img src="/homecard.svg" alt="Placeholder" className="w-full" />
        <div className="p-5 space-y-4">
          <div className="flex flex-row space-x-2">
            <img src="../icon/narasumber.svg" />
            <div className="text-neutral-900 flex flex-row">
                <div>
                    {props.speaker}
                </div>
            </div>
          </div>
          <div className="font-bold text-xl mb-2">{props.name}</div>
          <p className="text-gray-700 line-clamp-3">
            {props.short_description}
          </p>
          <div className="flex flex-col">
            <div className="font-bold text-gray-900">
              {new Date(props.date_and_time).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div className="font-bold text-gray-900">
                11.00 - 13.00 WIB
            </div>
           </div>
        </div>
      </div>
    );
  }
  