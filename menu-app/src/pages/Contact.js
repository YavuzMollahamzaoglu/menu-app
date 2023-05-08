import React from 'react'
import BannerImage from "../assets/2blackbean.jpg"

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage:`url(${BannerImage})`}}></div>
        <div className='rightSide'>
            <h1>İletişim</h1>
            <form id="contact-form">
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder='Enter full name ..' type='text'></input>
                <label htmlFor="name">Email</label>
                <input name="name" placeholder='Enter an email ..' type='email'></input>
                <label htmlFor="name">Full Name</label>
                <textarea name="name" placeholder='Enter your message' type='text'></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact