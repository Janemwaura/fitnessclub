import React, { useRef, useState } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();
  const [message, setMessage] = useState(''); // State to store the message

  // Initialize EmailJS
  emailjs.init('5SEgDHyjKZ7fY3Vq7');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_t84qsan', 'template_peoxzis', form.current)
      .then(
        () => {
          setMessage('Thank you for joining. We will contact you shortly.');
        },
        (error) => {
          setMessage('Failed to send mail. Please try again later.');
          console.log('FAILED...', error.text);
        }
      );
  };
    return (
     <div className="Join" id="join us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'> READY TO </span>
                <span> LEVEL UP </span>
            </div>
            <div>
                <span> YOUR BODY </span>
                <span className='stroke-text'> WITH US? </span>
            </div>
        </div>
        <div className="right-j">
        
            <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
            {message && <p className="success-message">{message}</p>}
                <input type="email" name='user_email' placeholder='Enter your Email address' />
                <button className='btn btn-j'>Join now</button>
            </form>
            
        </div>

     </div>
    )
}
export default Join