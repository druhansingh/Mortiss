import React from 'react'
import Hero from "../components/Hero.jsx"
import Biography from "../components/Biography.jsx"

const aboutUs = () => {
  return (
    <>
    <Hero title={"Learn more about us"} imageUrl={"/about.png"}/>
    <Biography imageUrl={"/whoweare.png"}/>
    </>
  )
}

export default aboutUs