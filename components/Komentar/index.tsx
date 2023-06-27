export default function Komentar(props: { user : any; stars: any; comment : any; }) {
    return (
        <>
        <div className="flex flex-col w-1/4 pt-4 gap-4">
            <img src="../../icon/stars.png" className="w-40 h-6"/>
            <p className="text-justify">
                {props.comment}
            </p>
            <div className="flex flex-col">
                <div className="flex flex-row items-center flex justify-between">
                    <div className="flex flex-row flex items-center gap-1">
                        <img src="../../face.png" className="w-10 h-10 rounded-full"/>
                        <p>{props.user}</p>
                    </div>
                    <p>Feb 23, 2023</p>
                </div>
            </div>
        </div>
        </>
    )  
}