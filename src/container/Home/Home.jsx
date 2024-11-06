import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../Header/Header'
import Footer from '../../components/Footer/Footer'
import Projet from '../../components/Projet/Projet'
import Accompagnement from '../../components/Accompagnement/Accompagnement'
import Garanti from '../../components/Garanti/Garanti'
import ContactForm from '../../components/Contact/Contact'

export class Home extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Projet/>
            <Accompagnement/>
            <Garanti/>
            <ContactForm/>
            <Footer/>

        </div>
      
    )
  }
}

export default Home