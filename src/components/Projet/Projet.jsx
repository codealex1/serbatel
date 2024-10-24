import React, { Component } from 'react'
import "./Projet.css"
import image from '../../constants/image'


export class Projet extends Component {
  render() {
    return (
        <div class="containerProjet">
            <div class="div-energie">
                <div class="div-energie-center">
                    <img src={image.energie} alt="" />
                    <h1>Notre atout majeur :</h1>
                    <h1 class="blue">la pluridisciplinarité</h1>
                    <br />

                    <p class="p_projet">  Forte de plus de 12 ans d’expérience dans le
                        photovoltaïque, <br />je peux intervenir en renfort de vos 
                        équipes, ou en autonomie totale sur des sujets
                        variés :</p>

                    <ul class="p_projet">
                        <li><strong>Autorisations d’urbanisme</strong></li>
                        <li><strong>Pré-étude </strong>e (dimensionnement, ensoleillement, pré-chiffrage, <br />étude d’autoconsommation)</li>
                        <li><strong>Démarches administratives  </strong> (demande de raccordement, Consuel)</li>
                        <li><strong>Suivi du chantier y compris construction du bâtiment ou de l’ombrière  </strong> <br />(je dispose, en outre d’une décennale « Maitre d’œuvre »)</li>
                    </ul>

                    <p class="quote p_projet">En tant que consultante et maître d’œuvre indépendant, je m’adapte à vos besoins, <br />qu’ils soient ponctuels ou récurrents, à distance ou en présentiel, sur chantier ou au bureau.</p>
                </div>
                

                

                
            </div>
            <div class="div-projet">
                <div class="div-top">
                    <h1><strong>Un projet ?</strong></h1>
                    <br />
                    <p class="p_projet">Vous avez un projet à étudier, à réaliser ? <br />
                    <br />
                        Il vous manque du temps, ce projet est loin
                        <br />de votre base ? <br />
                        <br />
                        Localisée à Bordeaux, j’interviens pour <br />
                        vous, sur vos projets situés en Nouvelle- <br />Aquitaine.
                        <br />
                        
                        Pour tout autre projet en France <br />
                        métropolitaine  des déplacements peuvent
                        aussi <br />être envisagés.
                        <br /><br /> N’hésitez pas à me contacter afin <br />
                        d’échanger sur la faisabilité de notre
                        coopération.
                        </p>
                        <br />
                        <br /><br />
                        <br />
                        <br />
                        <br />

                        <img src={image.effage} alt="effage "class="effage" />
                </div>
                
            </div>
            <div class="div-serbatel-img">
                <img src={image.serbatel} alt='serbatel' class="img-serbatel" />
            </div>
        </div>
    )
  }
}

export default Projet