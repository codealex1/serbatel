import React, { Component } from 'react'
import './Header.css';



export class Header extends Component {
  render() {
    return (
      <div class="containerpresentation">
        <div class="left"></div>
        <div class="right"></div>
        <div class="text-zone">
          <div class="one">

            <h1>Caroline Brunet</h1>
            <p class="pzone">
              
              Ingénieur en télécom spécialisé dans l'installation de solutions solaires pour particulier et professionels depuis 2006
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header