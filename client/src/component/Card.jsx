import React, { useEffect, useState } from 'react'
import axios  from 'axios';
function Card(props) {
  const [ResponseData , setResponseData] = useState([])
  useEffect(()=>{
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/allpost');
        console.log(response.data);
        setResponseData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();

  },[])
  console.log(props.data)
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {ResponseData.map((item, key) => (

          <div className="bg-white rounded-lg p-4 mx-4 my-4 shadow-inner border border-black border-double" key={key}>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{item?.metadata?.title}</h2>
            </div>
            <p className="mt-2 text-gray-700">{item?.metadata?.body}</p>
          </div>
        ))}
      </div>

    </>
  )
}

export default Card

