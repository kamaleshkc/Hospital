import React from "react";
import CreatePost from "../Posts/CreatePost";

export default function  index () {
  return (
    <div>
      <main
        className="min-h-screen w-full bg-gray-100 text-gray-700 "
        x-data="layout"
      >
        <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
          <div className="flex items-center space-x-2">
            <button type="button" className="text-3xl">
              <i className="bx bx-menu"></i>
            </button>
            <a
              className="flex z-10 text-red font-medium"
              href="#"
              aria-label="logo"
            >
              <img
                src="emblemofNepal.svg"
                width={50}
                height={50}
                className="flex justify-between item-center text-left"
              ></img>
              <div className="flex  flex-col m-auto text-left ml-2">
                <p>मदन भण्डारी होस्पितल अस्पताल र ट्रमा सेन्टर </p>
                <p> Madan Bhandari Hospital and Trauma Center</p>
              </div>
            </a>
          </div>
        </header>

        <div className="flex">
          <aside
            className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2"
            x-show="asideOpen"
            style={{height:"93.9vh"}}
          >
            <a
              href="#"
              className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
            >
              <span className="text-2xl">
                <i className="bx bx-home"></i>
              </span>
              <span>Add Post</span>
            </a>

            <a
              href="#"
              className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
            >
              <span className="text-2xl">
                <i className="bx bx-user"></i>
              </span>
              <span>Profile</span>
            </a>
          </aside>

            <div className="w-full">
                <CreatePost></CreatePost>
            </div>
         
        </div>
      </main>
    </div>
  );
};


