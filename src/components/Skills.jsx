import React from 'react';
import img1 from '../assets/html.png'
import img2 from '../assets/css.png'
import img3 from '../assets/js.png'
import img4 from '../assets/bootstrap.png'
import img5 from '../assets/java.png'
import img6 from '../assets/tailwind.png'
import img7 from '../assets/react.png'


function Skills() {
  const skillData = [
    { title: 'HTML', percentage: 90, img:img1 }, 
    { title: 'CSS', percentage: 70,img:img2 },
    { title: 'JavaScript', percentage: 50,img:img3 },
    { title: 'BootStrap', percentage: 80 ,img:img4},
    { title: 'Java', percentage: 60 ,img:img5},
    { title: 'Tailwind Css', percentage: 80 ,img:img6 },
    { title: 'ReactJs', percentage: 80 ,img:img7},
  
  ];

  return (
    <div id="skills" className="flex flex-col mt-10 md:mt-24  md:h-screen item-start justify-center bg-white dark:bg-gray-900 ">
        <div className="flex justify-center"><h1 className='mb-1 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>Skills</h1></div>
        <div className="flex  flex-wrap  gap-7 md:px-10 md:gap-10 py-10  align-center justify-center ">
      {skillData.map((data) => (
        <div
          key={data.title}
          className=" skill-item relative transition-all duration-700 top-0 h-36 md:h-56 flex-wrap w-36 md:w-52 hover:w-48 hover:h-48 md:hover:w-56 md:hover:h-64  flex justify-center border-2 rounded-xl flex-col items-center bg-blue-200 dark:bg-gray-800 shadow-2xl dark:shadow-white dark:shadow-md"
        >
          {/* <div
            className="radial-progress text-black dark:text-white"
            style={{ '--value': data.percentage }}
            role="progressbar"
            aria-valuenow={data.percentage} 
          >
            {data.percentage}%
          </div> */}
          <img src={data.img} alt="" className='w-20 md:w-28 hover:w-28 md:hover:w-36 '/>
          <h1 className="font-bold text-black mt-1 font-Anton dark:text-white">{data.title}</h1>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Skills;
