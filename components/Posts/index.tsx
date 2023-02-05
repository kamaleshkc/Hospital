import React, { useEffect, useState } from "react"
import Link from "next/link";


const index = () => {

//   const [post,setPost]=useState();

// console.log(post)
  
//   useEffect(() => {
   
//     fetch('http://localhost:4000/post',{ headers: {
      
//     }})
//       .then((res) => res.json())
//       .then((data) => {      
//        setPost(data)
//       })
//   }, [])
  
 
  



  return (
    <div>
      <div className="flex  items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
        

        <Link href="/posts">
          <h3 className="text-lg font-bold text-blue-500 sm:text-xl md:text-2xl">
            नि:शुल्क स्वास्थ्य शिविर सम्पन्न ।
          </h3>
          <p className="text-sm font-bold text-gray-300">August 22,2021</p>
          <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
            Please help with how you did the migrations for the blog database
            fields.I tried mine using exactly what you instructed but its not
            working!!.
          </p>
        </Link>
      </div>

      <div className="flex  items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
       

      <Link href="/posts">
          <h3 className="text-lg font-bold text-blue-500 sm:text-xl md:text-2xl">
            नि:शुल्क स्वास्थ्य शिविर सम्पन्न ।
          </h3>
          <p className="text-sm font-bold text-gray-300">August 22,2021</p>
          <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
            Please help with how you did the migrations for the blog database
            fields.I tried mine using exactly what you instructed but its not
            working!!.
          </p>
        </Link>
      </div>

      <div className="flex  items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
        <a href="#" className="flex items-center mt-6 mb-6 mr-6"></a>

        <Link href="/posts">
          <h3 className="text-lg font-bold text-blue-500 sm:text-xl md:text-2xl">
            नि:शुल्क स्वास्थ्य शिविर सम्पन्न ।
          </h3>
          <p className="text-sm font-bold text-gray-300">August 22,2021</p>
          <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
            Please help with how you did the migrations for the blog database
            fields.I tried mine using exactly what you instructed but its not
            working!!.
          </p>
        </Link>
      </div>

      {/* <div className="pt-8 pb-4 ">        
                        <a href="#" className="block bg-white py-3 border-t pl-8">
                            <div className="px-4 py-2 flex  justify-end">                                
                                <span className=" text-sm font-semibold text-gray-600">21-2-2020</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 px-4 py-2 flex">नि:शुल्क स्वास्थ्य शिविर सम्पन्न ।</span>
                            <p className="px-4 py-2 text-sm font-semibold text-gray-700 text-left">Lorem ipsum dolor sit amet consectetur adipisicing dolor sit sit elo  amet consectetur adipisicin elit....</p>
                        </a>
                        <a href="#" className="block bg-white py-3 border-t pl-8">
                            <div className="px-4 py-2 flex  justify-end">                               
                                <span className="text-sm font-semibold text-gray-600">21-2-2020</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 px-4 py-2 flex">निवेदक रविप्रकाश शर्मा समेतको रिट निवेदनमा सम्मानीत सर्वोच्च अदालतबाट जारी भएको आदेशको पूर्णपाठ</span>
                            <p className="px-4 py-2 text-sm font-semibold text-gray-700 text-left">Lorem ipsum dolor sit amet consectetur adipisicing  dolor sit sit elo  amet consectetur adipisicin elit....</p>
                        </a>
                        <a href="#" className=" block bg-white py-3 border-t pl-8">
                            <div className="px-4 py-2 flex  justify-end">
                              
                                <span className="text-sm font-semibold text-gray-600">21-2-2020</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 px-4 py-2 flex">प्रेस विज्ञप्ती </span>
                            <p className="px-4 py-2 text-sm font-semibold text-gray-700 text-left">Lorem ipsum dolor sit amet consectetur adipisicing  dolor sit sit elo  amet consectetur adipisicin elit....</p>
                        </a>
                        <a href="#" className="block bg-white py-3 border-t pl-8">
                            <div className="px-4 py-2 flex  justify-end">
                              
                                <span className="text-sm font-semibold text-gray-600">21-2-2020</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 px-4 py-2 flex">प्रेस विज्ञप्ती </span>
                            <p className="px-4 py-2 text-sm font-semibold text-gray-700 text-left">Lorem ipsum dolor sit amet consectetur adipisicing  dolor sit sit elo  amet consectetur adipisicin elit....</p>
                        </a>
                    </div> */}

      <div className="flex justify-center items-center w-full px-6 py-6 mx-auto   rounded-lg sm:px-8 md:px-12 sm:py-8  lg:w-5/6 xl:w-2/3">
        
        <button className="outline-none focus:outline-none border px-3 py-2 bg-white rounded-sm flex items-center min-w-32 hover:bg-blue-500 hover:text-white ">
          <span className="pr-1 font-semibold flex-1">Read more</span>
        </button>
      </div>
    </div>
  );
};





export default index;
