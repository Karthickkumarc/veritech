import React from 'react'
import HEro from '../components/Hero/HEro'
import Objective from '../components/Objective/Objective'
import Trainees from '../components/Trainees/Trainees'
import Testimonials from "../components/Testimonials/Testimonials"

function Home() {
  return (
    <div>
      <HEro />
      <Objective />
      <Trainees />
      <Testimonials />
    </div>
  )
}

export default Home
