import { React, useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsFillTelephoneFill, BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('dipenchovatiya07', 'template_2rj5wb2', form.current, 'pm1h9XOuykMxJGeR6')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dipenchovatiya07@gmail.com</h5>
            <a href="mailto:dipenchovatiya07@gmail.com" target="_blank">Send an Email</a>
          </article>
          <article className="contact__option">
            <BsFillTelephoneFill className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>+17163424094</h5>
            <a href="tel:+17163424094" target="_blank">Give a call</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+17163424094</h5>
            <a href="https://wa.me/7163424094?text=Hi%20Dipen%2C%20I%20am%20interested%20in%20your%20work%20and%20want%20to%20talk%20more%20about%20it%21" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact