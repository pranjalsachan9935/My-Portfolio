// import React, { useState, useRef, useEffect } from "react";
// import "./contact.css";
// import axios from "axios";
// import blueImage from '../assets/finalbgs.webp';

// function Contact() {
//   const inputref = useRef(null);
//   const [error, setError] = useState("");

//   const [formdata, setFormdata] = useState(() => {
//     const savedData = sessionStorage.getItem("formData");
//     return savedData
//       ? JSON.parse(savedData)
//       : {
//           fname: "",
//           phoneno: "",
//           email: "",
//           subject: "",
//         };
//   });


//   // Focus on the first input field when the component mounts
//   useEffect(() => {
//     const handleFocus = () => {
//       const screenWidth = window.innerWidth;

//       // Only focus the input field if the screen width is more than 768px (tablet/desktop)
//       if (screenWidth > 768 && inputref.current) {
//         inputref.current.focus();
//       }
//     };
//     handleFocus();
//   }, []);

//   // Save form data to sessionStorage whenever formdata changes
//   useEffect(() => {
//     sessionStorage.setItem("formData", JSON.stringify(formdata));
//   }, [formdata]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post("https://jsonplaceholder.typicode.com/posts", formdata)
//       .then((response) => {
//         console.log(response.data);
//         setFormdata({
//           fname: "",
//           phoneno: "",
//           email: "",
//           subject: "",
//         });
//         setError(""); // Clear any previous errors
//       })
//       .catch((error) => {
//         setError("An unexpected error occurred");
//         console.log(error);
//       });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormdata((prevFormdata) => ({
//       ...prevFormdata,
//       [name]: value,
//     }));
//   };

//   return (
//     <>
//     <h2 className="contact-us">Contact Us</h2>
//       <div className="contact-outer-container">
//         <div className="container">
//           <div className="blue-container">
//             <img src={blueImage} alt="" className="blue-image"/>
//           </div>
//           <form onSubmit={handleSubmit} className="new-form" >
           
//             <label htmlFor="fname">Full Name</label>
//             <input
//               ref={inputref}
//               type="text"
//               id="fname"
//               name="fname"
//               value={formdata.fname}
//               placeholder="Your full name..."
//               onChange={handleChange}
//               required
//             />
//             <label htmlFor="phoneno">Phone no</label>
//             <input
//               type="tel"
//               id="phoneno"
//               name="phoneno"
//               value={formdata.phoneno}
//               placeholder="Your number..."
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="country">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formdata.email}
//               placeholder="Your email..."
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="subject">Subject</label>
//             <textarea
//               id="subject"
//               name="subject"
//               value={formdata.subject}
//               placeholder="Write something..."
//               onChange={handleChange}
//               required
//             />

//             <input type="submit" value="Submit" className="button-9" />
          
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;

import React, { useState, useRef, useEffect } from "react";
import "./contact.css";
import axios from "axios";
import { motion } from "framer-motion"; // Import framer-motion
import blueImage from '../assets/finalbgs.webp';

function Contact() {
  const inputref = useRef(null);
  const [error, setError] = useState("");

  const [formdata, setFormdata] = useState(() => {
    const savedData = sessionStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          fname: "",
          phoneno: "",
          email: "",
          subject: "",
        };
  });

  useEffect(() => {
    const handleFocus = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 768 && inputref.current) {
        inputref.current.focus();
      }
    };

    handleFocus();
    window.addEventListener('resize', handleFocus);

    return () => {
      window.removeEventListener('resize', handleFocus);
    };
  }, []);

  useEffect(() => {
    sessionStorage.setItem("formData", JSON.stringify(formdata));
  }, [formdata]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", formdata)
      .then((response) => {
        console.log(response.data);
        setFormdata({
          fname: "",
          phoneno: "",
          email: "",
          subject: "",
        });
        setError("");
      })
      .catch((error) => {
        setError("An unexpected error occurred");
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevFormdata) => ({
      ...prevFormdata,
      [name]: value,
    }));
  };

  return (
    <>
      <motion.h2 
        className="contact-us"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h2>

      <motion.div 
        className="contact-outer-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container">
          <motion.div
            className="blue-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <img src={blueImage} alt="" className="blue-image" />
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit} 
            className="new-form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <label htmlFor="fname">Full Name</label>
            <input
              ref={inputref}
              type="text"
              id="fname"
              name="fname"
              value={formdata.fname}
              placeholder="Your full name..."
              onChange={handleChange}
              required
            />
            <label htmlFor="phoneno">Phone no</label>
            <input
              type="tel"
              id="phoneno"
              name="phoneno"
              value={formdata.phoneno}
              placeholder="Your number..."
              onChange={handleChange}
              required
            />

            <label htmlFor="country">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formdata.email}
              placeholder="Your email..."
              onChange={handleChange}
              required
            />

            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              value={formdata.subject}
              placeholder="Write something..."
              onChange={handleChange}
              required
            />

            <motion.input 
              type="submit" 
              value="Submit" 
              className="button-9"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.form>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;


