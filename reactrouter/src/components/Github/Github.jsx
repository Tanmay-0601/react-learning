// import React from 'react'
// import {useState,useEffect} from 'react'
// import { useLoaderData } from 'react-router-dom'
// function Github(){
//     const data = useLoaderData ()
//     // const [data,setData]=useState([])
    // useEffect(()=>{

        
        
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)

    //     })
    // },[])
//     return(
//         <div className='text-center m-4 bg-gray-600 text-white p-4
//         text-3xl'>
//             Github followers {data.followers}
//            <img src={data.avatar_url} alt="Git pictures" width={300 }/>
//         </div>
//     )
// }
import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <img
                src={data.avatar_url}
                alt="Git picture"
                className="w-32 h-32 rounded-full mx-auto mb-4"
            />

            <h1>
                Github followers: {data.followers}
            </h1>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch(
        'https://api.github.com/users/Tanmay-0601'
    )

    return response.json()
}