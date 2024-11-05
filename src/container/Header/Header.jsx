import React, { Component } from 'react'
import './Header.css';


export class Header extends Component {
  render() {
    return (
      <>
      <div class="containerpresentation">
        <div class="left"></div>
        <div class="right"></div>
        <div class="text-zone">
          <div class="margin">

          

            <h1 class="h1-pres">Caroline Brunet  </h1>
            <h2 class="h2-pres">  Gérante de Serbatel</h2>
            <br />
            <p class='pc' >
            J’ai commencé ma carrière dans la téléphonie mobile, secteur en pleine expansion, chez
            Bouygues Telecom afin de participer au déploiement de son réseau. <br />
            <br />
            Ingénieur généraliste, et d’un naturel curieux, j’ai ensuite travaillé chez un façadier de Bordeaux,
            qui se décrivait comme “la haute couture de la façade”, spécialiste du mur rideau puis quatre
            ans comme co-gérante d’une entreprise générale du bâtiment, PME de 25 personnes qui a
            rénové plusieurs vieux immeubles situés Rive droite à Bordeaux <br />
            <br />
            Pendant un an j’ai également assisté un Maître d’oeuvre sur des chantiers de construction de
            programmes immobiliers (notamment pour Bouygues Immobilier et Sévérini Pierre et Loisirs) <br />
            <br /> 

            Créée en novembre 2008, SERBATEL est une société de prestation de services spécialisée en
            bâtiment et téléphonie mobile, qui compte trois associés. J’en suis la gérante depuis sa création.
            Depuis janvier 2016 j’ai développé mon activité de Maître d’OEuvre, avec, à ce jour, une clientèle
            assez spécialisée dans la viticulture.
            </p>
            <p class="phone-tablette">
            J’ai commencé ma carrière dans la téléphonie mobile, secteur en pleine expansion, chez
            Bouygues Telecom afin de participer au déploiement de son réseau. <br />
            <br />
            Ingénieur généraliste, et d’un naturel curieux, j’ai ensuite co-fondé SERBATEL en novembre 2008, une société de prestation de services spécialisée en
            bâtiment et téléphonie mobile, qui compte trois associés. J’en suis la gérante depuis sa création.
            Depuis janvier 2016 j’ai développé mon activité de Maître d’OEuvre, avec, à ce jour, une clientèle
            assez spécialisée dans la viticulture.
            </p>
            </div>
        </div>
      </div>

      </>
    )
  }
}

export default Header