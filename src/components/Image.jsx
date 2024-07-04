import React, { useState } from 'react'
import avatar from '../assets/avatar.svg'
const Image = ({ user }) => {

    let [data, setData] = useState(true);

    const handleImgError = () => {
        console.log("error in image");
        setData(false)
    }

    return (
        <div className='w-full h-full bg-teal-900 rounded-full'>
            {data ? <img className='w-full h-full' onError={handleImgError} src={user.avatar} alt="" srcSet="" /> : <img className='w-full h-full' src={avatar} alt="" srcSet="" />}
        </div>
    )
}

export default Image