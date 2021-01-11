import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import './App.css';
import Gallery from './Components/Gallery'
import Input from './Components/Input';
import CircularProgress from '@material-ui/core/CircularProgress'

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setformData] = useState(''); 


  const fetchData = async (input) => {
    console.log(input)
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${
        !input ? 'dog' : input
      }&client_id=ff72koxkHRsI6u-gN9VytgQ4IlXRjUavaCpQsG6nMeQ&per_pa`
      )
    const data = await response.data;
   
    console.log(data)
    setPhotos(data);
    setLoading(false);
  };

  const handleChange = (event) => {
    setformData(event.target.value);
   
    
    
  };
  const handleSubmit = (event) =>{
    event.preventDefault();
    fetchData(formData);
    
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (loading)
    return (
      <div style = {{
        height:'100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'


      }}>
        <CircularProgress size={130} />
      </div>

    )





  return (
    <Container>
      <Input  change={handleChange} submit={handleSubmit}/>
      <Gallery photos={photos.results}/>
    </Container>
  )
}

export default App;
