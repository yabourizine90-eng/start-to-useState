import Modal from "./Modal"
import { useState } from 'react'
export default function LoanForm(){
    const [input,setinput]=useState({
      name:"",
      tel:"",
      age:"",
      isEmployee:false,
      salary:"500$"})
    const [showModal,setShowModal]=useState(false);
    const [message,setMessage]=useState(null);

    let btnIsDisabled=input.name == "" ||input.tel == ""|| input.age == "";
    const color=btnIsDisabled ? "bg-gray-600 hover:bg-gray-700" : "bg-blue-600 hover:bg-blue-700"
    return(
    <div 
      className="min-h-screen w-full flex justify-center items-center bg-gray-100"
      onClick={() => setShowModal(false)}
    >
      <div className="w-300 relative h-150 bg-gray-300 ml-20 mr-20 mt-10 border rounded p-3"
      onClick={(e) => e.stopPropagation()}>
        <h1 className="text-5xl text-center font-black mb-10">Requesting a loan</h1>
        <hr />
        <input 
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 
        rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
        placeholder-gray-400 mt-5" 
        type="text"
        placeholder="Name"
        value={input.name}
        onChange={(item)=>{
          setinput({...input,name:item.target.value})
        }}/>

        <input 
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 
        rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
        placeholder-gray-400 mt-5" 
        type="number"
        placeholder="Phone number"
        value={input.tel}
        onChange={(item)=>{
          setinput({...input,tel:item.target.value})
        }}/>
        <input 
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 
        rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
        placeholder-gray-400 mt-5" 
        type="number"
        placeholder="age"
        value={input.age}
        onChange={(item)=>{
          setinput({...input,age:item.target.value})
        }}/>
        <div className="flex justify-center items-center">
          <p>Are you an employee?
          </p>
          <input
          className="w-5 h-5 m-3 text-blue-600 bg-white border border-gray-300 rounded 
          cursor-pointer"
          type="checkbox"
           
          checked={input.isEmployee}
          
          onChange={(item)=>{
            
            setinput({...input,isEmployee:item.target.checked})
            
            
        }}/>
        </div>

        <label >Salary</label>
        <select
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 
        rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-1" 
        value={input.salary}
          
        onChange={(item)=>{
          setinput({...input,salary:item.target.value})
          
        }}
        >
          <option >500$</option>
          <option >1000$</option>
          <option >1500$</option>
        </select>
        <button className={`${color} w-full px-4 py-2 text-sm 
          font-medium text-white  rounded-lg 
          focus:outline-none focus:ring-2 
          focus:ring-blue-500 focus:ring-offset-2 transition-colors 
          mt-5`}
          disabled={btnIsDisabled}
          onClick={()=>{
            setMessage(null)

            if(input.tel.length != 10){
              setMessage("The phone number is not correct")
            }else if(input.age < 18 || input.age > 100){
              setMessage("The age is not correct")
            }
            
            setShowModal(true)
            
          }}
          >
          Submit
        </button>
       
      </div> 
      <Modal message={message} isVisible={showModal}/>
      
    </div>
    )
}