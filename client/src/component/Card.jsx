import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function Card() {
  const [ResponseData, setResponseData] = useState([]);
  const searchInputRef = useRef("")

  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/allpost');
      console.log(response.data);
      setResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const updateStory = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/api/v1/story/${id}`, {
        title: e.target.titleInput.value,
        body: e.target.bodyInput.value,
      });
      console.log('response: ', response.data);
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/v1/story/${id}`);
      console.log('response: ', response.data);
      
     await fetchData();
    } catch (e) {
      console.log(e);
    }
  };


  const searchStories = async (e) => {
    e.preventDefault();
    try {
      // setIsLoading(true);
      const resp = await axios.get(`http://localhost:8080/api/v1/search?q=${searchInputRef.current.value}`)
      // console.log(resp.data);
      setResponseData(resp.data);

      // setIsLoading(false);
    } catch (e) {
      // setIsLoading(false);
      console.log(e);
    }

  }

  return (
    <>    <form onSubmit={searchStories} className="text-right my-14">
      <div className="relative">
        <input
          ref={searchInputRef}
          id="searchInput"
          type="search"
          placeholder="Search"
          className="border rounded-full py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 w-64"
        />
        <button type="submit" hidden>Search</button>
      </div>
    </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {ResponseData.map((eachStory, index) => (
          <div key={index} className="bg-white rounded-lg p-4 mx-4 my-4 shadow-lg border border-gray-300">
            {eachStory.isEdit ? (
              <form onSubmit={(e) => updateStory(e, eachStory.id)}>
                <label htmlFor="titleInput" className="text-lg font-semibold">
                  Title:
                </label>
                <br />
                <input
                  defaultValue={eachStory.metadata.title}
                  name="titleInput"
                  type="text"
                  id="titleInput"
                  maxLength={20}
                  minLength={2}
                  required
                  className="w-full px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <br />
                <label htmlFor="bodyInput" className="text-lg font-semibold">
                  What's on your mind:
                </label>
                <br />
                <textarea
                  defaultValue={eachStory.metadata.body}
                  name="bodyInput"
                  type="text"
                  id="bodyInput"
                  maxLength={999}
                  minLength={10}
                  required
                  className="w-full px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                ></textarea>
                <br />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    eachStory.isEdit = false;
                    setResponseData([...ResponseData]);
                  }}
                  className="bg-gray-500 text-white px-3 py-2 rounded-md hover:bg-gray-700"
                >
                  Cancel
                </button>
              </form>
            ) : (
              <div>
                <h3 className="text-lg font-semibold">{eachStory.metadata.title}</h3>
                <p className="mt-2 text-gray-700">{eachStory.metadata.body}</p>
                <button
                  onClick={() => {
                    deleteHandler(eachStory.id);
                  }}
                  className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-700 mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    ResponseData[index].isEdit = true;
                    setResponseData([...ResponseData]);
                  }}
                  className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
