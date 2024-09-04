import React from 'react'
import { useState } from 'react';
const Navivgation = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-white text-2xl font-bold">BookShop</a>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center justify-center space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white">Home</a>
                    <a href="#" className="text-gray-300 hover:text-white">Books</a>
                    <a href="#" className="text-gray-300 hover:text-white">About</a>
                    <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                    
                    {/* Login and Register Buttons */}
                    <div className="ml-4">
                        <a href="#" className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded">Login</a>
                        <a href="#" className="ml-2 text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded">Register</a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="block md:hidden text-gray-300 hover:text-white focus:outline-none" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2">
                    <a href="#" className="block text-gray-300 hover:text-white py-2">Home</a>
                    <a href="#" className="block text-gray-300 hover:text-white py-2">Books</a>
                    <a href="#" className="block text-gray-300 hover:text-white py-2">About</a>
                    <a href="#" className="block text-gray-300 hover:text-white py-2">Contact</a>
                    <a href="#" className="block text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 mt-2 rounded">Login</a>
                    <a href="#" className="block text-white bg-green-500 hover:bg-green-600 py-2 px-4 mt-2 rounded">Register</a>
                </div>
            )}
        </nav>
    </>
  )
}

export default Navivgation