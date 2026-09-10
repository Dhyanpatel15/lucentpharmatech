import { useState } from 'react';

import { ExtendedFooter } from '../components/Footer';
import { MailIcon, MapIcon, PhoneIcon, SendIcon } from '../components/Icons';
import MapSection from '../components/MapSection';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';
import WorkingClock from '../components/WorkingClock';


export default function Contact() {

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });
  const [subscribed, setSubscribed] = useState(false);

  async function handleContact(event) {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api/contact';
      let response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Automatic fallback for Hostinger/cPanel PHP hosting if /api/contact is requested directly
      if (response.status === 404 && apiUrl === '/api/contact') {
        response = await fetch('/api/contact.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      }

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success !== false) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your request has been sent successfully to dhyanpatel1509@gmail.com Our team will contact you shortly.',
        });
        form.reset();
      } else {
        throw new Error(data.message || 'Server returned an error.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({
        type: 'error',
        message: err.message || 'Could not connect to the mail server. Please ensure the backend SMTP service is running, or email us directly at dhyanpatel1509@gmail.com.',
      });
    } finally {
      setLoading(false);
    }
  }


  function handleNewsletter(event) {
    event.preventDefault();

    setSubscribed(true);

    event.currentTarget.reset();
  }


  return (
    <>
      <PageBanner title="Contact Us" />


      <section className="section contact-details">

        <div className="wide-container contact-card-grid">


          <Reveal direction="left">

            <article className="contact-card">

              <h2>Our Address</h2>

              <p>
                <MapIcon />

                <span>
                  Manufacturing Unit – Survey No. : 186-187, 
                  Unit No: 1-2, Village: Kathwada, 
                  At &amp; Post: Navagam Ta. &amp; Dist. Kheda – 
                  387 540, Gujarat, India
                </span>

              </p>


              <hr />


              <h2>Contact Information</h2>


              <a href="tel:+917600026838">
                <PhoneIcon />
                +91 760 002 6838
              </a>


              <a href="tel:+919998321839">
                <PhoneIcon />
                +91 999 832 1839
              </a>


              <a href="tel:+919825633292">
                <PhoneIcon />
                +91 982 563 3292
              </a>


            </article>

          </Reveal>




          <Reveal direction="right" delay={100}>


            <article className="contact-card contact-card-right">


              <h2>Contact Information</h2>


              <a href="mailto:info@lucentpharmatech.com">
                <MailIcon />
                info@lucentpharmatech.com
              </a>


              <a href="mailto:sales@lucentpharmatech.com">
                <MailIcon />
                sales@lucentpharmatech.com
              </a>



              <hr />



              <div className="opening-card">


                <span className="opening-icon">

                  <WorkingClock />

                </span>



                <div>

                  <h2>Opening Hour</h2>

                  <p>
                    Mon - Sat 9.00-7.00
                    <br />

                    <strong>
                      Sunday - Closed
                    </strong>

                  </p>


                </div>


              </div>



            </article>


          </Reveal>


        </div>


      </section>





      <section className="contact-form-section" id="contact-form">

        <div className="contact-form-pattern" />


        <div className="wide-container contact-form-grid">


          <Reveal direction="left" className="technical-copy">


            <h2>
              Technical Support
            </h2>


            <p>
              The Technical support staff at Lucent Pharmatech consist of a highly experienced group of chemists and doctors (Ph.D’s) who help customers in taking advantage in technical knowhow.
            </p>


            <p>
              We help our customers to be more successful and provide assistance in
            </p>


            <ul>

              <li>
                New product development and new process development
              </li>


              <li>
                Process and Customer formulation support
              </li>


            </ul>



            <p>
              The product development team focuses its efforts on finding ways to improve the performance of the customer’s products and achieving the potential improvements identified by the field representatives. Through this hand-in-hand approach to improving our customer’s products, we have developed a strong reputation in the industry for technical expertise and dedicated customer service.
            </p>


          </Reveal>





          <Reveal direction="right" className="form-panel">

            <span className="form-eyebrow">
              GET CONSULTANCY
            </span>


            <h2>
              Drop Us A Line
            </h2>



            <form onSubmit={handleContact}>


              <label>
                <input name="name" placeholder="Name*" required />
              </label>


              <label>
                <input type="tel" name="phone" placeholder="Your Phone" />
              </label>


              <label>
                <input type="email" name="email" placeholder="Email*" required />
              </label>


              <label>
                <input name="subject" placeholder="Subject*" required />
              </label>



              <label className="full-field">

                <textarea 
                  name="message"
                  placeholder="Message"
                  rows="5"
                />

              </label>



              <button className="gradient-button form-submit" type="submit" disabled={loading}>
                <SendIcon />
                {loading ? 'Sending Request...' : 'Send Request'}
              </button>
            </form>

            {status.type === 'success' && (
              <div className="form-alert form-alert-success" role="status">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{status.message}</span>
              </div>
            )}

            {status.type === 'error' && (
              <div className="form-alert form-alert-error" role="alert">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{status.message}</span>
              </div>
            )}

          </Reveal>


        </div>


      </section>





      <section className="newsletter-wrap">

        <div className="wide-container newsletter">


          <div>

            <span>
              For Latest Updates
            </span>


            <h2>
              Subscribe To Our Newsletter
            </h2>


          </div>



          <form onSubmit={handleNewsletter}>


            <input 
              type="email"
              placeholder="Enter your email"
              required
            />


            <button type="submit">
              <SendIcon size={20}/>
            </button>


          </form>



          {subscribed && (
            <p className="newsletter-success">
              Subscribed successfully.
            </p>
          )}



        </div>


      </section>





      <MapSection />

      <ExtendedFooter />


    </>
  );
}