import React from 'react'

function Form() {
    const formData = (event)=>{
        event.preventDefault()
        console.log("Form Data")
    }
    return (<>
     
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Create a Post</h1>
        <form onSubmit={formData}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter Your title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
         
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">Description</label>
            <input
              type="text"
              id="description"
              placeholder="Enter your description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            
            
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:text-white text-black py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Post
          </button>
        </form>
      </div>
    </div>
    </>
    )
}

export default Form