import React from 'react'

function Card(props) {
  console.log(props.data)
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {props.data.map((item, key) => (

          <div className="bg-white rounded-lg p-4 mx-4 my-4 shadow-inner border border-black border-double" key={key}>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
            <p className="mt-2 text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>

    </>
  )
}

export default Card

