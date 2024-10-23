import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../Header/Header'
import Footer from '../../components/Footer/Footer'


export class Home extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Footer/>
        </div>
      
    )
  }
}

export default Home