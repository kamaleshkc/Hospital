import { BACKEND_URL } from "appconfig";
import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";

interface MyObject {
  token: string;
   }

export default function  CreatePost  ()  {
 
  const [token, setMyObject] = useState<{ [key: string]: any }>({});

 


  type FormValues = {
    title: string;
    description: string;
    texts:string;
  };

  const [formData, setFormData] = useState<FormValues>({
    title: '',
    description: '',
    texts: '',
  });


  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { title, value } = event.target;
    setFormData(prevState => ({ ...prevState, [title]: value }));
  };
 
  useEffect(() => {
    // Perform localStorage action
    const storedValue = localStorage.getItem("token");
    if (storedValue) {
      const parsedValue = JSON.parse(storedValue);
      setMyObject(parsedValue);

      console.log(formData)
    }
   

  }, [])
  
  
 
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
   
  

    try {
      axios
        .post(BACKEND_URL+"posts", formData,{ headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'JWT ' +token.token

          
      }})
        .then(response => {
          if (response?.data && response.data.token) {
            console.log(response.data)
                       
          }


        })
        .catch(error => {
          console.log(error);
        });
      // Set user token in local storage or session storage
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div >
      <div className="flex  items-center w-full  px-6 py-2 mx-auto  ">
        <div className="mx-auto w-full">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-5">
            Create posts 
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="title"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Title
              </label>
              <input
                value={formData.title} onChange={handleChange}
                type="text"
                title="title"
                id="title"
                placeholder="Title"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="description"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                description
              </label>
              <input
                value={formData.description} onChange={handleChange}
                type="text"
                title="description"
                id="description"
                placeholder="description"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Message
              </label>
              <textarea
                 value={formData.texts} onChange={handleChange}
                rows={4}
                title="texts"
                id="texts"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button 
                 type="submit"
              className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32 hover:bg-blue-500 hover:text-white text-center">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


function setToken(parsedObject: any) {
  throw new Error("Function not implemented.");
}

