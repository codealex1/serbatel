import React, { Component } from 'react'

import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GrUserWorker } from "react-icons/gr";

import "./Garanti.css"





export class Garanti extends Component {
  render() {

    
    return (
        <>
        <div class="containerGaranti" >
        
            <div class="bck-img-garanti" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div class="text-zone-garanti" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="300" data-aos-easing="ease-in-sine" >
                    <div class="margin">

                        <h1 class="h1-garanti">Nos garanties  </h1>
                        <h2 class="h2-garanti"><strong>RÉALISER VOTRE PROJET L'ESPRIT TRANQUILLE </strong></h2>
                        
                    </div>
                </div>
            </div>
            <div className="container-acc-garanti" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className="step-ga">
                    <div className='garanti-icon-center'>
                        <VscWorkspaceTrusted className="icon-garanti" />
                        <h3>INTELOCUTEUR UNIQUE</h3>
                    </div>
                    <p class="p-garanti">
                    Vous êtes accompagné par Caroline, de la
                    conception à la réalisation. Chaque étape est
                    suivie et vous êtes informés en temps réel de
                    l'avancement des travaux
                    </p>
                </div>
                <div className="step-ga">
                    <div className='garanti-icon-center'>
                        <GrUserWorker className="icon-garanti" />
                        <h3>ARTISANS SÉLECTIONNÉS</h3>
                    </div>
                    
                    <p class="p-garanti">
                    Les équipes sont rigoureusement
                    sélectionnées et nous travaillons
                    régulièrement avec elles sur différents
                    chantiers pour nous assurer de la qualité
                    des services proposés.
                    </p>
                </div>
                <div className="step-ga">
                    <div className='garanti-icon-center'>
                        <FaMoneyBillTrendUp className="icon-garanti" />
                        <h3>GAIN TEMPS ET D'ARGENT</h3>
                    </div>
                    <p class="p-garanti">
                    Nous nous occupons du projet de A à Z, de la
                    coordination entre les artisans. Nous ajustons
                    votre budget à vos besoins. Nous vous
                    conseillons sur les matériaux afin de choisir les
                    meilleurs options .
                    </p>
                </div>
                
            </div>
        </div>
      </>
    )
  }
}

export default Garanti