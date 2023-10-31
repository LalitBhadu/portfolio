import React, { useRef } from 'react';
import './Contact.css'
import { MdMarkEmailUnread } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a4alfx9', 'template_jaqw2q4', form.current, 'lANXlNTd4kb7eIcDD')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <>
      <section id='contact'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact_container">
          <div className='contact_options'>
            <article className='contact_option'>
              <MdMarkEmailUnread className='contact_option_icon' />
              <h4>Email</h4>
              <h5>Lalitbhadu1111@gmail.com</h5>
              <a href='mailto:lalitbhadu1111@gmail.com' target='_blank'>Send a Message</a>
            </article>
            <article className='contact_option'>
              <BsInstagram className='contact_option_icon' />
              <h4>Instagram</h4>
              <h5>Lalit_Bhadu</h5>
              <a href='https://instagram.com' target='_blank'>Send a Message</a>
            </article>
            <article className='contact_option'>
              <IoLogoWhatsapp className='contact_option_icon' />
              <h4>Whatsapp</h4>
              <h5>89305-36805</h5>
              <a href='https://api.whatsapp.com/send?phone+918930536805' target='_blank'>Send a Message</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Name' required />
            <input type='email' name='email' placeholder='Your Email' required />
            <textarea name='message' placeholder='Write your Question' rows={12} required />
            <button type='submit' className='btn btn_primary'>Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
