import React, { useEffect } from 'react'

//
import paris from '../../assets/paris.jpg'
import bali from '../../assets/bali.jpg'
import guadeloupe from '../../assets/guadeloupe.jpg'
import acapulco from '../../assets/acapulco.jpg'

//
import traveler1 from '../../assets/user(1).jpg'
import traveler2 from '../../assets/user(2).jpg'
import traveler3 from '../../assets/user(3).jpg'
import traveler4 from '../../assets/user(4).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'Juliette Gross',
    socialLink: 'Jujux@ju',
  },
  {
    id: 2,
    destinationImage: bali,
    travelerImage: traveler2,
    travelerName: 'Yohan Bourgeois',
    socialLink: 'lapotion@lapotion',
  },
  {
    id: 3,
    destinationImage: guadeloupe,
    travelerImage: traveler3,
    travelerName: 'Charles-Adrien Moore',
    socialLink: 'lecharly@starnak',
  },
  {
    id: 4,
    destinationImage: acapulco,
    travelerImage: traveler4,
    travelerName: 'Clément Petit',
    socialLink: 'touk@touk',
  },
]

const Travelers = () => {

  useEffect(()=> {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">

    {
      travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink}) => {
        return (
          <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">

          <img src={destinationImage} className='destinationImage' alt='destination'/>

          <div className="travelerDetails">

            <div className="travelerPicture">
              <img src={travelerImage} className='travelerImage' alt='profilePicture'/>
            </div>
            <div className="travelerName">
              <span>{travelerName}</span>
              <p>{socialLink}</p>
            </div>

          </div>

        </div>
        )
      })
    }

        </div>
      </div>
    </div>
  )
}

export default Travelers