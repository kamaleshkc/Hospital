import Image from "next/image";
import React from "react";

const index = () => {
  return (
   
      <div className="gap-6 min-w-100 flex flex-row lg:flex-row text-left flex-wrap justify-center">
        <div className="mt-4 bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              className="w-full rounded-t-lg p-2"
              width={800}
              height={10}
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="staff image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                Dr Sanim Rai
              </h3>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <a>
                Lorem ipsum dolor sit amet consectetur adipisicing dolor sit
                amet consectetur adipisicing dolor sit amet consectetur
                adipisicing dolor sit amet consectetur adipisicing{" "}
              </a>
            </div>
          </div>
        </div>

        <div className=" mt-4 bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              className="w-full rounded-t-lg p-2"
              width={800}
              height={10}
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="staff image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                Dr Sanim Rai
              </h3>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <a>
                Lorem ipsum dolor sit amet consectetur adipisicing dolor sit
                amet consectetur adipisicing dolor sit amet consectetur
                adipisicing dolor sit amet consectetur adipisicing{" "}
              </a>
            </div>
          </div>
        </div>

        <div className=" mt-4 bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              className="w-full rounded-t-lg p-2"
             width={800}
              height={10}
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="staff image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                Dr Sanim Rai
              </h3>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <a>
                Lorem ipsum dolor sit amet consectetur adipisicing dolor sit
                amet consectetur adipisicing dolor sit amet consectetur
                adipisicing dolor sit amet consectetur adipisicing{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default index;
