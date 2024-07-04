import React from 'react'
import Image from './Image';
import dayjs from 'dayjs'

const Detail = ({ detail }) => {
    console.log(detail);
    return (
        <div className='hidden w-full md:w-[50%] h-full md:flex justify-center items-center bg-teal-300'>

            {detail ? <div className='w-[350px] min-h-[70vh] bg-white flex flex-col justify-center items-center gap-2 p-2 rounded-lg  relative z-10 overflow-hidden'>

                <div className='w-[200px] h-[200px]'><Image user={detail} /></div>

                <p className='font-bold text-teal-300'>{detail.profile?.username}</p>

                <p className='text-center'>{detail?.Bio}</p>

                <div className='flex flex-col gap-2'>
                    <div className='flex gap-1'>
                        <p className='w-[100px] text-[18px] text-teal-500 font-bold'>First Name</p>
                        <span>:</span>
                        <span className='text-[15px] text-black font-medium'>{detail.profile.firstName}</span></div>
                    <div className='flex gap-1'>
                        <p className='w-[100px] text-[18px] text-teal-500 font-bold'>Last Name</p>
                        <span>:</span>
                        <span className='text-[15px] text-black font-medium'>{detail.profile.lastName}</span></div>
                    <div className='flex gap-1'>
                        <p className='w-[100px] text-[18px] text-teal-500 font-bold'>Job</p>
                        <span>:</span>
                        <span className='text-[15px] text-black font-medium'>{detail.jobTitle}</span></div>
                    <div className='flex gap-1'>
                        <p className='w-[100px] text-[18px] text-teal-500 font-bold'>Email</p>
                        <span>:</span>
                        <span className='text-[15px] text-black font-medium'>{detail.profile.email}</span></div>
                </div>

                <p className='absolute top-2 right-2 bg-teal-900 text-white text-[10px] p-1 rounded-lg'>{dayjs(detail.createdAt).format("DD MMM YYYY")}</p>

                <div className='circle'></div>

            </div> : <div className='w-full h-full flex justify-center items-center'>NO DATA TO SHOW</div>}

        </div>
    )
}


export default Detail