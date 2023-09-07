import React, { useRef, useState } from 'react';
import Card from './Card';
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState([]);
  const titleRef = useRef('');
  const descriptionRef = useRef('');
  const baseURL = 'http://localhost:8080';

  const handleSubmit = async (event) => {
    event.preventDefault();

    const title = titleRef.current.value;
    const desc = descriptionRef.current.value;

    try {
      const res = await axios.post(`${baseURL}/api/v1/postStory`, {
        title: title,
        desc: desc,
      })
      setFormData((previousData) => [...previousData, { title, desc }]);
      console.log('Form Data');
      console.log(formData);
      event.target.reset();
      // console.log(res.data); // Assuming the server returns data
      console.log('Called');
      console.log(res)
    } catch (error) {
      console.error(error);
    }

 
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-4">Create a Post</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter Your title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                ref={titleRef}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700">
                Description
              </label>
              <input
                type="text"
                id="description"
                placeholder="Enter your description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                ref={descriptionRef}
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
      <Card data={formData}></Card>
    </>
  );
}

export default Form;
