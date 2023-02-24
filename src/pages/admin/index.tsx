import { BACKEND_URL } from "appconfig";
import axios from "axios";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";

export default function  Index  ()  {
   const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      email: event.target.value,
    }));
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      password: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      axios
        .post(BACKEND_URL+"login", credentials,{ headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=UTF-8'
      }})
        .then(response => {
          if (response?.data && response.data.token) {
            console.log(response.data)
            localStorage.setItem('token', JSON.stringify(response.data))
            router.push('/createPost');
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
    <div
      className=" flex justify-center items:center"
      style={{ height: "100vh", alignItems: "center" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center lg:justify-start">
          <div className="flex  flex-col m-auto text-left ml-2">
           
          <img src="emblemofNepal.svg"   width={50}height={50} className="flex items-center "></img>
            <p>मदन भण्डारी होस्पितल अस्पताल र ट्रमा सेन्टर </p>
            <p> Madan Bhandari Hospital and Trauma Center</p>
          </div>
          <p className="text-lg mb-0 mr-4">Sign in with</p>
        </div>
        <div className="mb-6">
          <input
            value={credentials.email} onChange={handleEmailChange}
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Email address"
          />
        </div>

        <div className="mb-6">
          <input
          value={credentials.password} onChange={handlePasswordChange}
            type="password"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Password"
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck2"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="exampleCheck2"
            >
              Remember me
            </label>
          </div>
          <a href="#!" className="text-gray-800">
            Forgot password?
          </a>
        </div>

        <div className="text-center lg:text-left">
          <div className="flex justify-center">
            <button
              type="submit"
              className="  outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center  hover:bg-blue-500 hover:text-white text-center"
            >
              Login
            </button>
          </div>

          <p className="text-sm font-semibold mt-2 pt-1 mb-0">
            Don &apos;t have an account?
            <a
              href="#!"
              className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
            >
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

