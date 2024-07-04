import React from 'react'
import Image from './Image';

const Detail2 = ({ detail, setShow }) => {
    console.log(detail);
    return (
        <div onClick={() => setShow(false)} className='fixed top-0 left-0 w-full md:w-[50%] h-full bg-gradient-to-tr from-black flex md:hidden justify-center items-center z-10'>

            {detail ? <div className='w-[90%] min-h-[70vh] bg-white flex flex-col justify-center items-center gap-2 p-2 rounded-lg'>

                <div onClick={(e) => e.stopPropagation()} className='w-[200px] h-[200px]'><Image user={detail} /></div>

                <p className='font-bold'>{detail.profile?.username}</p>

                <p className='text-center text-[14px]'>{detail?.Bio}</p>

                <div className='flex flex-col gap-2'>
                    <div className='flex gap-1'>
                        <p className='w-[85px] text-[16px] text-teal-500 font-bold'>First Name</p>
                        <span>:</span>
                        <span className='text-[12px] text-black font-medium'>{detail.profile.firstName}</span></div>
                    <div className='flex gap-1'>
                        <p className='w-[85px] text-[16px] text-teal-500 font-bold'>Last Name</p>
                        <span>:</span>
                        <span className='text-[12px] text-black font-medium'>{detail.profile.lastName}</span></div>
                    <div className='flex gap-1'>
                        <p className='w-[85px] text-[16px] text-teal-500 font-bold'>Job</p>
                        <span>:</span>
                        <span className='text-[12px] text-black font-medium'>{detail.jobTitle}</span></div>
                    <div className='flex gap-1'>
                        <p className='w-[85px] text-[16px] text-teal-500 font-bold'>Email</p>
                        <span>:</span>
                        <span className='text-[12px] text-black font-medium'>{detail.profile.email}</span></div>
                </div>

            </div> : <div className='w-full h-full flex justify-center items-center'>loading...</div>}

        </div>
    )
}


export default Detail2