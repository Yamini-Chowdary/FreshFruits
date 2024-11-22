import React, { useState } from 'react';
import { Mail, Phone, Pin } from 'lucide-react';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setShowPopup(true); // Show the pop-up
    setTimeout(() => setShowPopup(false), 3000); // Hide it after 3 seconds
  };

  return (
    <>
      <div className="w-screen h-full flex flex-col justify-center items-center">
        <br />
        <div className="w-full top-5 h-35 flex justify-center items-center text-3xl text-green-500 font-semibold">
          Contact Us
        </div>
        <div className="w-[75%] h-[35rem] shadow-lg flex flex-row justify-center items-center">
          <div className="h-[90%] w-1/2 flex flex-col justify-center items-center gap-4">
            <div className="h-[31%] w-[70%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4 shadow-md">
              <Mail className="h-8 w-8 text-green-600 " />
              <h1>abc@gmail.com</h1>
            </div>
            <div className="h-[31%] w-[70%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4 shadow-md">
              <Phone className="h-8 w-8 text-green-600" />
              <h1>9876543210</h1>
            </div>
            <div className="h-[31%] w-[70%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4 shadow-md">
              <Pin className="h-8 w-8 text-green-600" />
              <h1 className="text-center">1/11, asd, dfg<br />wert</h1>
            </div>
          </div>
          <div className="h-100vh w-80 flex flex-col justify-center items-center">
            <div className="h-screen w-full flex flex-col justify-center items-center text-lg font-semibold">
              <h1 className="w-[80%] text-left my-3 font-bold text-green-600">Get in touch</h1>
              <form
                className="h-[60%] w-[80%] flex flex-col justify-center items-center gap-5"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-1 focus:shadow-lg focus:border-b-2 focus:border-lime-400 rounded-sm " required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-1 focus:shadow-lg focus:border-b-2 focus:border-lime-400 rounded-sm" required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-1 focus:shadow-lg focus:border-b-2 focus:border-lime-400 rounded-sm"required
                />
                <textarea
                  placeholder="Message"
                  className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-1 focus:shadow-lg focus:border-b-2 focus:border-lime-400 rounded-sm"required
                  rows="4"
                />
                <button
                  type="submit"
                  className="w-full h-[3rem] shadow-lg shadow-gray-400 hover:shadow-lime-600 bg-lime-600 p-1 text-white rounded-sm outline-none"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-lg text-center">
              <h2 className="text-green-600 font-semibold text-xl">Message Sent!</h2>
              <p className="text-gray-600 mt-2">We will get back to you soon.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
