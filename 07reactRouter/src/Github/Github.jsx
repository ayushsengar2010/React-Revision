import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data =useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ayushsengar2010')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //      })
    // }, [])

  return (
    <div className="flex flex-col items-center m-8 bg-gray-700 text-white p-6 rounded-lg shadow-lg">
  <h2 className="text-3xl font-semibold mb-4">GitHub Followers: {data.followers}</h2>
  <img 
    className="rounded-md border-4 border-white shadow-md" 
    src={data.avatar_url} 
    alt="GitHub Profile Picture" 
    width={250} 
  />
</div>

  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ayushsengar2010')
    return response.json()
}