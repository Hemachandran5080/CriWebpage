import Divider from "@material-ui/core/Divider";
import React from 'react'
import "./Products.css";

function Products() {
    return (
        <div className="flex-container1 fade__bottom">
            <div className="second__component"> 
            <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000  
                MILLION UNITS OF POWER FOR THE NATION.
            </p>
            </div>
            <div className="image__section">
                <img src={process.env.PUBLIC_URL + '/3.png'} />
            </div>
            <div className="label__section">
                <p>Valves - Pumps - Pipes - IoT Drives & Controllers
                    -Wires & Cables - Solar Systems - Motors 
                </p>
            </div>
            {/* <Divider className="divider"/> */}
            <div className="end__section">
                <p><strong>C.R.I FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong></p>
            </div>
            <div className="end__section__contents">
                <p>CHEMICALS & PROCESS|POWER|WASTE & WASTE WATER|
                    OILS & GAS|PHARMA|SUGARS & DISTELLERIES|PAPER & PULP|MARINE & DEFENCE|
                    METAL & MINING|FOOD & BEVARAGE|PETROCHEMICAL & REFINERIES|SOLAR|BUILDING|HVAC|
                    FREE FIGHTING|AGRICULTURE & RESIDENTIAL
                </p>
            </div>
        </div>
    )
}

export default Products
