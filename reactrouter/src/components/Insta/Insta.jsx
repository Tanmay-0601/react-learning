import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Insta() {
    const data = useLoaderData()

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-6 text-3xl">

            <img
                src={data.profile_pic_url}
                alt="Instagram profile"
                className="w-32 h-32 rounded-full mx-auto mb-4"
            />

            <h1>
                Instagram Followers: {data.followers}
            </h1>

            <p className="text-xl mt-2">
                @{data.username}
            </p>

        </div>
    )
}

export default Insta

export const instaInfoLoader = async () => {

    const response = await fetch(
        'https://api.instagramapi.dev/v1/profile?handle=_tanmay0601',
        {
            headers: {
                Authorization: 'Bearer ig_live_XXXXXXXXXXXXXXXX'
            
            }
        }
    )

    const result = await response.json()

    console.log("Instagram API response:", result)

    if (!response.ok) {
        throw new Error(
            result?.error?.message || `API Error: ${response.status}`
        )
    }

    return result.data
}