import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'


const API_KEY = 'DEMO_KEY'
const URL = `http://localhost:9009/api/apod?api_key=${API_KEY}`

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    function fetchAPOD() {
      axios.get(URL)
      .then(res => {
        console.log(res)
        setData(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    fetchAPOD()
  }, []);
  
  if (!data) return <p>Fetching Data...</p>
  return (
    <section>
      <Card 
        title={data.title}
        text={data.explanation}
        image={data.url}
        author={data.copyright}
        date={data.date}
        />
    </section>
  );
  
}



