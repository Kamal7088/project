import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Navb from  './Navb';
import { useEffect } from 'react';
import axios from 'axios';
import './Contact.css';
import {useState } from 'react'

 
  
  
const Contect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    // Here, you could send the form data to a server if needed
  };

  return (
    <>
    <Navb/>
    <section id="contact">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you    An online order system for a hotel is a feature that allows guests to place orders for various services, such as VEG FOOD, NON VEG FOOD, ACTIVITIES, DRINKS, SWEATS, and more, through the hotel's website or mobile app. This system provides convenience for guests by enabling them to place orders directly from their rooms or while on the go, without the need to make a call or visit a service desk.! Reach out to us via the following:</p>
        <ul>
          <li><strong>Phone:</strong> +123 456 7890</li>
          <li><strong>Email:</strong> contact@hotel.com</li>
          <li><strong>Address:</strong> 1234 Hotel Street, City, Country</li>

          <li><strong>Booking items:</strong> All Foods Items Are available To Book Now with 10% Discount Off</li>
        </ul>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        {submitted ? (
          <p className="success-message">Thank you for reaching out! We will get back to you shortly.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

            

            <label htmlFor="message">Your Message for Enquire And Write Down Booking Item</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>


            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </section>
    </>
  );
};

export default Contect;