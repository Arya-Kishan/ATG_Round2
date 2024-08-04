import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"
import Image from './Image'
import Detail from './Detail'
import Detail2 from './Detail2'
import searchIcon from '../assets/searchIcon1.svg'
import cross from '../assets/cross.svg'
import loader1 from '../assets/loader.svg'

const List = ({ detail, setDetail }) => {

    const [users, setUsers] = useState(null)
    const [show, setShow] = useState(false)
    const [loader, setLoader] = useState(false)
    const [searchResult, setSearchResult] = useState(null)
    const [showSearch, setShowSearch] = useState(false)
    const inputRef = useRef(null);

    const getData = async () => {
        let { data } = await axios("https://602e7c2c4410730017c50b9d.mockapi.io/users")
        setUsers(data)
        setDetail(data[0])
        setLoader(true)
    }

    useEffect(() => {
        getData();
    }, [])

    const handleClick = (detail) => {
        setDetail(detail)
        setShow(true)
    }

    const handleInput = (e) => {

        let filterData = users;
        setShowSearch(true)

        if (e.target.value.length > 0) {
            let data = filterData.filter((elem) => (elem?.profile.firstName.toLowerCase().startsWith(e.target.value.toLowerCase())))
            setSearchResult(data)
        } else {
            setShowSearch(false)
            setSearchResult(null)
        }
    }

    return (
        <div className='w-full md:w-[50%] h-full flex flex-col gap-2 px-4 py-2 relative'>

            <div className='flex justify-between items-center p-1'>
                <p className='text-[30px] font-bold'>Users</p>
                <p className='text-[16px]'>{users ? users?.length : "00"}</p>
            </div>

            {/* INPUT SEARCH USER */}
            <div className='flex justify-center items-center bg-white px-2
            '>
                <input ref={inputRef} className='w-full text-[18px] p-2 border-none outline-none' onChange={handleInput} placeholder='Search User...' type="text" />
                {!showSearch ? <img src={searchIcon} alt="" srcSet="" /> : <img onClick={() => {
                    setShowSearch(false)
                    inputRef.current.value = ""
                }} src={cross} alt="" srcSet="" />}
            </div>

            {loader ? <>

                {/* SHOWING SEARCH RESULT */}
                {showSearch && <div className='w-full h-full bg-white overflow-scroll'>
                    {searchResult?.map((e) => (
                        <div key={`${e.id}${e.profile.email}`} onClick={() => handleClick(e)} className={`flex gap-2 p-2 hover:bg-teal-300 cursor-pointer ${detail?.id == e?.id ? "bg-teal-300" : "transparent"} shadow-lg`}>

                            <div className='w-[40px] h-[40px]'><Image user={e} /></div>

                            <p>
                                <span>{e.profile.firstName} {e.profile.lastName}</span>
                            </p>

                        </div>
                    ))}
                </div>}

                {/* SHOWING USER LIST  */}
                {!showSearch && <div className='w-full h-full flex flex-col gap-2 overflow-scroll'>

                    {users && users.length > 1 ? <>

                        {users.map((e) => (
                            <div key={`${e.id}${e.profile.email}`} onClick={() => handleClick(e)} className={`flex gap-2 p-2 hover:bg-teal-300 cursor-pointer ${detail?.profile.username == e?.profile.username ? "bg-teal-300" : "transparent"} shadow-lg`}>

                                <div className='w-[40px] h-[40px]'><Image user={e} /></div>

                                <p>
                                    <span>{e.profile.firstName} {e.profile.lastName}</span>
                                </p>

                            </div>
                        ))}

                    </> : <div className='w-full h-full flex justify-center items-center'>NO DATA TO SHOW</div>}

                </div>}

            </> : <div className='w-full h-full flex justify-center items-center'><img className='w-[80px] h-[80px]' src={loader1} alt="" srcSet="" /></div>}



            {/* mobile responsive */}
            {show && <Detail2 detail={detail} setShow={setShow} />}

        </div>
    )
}

export default List