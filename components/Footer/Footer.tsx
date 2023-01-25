import React from "react";
import Link  from "next/link";

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
        <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
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
            <h5 className="mb-3 text-white font-inter text-xl">Useful Links</h5>
            <Link legacyBehavior href="/about">
              <a className="block text-gray-200 hover:text-footerHover font-robo  my-1">
                हाम्रो बारेमा 
              </a>
            </Link>
            <Link legacyBehavior href="/seller-benifits">
              <a className="block text-gray-200 hover:text-footerHover font-robo  my-1">
                अर्थ मन्त्रालय
              </a>
            </Link>
            
            <Link legacyBehavior href="/career">
              <a className="block text-gray-200 hover:text-footerHover font-robo  my-1">
                स्वास्थ्य तथा जनसंख्या मन्त्रालय
              </a>
            </Link>
            <Link legacyBehavior href="/personal-info">
              <a className="block text-gray-200 hover:text-footerHover font-robo  my-1">
                 कानून न्याय तथा संसदीय मामिला मन्त्रालय
              </a>
            </Link>
          </div>
          <div className="grid-item  lg:col-span-2 md:col-span-2 sm:col-span-2 m-3">
            <h5 className="mb-3 text-white font-inter  text-xl">
              Location
            </h5>
            

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.824865958635!2d85.32589074049072!3d27.695473553897944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1994769ac19f%3A0xd15dddabb04dbed!2sCivil%20Service%20Hospital%20of%20Nepal!5e0!3m2!1sen!2snp!4v1674650219162!5m2!1sen!2snp" width="300" height="200" className="b-0"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            
            
          </div>
          <div className="grid-item lg:col-span-3 md:col-span-5 sm:col-span-6 m-3 mb-5 ">
            
            
           
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
              
            </ul>
          </div>
        </div>
        </div>
        
      </div>
      
    </footer>
  );
};

export default Footer;
