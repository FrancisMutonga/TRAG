"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    error: "",
    success: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
     

      setFormStatus({
        error: "",
        success: "Your message has been successfully submitted.",
      });

      // Reset the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setFormStatus({
        error: "Failed to submit your message. Please try again later.",
        success: "",
      });
    }
  };

  return (
    <div className="mx-aut0 p-12 mt-20">
      {/* Contact Form Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form
            className=" p-8 space-y-8 rounded-xl shadow-lg"
            onSubmit={handleSubmit}
          >
            <h3 className="text-lg font-bold text-gray-700 text-left">Write us a Message</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Fields */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-700" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="mt-2 p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-700" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="mt-2 p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-2 p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-700" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="mt-2 p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col mb-6">
              <label className="text-sm font-bold text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="mt-2 p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-b from-gray-500 to-stone-200 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>

            {/* Status Messages */}
            {formStatus.error && <p className="text-red-500 mt-4">{formStatus.error}</p>}
            {formStatus.success && <p className="text-blue-700 mt-4">{formStatus.success}</p>}
          </form>

          {/* Contact Info Card */}
          <div className="bg-[url('/images/logo.png')] bg-cover bg-center p-8 space-y-12 items-start rounded-lg shadow-lg flex items-center justify-center">
            <div className=" p-12 rounded-xl shadow-xl  bg-black/40 ">
            <h3 className="text-2xl font-bold text-left  mb-6">Our Contact Information</h3>
            <div className="space-y-4 self-center ">
              <div className="flex items-center ">
                <FaPhoneAlt className="text-white mr-4" />
                <span className="text-lg">+254722688316

                </span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-white mr-4" />
                <span className="text-lg">toprideacademyltd@hotmail.com</span>
              </div>
              
              <div className="flex gap-12 items-center text-xl">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-white hover:text-blue-800" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-white hover:text-blue-600" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white hover:text-blue-900" />
                </a>
              </div>
            </div>
            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
