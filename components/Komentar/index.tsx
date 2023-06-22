export default function Komentar() {
    return (
        <>
        <div className="flex flex-col w-1/4 pt-4 gap-4">
            <img src="../../icon/stars.png" className="w-40 h-6"/>
            <p className="text-justify">
                Towering performance by Matt Damon as a troubled working class who needs to address his creative genius elevates this drama way above its therapeutic approach, resulting in a zeitgeist film that may touch chord with young viewers the way The Graduate did
            </p>
            <div className="flex flex-col">
                <div className="flex flex-row items-center flex justify-between">
                    <div className="flex flex-row flex items-center gap-1">
                        <img src="../../face.png" className="w-10 h-10 rounded-full"/>
                        <p>User</p>
                    </div>
                    <p>Feb 23, 2023</p>
                </div>
            </div>
        </div>
        </>
    )  
}