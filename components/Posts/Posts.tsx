import React, { useEffect, useState } from "react";
import Link from "next/link";

const Posts = () => {
  interface IData {
    _id: number;
    texts: string;
    // add any other properties you expect to receive from the server response
  }

  const [data, setData] = useState<IData[]>([]);

  console.log(data);

  useEffect(() => {
    fetch("https://hospital-w8r3.onrender.com/posts", { headers: {} })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      {data.map((item: any) => (
        <div className="flex  justify-center items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
        <Link href="/posts">
          <h3 className="text-lg font-bold text-blue-500 sm:text-xl md:text-2xl">
            {item.title}
          </h3>
          <p className="text-sm font-bold text-gray-300">August 22,2021</p>
          <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
           {item.texts}
          </p>
        </Link>
      </div>
      ))}

     

      {/* <div className="flex  items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
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
      </div> */}

      <div className="flex justify-center items-center w-full px-6 py-6 mx-auto   rounded-lg sm:px-8 md:px-12 sm:py-8  lg:w-5/6 xl:w-2/3">
        <button className="outline-none focus:outline-none border px-3 py-2 bg-white rounded-sm flex items-center min-w-32 hover:bg-blue-500 hover:text-white ">
          <span className="pr-1 font-semibold flex-1">Read more</span>
        </button>
      </div>
    </div>
  );
};

export default Posts;
