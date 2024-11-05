import React, { Component } from 'react'
import "./Accompagnement.css"
import { FaStar, FaLayerGroup, FaUsers,  FaCog } from 'react-icons/fa';


export class Accompagnement extends Component {
  render() {
    return (
        <>
        <div class="containerAcc" data-aos="fade-left" data-aos-duration="3000">
        
            <div class="bck-img-acc"></div>
            <div class="text-zone-acc">
                <div class="margin">

                    <h1 class="h1-acc">Votre projet étape par étape :  </h1>
                    <h2 class="h2-acc"><strong>Un accompagnement clé en main </strong></h2>
                    
                </div>
            </div>
            <div className="container-acc-projet">
                <div className="step">
                    <FaStar className="icon" />
                    <h3>ETAPE 1</h3>
                    <p class="p-acc">
                    Définition de vos besoins à la suite d'une visite technique. Puis, nous
                    réalisons votre chiffrage et vous recevez une estimation
                    détaillée.
                    </p>
                </div>
                <div className="step">
                    <FaLayerGroup className="icon" />
                    <h3>ETAPE 2</h3>
                    <p class="p-acc">
                    Elaboration des plans. Nous définission les plans en fonction de vos
                    besoins et des éventuellement contraintes du projet.
                    </p>
                </div>
                <div className="step">
                    <FaUsers className="icon" />
                    <h3>ETAPE 3</h3>
                    <p class="p-acc">
                    Recherche d'artisans électriciens, plaquistes, maçons, plombiers,..)
                    parmi notre réseau de professionnels.
                    </p>
                </div>
                <div className="step">
                    <FaCog className="icon" />
                    <h3>ETAPE 4</h3>
                    <p class="p-acc">
                    Suivi des travaux dans le respect du budget et du délai. Nous vous
                    tenons au courant régulièrement de l'avancement du projet.
                    </p>
                </div>
            </div>
        </div>
      </>
    )
  }
}

export default Accompagnement