import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import "leaflet/dist/leaflet.css";
import L from 'leaflet';



delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

var emailJsPublicKey = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
var emailJsServiceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
var emailJsTemplateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
  
    return () => clearTimeout(timer); 
  }, []);

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(emailJsServiceId, emailJsTemplateId, form.current,emailJsPublicKey)
      .then(
        (response) => {
          alert('Message successfully sent!');
          console.log('SUCCESS!', response.status, response.text);
          window.location.reload(false);
        },
        (error) => {
          alert('Failed to send the message, please try again...' );
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in all opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Birmingham,
          <br />
          UK,
          <br />
          <span>ha9337033@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center = {[52.477754, -1.898958]} zoom ={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[52.477754, -1.898958]}>
            <Popup>
             Over Here. <br /> :D
            </Popup>
          </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
