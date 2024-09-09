import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';

function Contact() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [country, setCountry] = useState('');
  const [subject, setSubject] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://jsonplaceholder.typicode.com/posts', { fname, lname, country, subject })
      .then((response) => {
        console.log(response.data);
        setFname('');
        setLname('');
        setCountry('');
        setSubject('');
      })
      .catch((error) => {
        setError('An unexpected error occurred');
        console.log(error);
      });

    if (error) {
      return <p>{error}</p>;
    }
  };

  return (
    <>
      <div className='outer-container2'>
        <h1 className='contact-heading'>Contact Us</h1>
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First Name</label>
            <input
              type='text'
              id='fname'
              value={fname}
              placeholder='Your name...'
              onChange={(event) => setFname(event.target.value)} // Corrected onChange handler
            />
            <label htmlFor="lname">Last Name</label>
            <input
              type='text'
              id='lname'
              value={lname}
              placeholder='Your name...'
              onChange={(event) => setLname(event.target.value)} // Corrected onChange handler
            />
            <label htmlFor='country'>Country</label>
            <select
              id='country'
              value={country}
              onChange={(event) => setCountry(event.target.value)} // Corrected onChange handler
              name='country'>
                <option value="India">India</option>
              <option value="australia">Australia</option>
              <option value="Germany">Germany</option>
            </select>

            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              value={subject}
              placeholder="Write something..."
              onChange={(event) => setSubject(event.target.value)} // Corrected onChange handler
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
