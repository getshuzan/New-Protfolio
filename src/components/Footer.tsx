import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400"><Github size={24} /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer