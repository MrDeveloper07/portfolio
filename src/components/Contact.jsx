// import React, { useState } from 'react';
// import logo from '../assets/logo.png';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Contact() {
//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');

//   const notifySuccess = () => toast("Email sent successfully");
//   const notifyError = () => toast.error("Failed to send email");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform validation if needed

//     // Simulate sending email (you can replace this with actual API call)
//     if (email && subject && message) {
//       // Logic to send email (simulated here)
//       notifySuccess();
//       setEmail('');
//       setSubject('');
//       setMessage('');
//     } else {
//       notifyError();
//     }
//   };

//   return (
//     <>
//       <section className="bg-white dark:bg-gray-900">
//         <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
//           <h2 id='contact' className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
//           <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Whether you have questions, feedback, or simply want to connect, I'll do my best to respond promptly. Let's create something amazing together!</p>
//           <div className="flex gap-2">
//             <div className="left md:w-1/2 w-full">
//               <form onSubmit={handleSubmit} className="space-y-8">
//                 <div>
//                   <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
//                   <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                     placeholder="name@flowbite.com"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
//                   <input
//                     type="text"
//                     id="subject"
//                     value={subject}
//                     onChange={(e) => setSubject(e.target.value)}
//                     className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                     placeholder="Let us know how we can help you"
//                     required
//                   />
//                 </div>
//                 <div className="sm:col-span-2">
//                   <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
//                   <textarea
//                     id="message"
//                     rows="6"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Leave a comment..."
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="py-3 px-5 dark:border-2 text-sm border-2 border-gray-700 text-black font-medium text-center dark:text-white text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   Send message
//                 </button>
//                 <ToastContainer />
//               </form>
//             </div>
//             <div className="right w-1/2 md:block hidden">
//               <img src={logo} alt="Logo" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser'; // Import emailjs from emailjs-com package
import logo from '../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
const form = useRef();
  const notifySuccess = () => toast.success("Email sent successfully");
  const notifyError = () => toast.error("Failed to send email");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && subject && message) {
      console.log(email)
      emailjs.sendForm('service_plfadvx', 'template_ny1qt9l', e.target, 'kfQpPO28I8OUPc5Yp')
        .then((result) => {
          console.log('Email successfully sent!', result.text);
          notifySuccess();
          setEmail('');
          setSubject('');
          setMessage('');
        }, (error) => {
          console.error('Email send failed:', error.text);
          notifyError();
        });
    } else {
      notifyError();
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
          <h2 id='contact' className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Whether you have questions, feedback, or simply want to connect, I'll do my best to respond promptly. Let's create something amazing together!</p>
          <div className="flex gap-2">
            <div className="left md:w-1/2 w-full">
              <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="email" name="user_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                  <input
                    type="text"
                    id="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" name="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                
                <div className="sm:col-span-2">
                  <label htmlFor="message" name="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 dark:border-2 text-sm border-2 border-gray-700 text-black font-medium text-center dark:text-white text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
                <ToastContainer />
              </form>
            </div>
            <div className="right w-1/2 md:block hidden">
              <img src={logo} alt="Logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
