import React from 'react'
import RestaurantCard from '../Components/RestaurantCard'

import  BannerOffer  from '../Components/Offers/BannerOffer'
import Header from '../Components/Organisms/Header'


 const Offers = () => {
  return (
    <>
      <Header/>
      <BannerOffer/>
      <RestaurantCard/>
      
    </>
    

  )
}

export default Offers;