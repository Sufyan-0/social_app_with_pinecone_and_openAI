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
  const EditFunction =()=>{
    alert("Edit Function Working Soon")
  }
  const Deletefunction = ()=>{
    alert("Delete Function Working Soon")
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {ResponseData.map((item, key) => (

          <div className="bg-white rounded-lg p-4 mx-4 my-4 shadow-inner border border-black border-double" key={key}>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{item?.metadata?.title}</h2>
            </div>
            <p className="mt-2 text-gray-700">{item?.metadata?.body}</p>
            <br />
            <button onClick={EditFunction} className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 mx-3">Edit</button>
            <button onClick={Deletefunction} className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700">Delete</button>

          </div>
        ))}
      </div>

    </>
  )
}

export default Card

