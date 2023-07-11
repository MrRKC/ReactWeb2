import React from 'react';
import '../styles/Contact.css';
import PizzaLeft from '../images/pizzaLeft1.png';

function Contact() {
  return (
    <div className="contact">
        <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})`}}></div>
        <div className="rightSide">
            <h1> Contact Us </h1>
            <form id="contact-from" method="POST">
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder="Enter full name" type="text" required></input>

                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter Email" type="email" required></input>

                <label htmlFor="message">Message</label>
                <textarea name="message" rows="6" placeholder="Enter Message" type="text" required></textarea>
                
                <button> Send Message </button>
            </form>
        </div>
    </div>
  )
}

export default Contact;
