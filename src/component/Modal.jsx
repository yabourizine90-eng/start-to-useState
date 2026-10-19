import "../App.css"
export default function Modal({isVisible,message}){
    const messageColor=message ? "bg-red-800/50 text-red-700" :"bg-green-800/50 text-green-700"
    if(isVisible){
        return(
        <div className={`absolute top-0 ${messageColor} w-full h-full flex justify-center items-center`}>
            <div className="bg-white w-320 h-20 flex justify-center items-center">
                <h1 className=" text-xl font-black">{message ? message : "The Form Has been Submitted Succeessfully"}</h1>
            </div>
        </div>
    )
    }
    
}