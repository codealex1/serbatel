import React, { Component } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import images from "../../constants/image";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <>
        

        
        <div>
        <div id="footer" className='flex flex-col items-center justify-center text-white'>
    <footer className='flex flex-col md:flex-row w-full'>
        <div className="relative flex justify-center w-full md:w-1/2 ">
            <img src={images.logo} className="image" alt="Logo" />
        </div>
        <div className="text-white py-4 px-4 md:px-16 w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4" id='divFooter'>
            <div className="flex items-center">
                <FaPhoneAlt className="text-2xl mr-4" />
                <div>
                    <h3 className="text-lg font-bold">Téléphone</h3>
                    <p>+ 33 (0)6 62 71 29 60</p>
                </div>
            </div>
            <div className="flex items-center">
                <FaMapMarkerAlt className="text-2xl mr-4" />
                <div>
                    <h3 className="text-lg font-bold">Zone d'intervention</h3>
                    <p>Nouvelle-Aquitaine</p>
                </div>
            </div>
            <div className="flex items-center">
                <FaEnvelope className="text-2xl mr-4" />
                <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <p>sarl.serbatel@gmail.com</p>
                </div>
            </div>
            <div className="flex items-center">
                <FaGlobe className="text-2xl mr-4" />
                <div>
                    <h3 className="text-lg font-bold">Site internet</h3>
                    <p>www.serbatel.fr</p>
                </div>
            </div>
        </div>
    </footer>
    <div className="text-white py-4 px-4 w-full text-center" id='CCG'>
        <ul className='flex flex-wrap justify-center gap-4'>
            <li><a href="/" className='underline'>Mentions légales</a></li>
            <li><a href="/" className='underline'>Conditions d'utilisation</a></li>
            <li><a href="/" className='underline'>Politique de confidentialité</a></li>
            <li><a href="/" className='underline'>Politique de cookies</a></li>
        </ul>
    </div>
</div>
            
        </div>

        



       


     </>
    )
  }
}

export default Footer