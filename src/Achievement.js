import React from 'react'
import "./Achievement.css";

function Achievement() {
    return (
        <div className="fade__bottom">
        <div class="flex-container">
            <div className="right__section">
                <p>C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time</p>
                <ul>
                    <li>C.R.I's energy efficient products are well recognized by various Government institutions,as trustworthy products forvarious projects across the globe to save energy.</li>
                    <li>C.R.I is the highest contributer in the country for the projects of EEST(Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                </ul>
                <img src={process.env.PUBLIC_URL + '/2.png'} alt="prize image" />
                 <p className="first__component__image__title">Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>, Mr.G.Selvaraj, Joint Managing Director of 
                 C.R.I Group received the award from Smt.Sumitra Mahajan, Speaker of Lok Sabha & Shri.Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
            <div className="left__section">
                <img className="award__image" src={process.env.PUBLIC_URL + "/1.png"} alt="award-image" />
            </div>
        </div>
        </div>
    )
}

export default Achievement;

