import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import Link from "next/link";
import classes from "../style/footer.module.css";
import { FaFacebook as FaFacebookIcon } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white flex justify-center items-center py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b-2 border-white pb-8 sm:pb-12">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
            {/* Left Section - Brand & Social */}
            <div className="w-full lg:max-w-md flex flex-col gap-8 sm:gap-10 lg:gap-12">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  VENVL
                </h1>
                <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                  Trusted real estate company helping clients find, rent, or buy
                  homes across the region with ease and confidence
                </p>
              </div>
              <div className="icons flex gap-3 sm:gap-4">
                <FaFacebookIcon className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors" />
                <IoLogoTwitter className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors" />
                <FaLinkedin className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors" />
                <FaInstagramSquare className="w-6 h-6 cursor-pointer hover:text-pink-400 transition-colors" />
              </div>
            </div>

            {/* Right Section - Navigation Links */}
            <div className="flex flex-col sm:flex-row lg:flex-row justify-between w-full lg:max-w-2xl gap-8 sm:gap-12 lg:gap-16">
              {/* About Section */}
              <div className="flex flex-col gap-6">
                <span className="text-lg sm:text-xl font-semibold">About</span>
                <div className="flex flex-col gap-4">
                  <Link className="text-base text-gray-300 hover:text-white transition-colors" href="/">
                    About Us
                  </Link>
                  <Link className="text-base text-gray-300 hover:text-white transition-colors" href="/">
                    Our Vision
                  </Link>
                  <Link className="text-base text-gray-300 hover:text-white transition-colors" href="/">
                    Our Mission
                  </Link>
                  <Link className="text-base text-gray-300 hover:text-white transition-colors" href="/">
                    Contact Information
                  </Link>
                  <Link className="text-base text-gray-300 hover:text-white transition-colors" href="/">
                    Social Media (Icons)
                  </Link>
                </div>
              </div>

              {/* Quick Links Section */}
              <div className="flex flex-col gap-6">
                <span className="text-lg sm:text-xl font-semibold">Quick Links</span>
                <div className="flex flex-col gap-4">
                  <Link className="text-base text-gray-300 hover:text-white transition-colors" href="/">
                    Properties on Display
                  </Link>
                  <Link className="text-base text-gray-300 hover:text-white transition-colors" href="/">
                    Book a Viewing Appointment
                  </Link>
                  <Link className="text-base text-gray-300 hover:text-white transition-colors" href="/">
                    Frequently Asked Questions
                  </Link>
                  <Link className="text-base text-gray-300 hover:text-white transition-colors" href="/">
                    Terms and Conditions
                  </Link>
                  <Link className="text-base text-gray-300 hover:text-white transition-colors" href="/">
                    Privacy Policy
                  </Link>
                </div>
              </div>

              {/* Help Section */}
              <div className="flex flex-col gap-6">
                <span className="text-lg sm:text-xl font-semibold">Help</span>
                <div className="flex flex-col gap-4">
                  <Link className="text-base text-gray-300 hover:text-white transition-colors" href="/">
                    Contact
                  </Link>
                  <Link className="text-base text-gray-300 hover:text-white transition-colors" href="/">
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
