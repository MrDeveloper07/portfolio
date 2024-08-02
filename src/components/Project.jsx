import React from 'react';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';

function Project() {
  const Projectdata = [
    { image: image1, title: 'Project 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.' },
    { image: image2, title: 'Project 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.' },
    { image: image3, title: 'Project 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.' },
    { image: image4, title: 'Project 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.' },
    { image: image5, title: 'Project 5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.' },
    { image: image6, title: 'Project 6', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 ">
      <h1 id="project" className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white pt-10 md:pt-0">Projects</h1>
      <div className="py-8 px-4 mx-auto max-w-screen-md">
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Dive in and discover how I bring ideas to life through code and creativity.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-10 md:px-24">
        {/* Mapping over Projectdata to render each project */}
        {Projectdata.map((project, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src={project.image} alt={`Project ${index + 1}`} className="h-72 md:h-80 w-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 translate-y-[60%]">
              <h1 className="font-dmserif text-3xl font-bold text-white">{project.title}</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{project.description}</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-gray-800">demo</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
