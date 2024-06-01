import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
import MarsPhoto from './MarsPhoto';


const API_KEY = 'DEMO_KEY'
// const URL = `http://localhost:9009/api/apod?api_key=${api_key}`
const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;


const MARS = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'



function App() {
const [apod, setApod] = useState(null)
const [pom, setPom] = useState(null)


  useEffect(() => {
    function marsPhoto(){
      axios.get(MARS)
      .then(res => {
        console.log(res.data)
        setPom(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    // marsPhoto()
  }, []);

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
  }
  // fetchPhoto()
  
  setApod({
    "copyright": "NASA, ESA, and the Hubble Heritage Team (STScI/AURA)",
    "date": "April 1, 1995",
    "explanation": "The Pillars of Creation is a striking image of interstellar columns of gas and dust in the Eagle Nebula. It was captured by the Hubble Space Telescope and has become one of the most famous astronomical photographs ever taken. The image showcases the ongoing process of star formation and provides valuable insights into the birth and evolution of stars and planetary systems.",
    "media_type": "image",
    "title": "Pillars of Creation",
    "url": "https://bloominstituteoftechnology.github.io/img/pillars-of-creation.png",
    "service_version": "v1"
  })



  setPom({
          "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG",
        "earth_date": "2015-05-30",
        "rover": {
          "id": 5,
          "name": "Curiosity",
          "landing_date": "2012-08-06",
          "launch_date": "2011-11-26",
          "status": "active",
          "max_sol": 4102,
          "max_date": "2024-02-19",
          "total_photos": 695670,
        }
          })




}, []);

if (!apod) return "Fetching Photo of the Day..."
if (!pom) return "Loading..."

   return (
<>
  <section className='apod'>
      <Card 
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
  </section>
  
  {/* Mars Photo Section */}
  <section className='mars'>
      <MarsPhoto
      roverName={pom.rover.name}
      imgSrc={pom.img_src}
      earthDate={pom.earth_date}
      />
  </section>

</>
  )
}

export default App
