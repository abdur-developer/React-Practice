import { useState } from 'react'
import './App.css'
import Dada from './Dada'

function App() {
  const address = "Dandapal, Debiganj, Panchagarh"
  return (
    <>
      <Abdur startWith="Mr" endWith="Rahman"></Abdur>
      <Dada msg="Kam kor!"></Dada>
      <Contact number="01709409266" address={address}></Contact>
      {/* <Contact number="01712345678" address="Dhaka, Bangladesh"></Contact> */}
    </>
  )
}

function Abdur(props) {
  return <h1>{props.startWith}. Abdur {props.endWith}</h1>
}
function Contact({number, address}) {
  return (
    <div className="contact">
      <p>{number}</p>
      <p>{address}</p>
    </div>
  )
}

export default App
