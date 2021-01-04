import React from 'react'
import "./Contact.css";

function Contact() {
    return (
        <div className="contact__section fade__bottom">
            <div className="phone">
                <img src= {process.env.PUBLIC_URL + "/call.png"} />
                <p>Toll free 1800 200 1234</p>
            </div>
            <div className="facebook__id">
            <img src={process.env.PUBLIC_URL + "/facebook.png"} />
                <p>www.facebook.com/crigroups</p>
            </div>
            <div className="link">
            <img src={process.env.PUBLIC_URL + "/world-wide-web.png"} />
                <p>www.crigroups.com</p>
            </div>
        </div>
    )
}

export default Contact
