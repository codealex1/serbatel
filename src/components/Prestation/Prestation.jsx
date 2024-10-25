import React, { Component } from 'react'
import "./Prestation.css"
import image from '../../constants/image'
import { FaUsers, FaBuilding, FaCog, FaChartBar } from "react-icons/fa";

export class Prestation extends Component {
  render() {
    return (
      <>
        <div class="containerPrestation">
            <div class="containerTextPresta">
                <h1>NOS PRESTATIONS</h1>
                <br />
                <div>
                    <h2><strong>DÉFINITION DE VOTRE POTENTIEL SOLAIRE</strong></h2>
                    <p>Étude de faisabilité technique et financièr poussée. Gestion de tous projets sur ERP ou ERT</p>
                </div>
                <div>
                    <h2><strong>DÉMARCHES ADMINISTRATIVES</strong></h2>
                    <p>Réalisation de permis de construire en agricole, de déclarations préalables. Demandes de raccordement. Dossier Consuel.</p>
                </div>
                <div>
                    <h2><strong>SUIVI TECHNIQUE</strong></h2>
                    <p>Suivi de chantier, encadrement des soustraitants.                    </p>
                </div>
                <div>
                    <h2><strong>ASSISTANCE À MAÎTRISE D'OUVRAGE, MAÎTRISE D'OEUVRE</strong></h2>
                    <p>Gestion de la construction du support de votre centrale photovoltaïque.</p>
                </div>
                <img src={image.pile} alt="pile" class="pile" />
            </div>
            <div class="containerVision">
                <h1 class="white">NOTRE VISON</h1>
                <br />
                <div>
                    <p class="white">Grâce à notre grande expérience du photovoltaïque et des partenaires de confiance, nous vous aidons à produire de l'électricité et à la consommer. <br />
                    Que vous soyez un particulier ou un professionnel,
                    nous étudions votre demande afin de vous
                    proposer une solution adaptée à votre mode de
                    fonctionnement.

                    </p>

                </div>
                <div className="section">
                    <div className="section-item">
                        <FaUsers className="icon-presta" />
                        <p>
                        Intervention en gestion de projet dans sa globalité ou dans le cadre
                        d'un accroissement ponctuel d'activité.
                        </p>
                    </div>
                    <div className="section-item">
                        <FaBuilding className="icon" />
                        <p>
                        Champs d'action: Apporteur d'affaires, Chef de Projet technique,
                        Conducteur de Travaux.
                        </p>
                    </div>
                    <div className="section-item">
                        <FaCog className="icon" />
                        <p>
                        Domaines d'intervention variés : industriel, agriculture,
                        viticulture, particulier.
                        </p>
                    </div>
                    <div className="section-item">
                        <FaChartBar className="icon" />
                        <p>Intervention sur la Région Nouvelle-Aquitaine</p>
                    </div>
                </div>
            </div>
            <div class="containerRealisation">
                <h1>NOS RÉALISATION</h1>
                <div class="realisation-center">
                    <img src={image.batiment1} alt="" />
                    <p>Installation 100 kWc, en toiture d'un
                    bâtiment viticole</p>
                </div>
            </div>
        </div>
      
      </>
    )
  }
}

export default Prestation