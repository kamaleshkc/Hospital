import React from "react";

export default function  CreatePost  ()  {
  return (
    <div >
      <div className="flex  items-center w-full  px-6 py-2 mx-auto  ">
        <div className="mx-auto w-full">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-5">
            Create posts
          </h3>
          <form>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Title
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Discription
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="discription"
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
                rows={4}
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32 hover:bg-blue-500 hover:text-white text-center">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


