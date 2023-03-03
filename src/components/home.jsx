import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();
    // function handledate(e){
    //     console.log(e.target.value);
    // }
    return <div className='h-screen w-screen flex items-center bg-gradient-to-r from-indigo-50 via-purple-100 to-pink-200'>
        <div className='h-screen items-center w-1/2 flex justify-center border-r-2 border-dashed border-indigo-300'>
          <img src="./src/assets/undraw_ideas_re_7twj.svg" height={400} width={400} alt="image" />
        </div>
        <div className='w-1/2 h-screen flex flex-col justify-center items-center'>
        <h2 className='text-7xl mb-6 font-bold text-slate-700'>POC</h2>
            <button class="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600" onClick={()=>navigate("/dashboard")}>
                GO TO DASHBOARD ➪
            </button>
        {/* <input type='date' onChange={handledate}></input>
        <input type='date' onChange={handledate}></input> */}

        



        </div>
    </div>
}