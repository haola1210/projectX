import React, { useState } from 'react';
import { BiSearchAlt, BiLoaderCircle } from "react-icons/bi";
import useSearchUser from "../../hooks/useSearchUser"
import TempAvatar from "../TempAvatar"

function SearchDropDown() {

    const [searchState, passString, show, setShow] = useSearchUser()
    const [value, setValue] = useState("")
    


    return (
        <div className="w-full px-3 py-2 flex justify-center items-center">
            {
                show && 
                (<div 
                    onClick={() => setShow(false)} 
                    className="absolute w-screen h-screen bg-black bg-opacity-20 top-0 left-0" 
                    style={{zIndex : 1}}
                />)
            }
            <div className="relative">
                <input 
                    type="text" 
                    className="styled-input rounded-full" 
                    placeholder="Tìm bạn bè..."
                    onChange={e => setValue(e.target.value)}
                    value = {value}
                />

                {/* dropdown  */}
                {   
                    show &&
                    <div 
                        style={{zIndex : 2}}
                        className="absolute w-full max-w-sx bg-gray-200 flex flex-col top-12 left-0 rounded-md"
                    >
                        {
                            searchState.data && searchState.data.length === 0 && 
                            (<p className="bg-yellow-100 p-1 font-semibold text-gray-900 text-sm flex justify-center items-center rounded-md">
                                Không tìm thấy người ấy
                            </p>)
                        }
                        {
                            searchState.error !== null && 
                            (<p className="bg-red-300 p-1 font-semibold text-gray-900 text-sm flex justify-center items-center rounded-md">
                                Lỗi khi tìm kiếm
                            </p>)
                        }
                        {
                            searchState.data && searchState.data.map((user, id) => (
                                <div key={id} 
                                    className="flex flex-row justify-start items-center p-1 hover:bg-gray-400 rounded-md" 
                                    style={{zIndex: 1}}>
                                    <TempAvatar character={user.name[0]} />
                                    <span className="pl-1 text-sm font-semibold">
                                        {user.name}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>

            <button 
                className="rounded-btn m-2 bg-blue-500 text-gray-200 dark:text-gray-800 dark:bg-yellow-500 disabled:opacity-50 "
                onClick={() => passString(value, () => setValue(""))}
                disabled={ searchState.isLoading }
            >
                {
                    searchState.isLoading ? <BiLoaderCircle className="animate-spin" /> : <BiSearchAlt />
                }
            </button>

            

        </div>
    )
}

export default SearchDropDown 