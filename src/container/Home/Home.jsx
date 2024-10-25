import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../Header/Header'
import Footer from '../../components/Footer/Footer'
import Projet from '../../components/Projet/Projet'
import Accompagnement from '../../components/Accompagnement/Accompagnement'

export class Home extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Projet/>
            <Accompagnement/>
            <Footer/>
        </div>
      
    )
  }
}

export default Home