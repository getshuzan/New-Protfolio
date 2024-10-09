import React from 'react'

const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'A brief description of Project 1' },
    { title: 'Project 2', description: 'A brief description of Project 2' },
    { title: 'Project 3', description: 'A brief description of Project 3' },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href="#" className="text-blue-600 hover:underline">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects