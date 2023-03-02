import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useRef } from 'react'

export default function UserCard({ item }) {
    let [isOpen, setIsOpen] = useState(false)
    var curr = new Date();
    var day = curr.getDay() - 1;
    var firstday = new Date(curr.getTime() - 60 * 60 * 24 * day * 1000);
    var lastday = new Date(firstday.getTime() + 60 * 60 * 24 * 4 * 1000);

    const textareaRef = useRef();
    function closeModal() {
        // console.log(textareaRef.current.value);
        const res = fetch("")
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <div className="w-full mb-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                <div className="flex flex-col items-center pb-10">
                    {/* <img className="w-24 h-24 mb-3 rounded-full shadow-clg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" /> */}
                    <h5 className="m-4 text-xl font-medium text-gray-600 dark:text-white">{item.name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.username}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.id}</span>
                    <div className="flex mt-4">
                        <button onClick={openModal}
                            type='button' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD </button>
                    </div>
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Project Status
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Project Name : {item.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Emp ID : {item.id}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Emp Name : {item.username}
                                        </p>
                                        <p>start : {` ${firstday.getDate()} - ${firstday.getMonth()} - ${firstday.getFullYear()}`}</p>
                                        <p>end : {` ${lastday.getDate()} - ${lastday.getMonth()} - ${lastday.getFullYear()}`}</p>
                                        <textarea ref={textareaRef} rows="4" cols="45">

                                        </textarea>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            SAVE
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>)
}
