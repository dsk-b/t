import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sendmail() {
    const navigate = useNavigate();
    return <div classNameName='h-screen w-screen  flex justify-center items-center bg-gradient-to-r from-indigo-50 via-purple-100 to-pink-200'>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="From">
                    From
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="example@gmail.com" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="To">
                    To
                </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="example@gmail.com" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mesage">
                    Message
                </label>
                <textarea className="shadow h-400 appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                </textarea>
            </div>
            <div className="flex items-center justify-between">
                <button onClick={() => { navigate("/") }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    SEND
                </button>
            </div>
        </form>
    </div>
}

export default Sendmail