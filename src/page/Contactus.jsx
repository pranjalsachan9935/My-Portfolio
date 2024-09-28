import React, { useState, useRef, useEffect } from "react";
import "./contact.css";
import axios from "axios";

function Contact() {
  const inputref = useRef(null);
  const [error, setError] = useState("");
  
  const [formdata, setFormdata] = useState(() => {
    const savedData = sessionStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : {
      fname: '',
      lname: '',
      country: '',
      subject: ''
    };
  });

  // Focus on the first input field when the component mounts
  useEffect(() => {
    inputref.current.focus();
  }, []);

  // Save form data to sessionStorage whenever formdata changes
  useEffect(() => {
    sessionStorage.setItem('formData', JSON.stringify(formdata));
  }, [formdata]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", formdata)
      .then((response) => {
        console.log(response.data);
        setFormdata({
          fname: '',
          lname: '',
          country: '',
          subject: '',
        });
        setError(""); // Clear any previous errors
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
      [name]: value
    }));
  };

  return (
    <>
      <div className="outer-container2">
        <h1 className="contact-heading">Contact Us</h1>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First Name</label>
            <input
              ref={inputref}
              type="text"
              id="fname"
              name="fname"
              value={formdata.fname}
              placeholder="Your name..."
              onChange={handleChange}
              required
            />
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formdata.lname}
              placeholder="Your name..."
              onChange={handleChange}
              required
            />
            <label htmlFor="country">Country</label>
            <select
              id="country"
              name="country"
              value={formdata.country}
              onChange={handleChange}
            >
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
            </select>

            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              value={formdata.subject}
              placeholder="Write something..."
              onChange={handleChange}
              required
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
