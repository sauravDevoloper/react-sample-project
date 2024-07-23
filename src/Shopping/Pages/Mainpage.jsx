import React, { useState } from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Collection from '../Components/Collection'
import { Gents,Ladies } from '../content'
import WomenCollection from '../Components/WomenCollection'
import Footer from '../Components/Footer'

const Mainpage = () => {
    const[mensFashion,setMensFashion] = useState(Gents)
    const [womenFashion,setWomenFashion] = useState(Ladies)
  return (
    <div>
        
       <Header/>
       <Banner/>
       <Collection  mensFashion={mensFashion}/>
       <WomenCollection womenFashion={womenFashion}/>
       <Footer/>
    </div>
  )
}

export default Mainpage