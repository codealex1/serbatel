import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Prestation from '../../components/Prestation/Prestation'

export class Apropos extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Prestation/>
            <Footer/>
        </div>
    )
  }
}

export default Apropos