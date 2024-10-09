import React from 'react'
import { Code, PenTool, Database } from 'lucide-react'

const Skills = () => {
  const skills = [
    { name: 'Frontend Development', icon: <Code size={40} /> },
    { name: 'UI/UX Design', icon: <PenTool size={40} /> },
    { name: 'Backend Development', icon: <Database size={40} /> },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills