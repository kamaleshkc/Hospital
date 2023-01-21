import React from "react";
import Link  from "next/link";
import Image from "next/image";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGooglePlus,
  AiFillFacebook,
} from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-full text-sm">
      <div className="bg-footer grid grid-row-2">
        
        <div className="container grid   sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-12 rounded-0 mt-5">
          <div className="grid-item  lg:col-span-3 md:col-span-4 sm:col-span-3 m-3">
            <h5 className="mb-3 text-white  font-inter ">Contact Us</h5>
            <Link legacyBehavior href="#">
              <span className="flex items-center mb-2  text-white cursor-pointer">
                <FaGlobeAmericas className="mr-2" />
                <p className="text-white  mb-0 ">
                  Durbar-Marg, Kathmandu
                </p>
              </span>
            </Link>
            <Link legacyBehavior href="#">
              <span className="flex items-center mb-2  text-white cursor-pointer">
                <BiMailSend className="mr-2" />
                <p className="text-white  mb-0 ">
                  hospital@hospital.com
                </p>
              </span>
            </Link>
            <Link legacyBehavior href="#">
              <span className="flex items-center mb-2  text-white cursor-pointer">
                <IoIosCall className="mr-2" />
                <p className="text-white mb-0 ">
                  01-4232144 | 01-4232044
                </p>
              </span>
            </Link>
          </div>
          <div className="grid-item  lg:col-span-2 md:col-span-2 sm:col-span-2 m-3 ">
            <h5 className="mb-3 text-white font-inter text-xl">Information</h5>
            <Link legacyBehavior href="/delivery-information">
              <a className="block text-gray-200 hover:text-footerHover  font-robo my-1">
                Durbar-Marg, Kathmandu
              </a>
            </Link>
            <Link legacyBehavior href="/privacy-policy">
              <a className="block text-gray-200  hover:text-footerHover  font-robo my-1">
                hospital@hospital.com
              </a>
            </Link>
            <Link legacyBehavior href="/terms-and-conditions">
              <a className="block text-gray-200  hover:text-footerHover  my-1">
                01-4242144-4232044
              </a>
            </Link>
          </div>
          <div className="grid-item  lg:col-span-2 md:col-span-4 sm:col-span-3 m-3">
            <h5 className="mb-3 text-white font-inter text-xl">Links</h5>
            <Link legacyBehavior href="/about">
              <a className="block text-gray-200 hover:text-footerHover font-robo  my-1">
                About
              </a>
            </Link>
            <Link legacyBehavior href="/seller-benifits">
              <a className="block text-gray-200 hover:text-footerHover font-robo  my-1">
                Patients  Benifits
              </a>
            </Link>
            <Link legacyBehavior href="/mobile-app">
              <a className="block text-gray-200 hover:text-footerHover font-robo  my-1">
                Mobile App
              </a>
            </Link>
            <Link legacyBehavior href="/career">
              <a className="block text-gray-200 hover:text-footerHover font-robo  my-1">
                Career
              </a>
            </Link>
          </div>
          <div className="grid-item  lg:col-span-2 md:col-span-2 sm:col-span-2 m-3">
            <h5 className="mb-3 text-white font-inter  text-xl">
              My Account
            </h5>
            <Link legacyBehavior href="/personal-info">
              <a className="block text-gray-200 hover:text-footerHover font-robo  my-1">
                Personal Info
              </a>
            </Link>
            
            <Link legacyBehavior href="/statement">
              <a className="block text-gray-200 hover:text-footerHover font-robo  my-1">
                Statement
              </a>
            </Link>
            <Link legacyBehavior href="/wish">
              <a className="block text-gray-200 hover:text-footerHover font-robo  my-1">
                Wishlist
              </a>
            </Link>
          </div>
          <div className="grid-item lg:col-span-3 md:col-span-5 sm:col-span-6 m-3 mb-5 ">
            <h5 className="mb-3 text-white font-inter text-xl">
              Download our app
            </h5>
            <div className="flex">
              <Image
                src="/images/footer/googleplay.png"
                width={100}
                height={30}
                alt="google store"
                className="mr-3 cursor-pointer"
              />
              <Image
                src="/images/footer/applestore.jpg"
                width={100}
                height={30}
                alt="apple store"
                className="mx-2 cursor-pointer"
              />
            </div>
            <div className="flex mt-2 text-white">
              <input
                type="email"
                className="bg-white p-2 my-4 rounded-l-md text-sm border-1 border-slate-500"
                placeholder="Email address"
              ></input>
              <button className="bg-footerHover p-2 my-4 rounded-r-md text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="my-3 mb-5 px-4">
          <div className="flex">
            <span className="text-white mx-auto  font-robo">
              ©2022. All Rights Reserved.
              <Link legacyBehavior href="https://supremeitsolutions.com/">
                <a className="cursor-pointer hover:text-footerHover" target="_blank" >
                  
                </a>
              </Link>
            </span>
          </div>
          <div className="flex">
            <ul className="flex mx-auto p-0 mt-2 text-white">
              <li className="mx-2">
                <Link legacyBehavior  href="https://www.instagram.com/reecharger/?hl=en">
                  <a className="cursor-pointer hover:text-footerHover" target="_blank">
                    <AiOutlineInstagram size={25} />
                  </a>
                </Link>
              </li>
              <li className="mx-2">
                <Link legacyBehavior  href="https://www.facebook.com/reecharger/">
                  <a className="cursor-pointer hover:text-footerHover" target="_blank">
                    <AiFillFacebook size={25} />
                  </a>
                </Link>
              </li>
              <li className="mx-2">
                <Link legacyBehavior href="https://twitter.com/reecharger1?lang=en">
                  <a className="cursor-pointer hover:text-footerHover" target="_blank">
                    <AiOutlineTwitter size={25} />
                  </a>
                </Link>
              </li>
              <li className="mx-2">
                <Link legacyBehavior href="https://www.facebook.com/reecharger/">
                  <a className="cursor-pointer hover:text-footerHover" target="_blank">
                    <AiOutlineGooglePlus size={25} />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
