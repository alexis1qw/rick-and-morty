import React, {useEffect, useState} from "react";
import Navbar from "./componentes/Navbar";
import Characters from "./componentes/characters"
import Pagination from "./componentes/Pagination";

function App() {

const [characters, setcharacters] = useState([])
const [info, setinfo] = useState({})

  const url ="https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch (url)
    .then(Response => Response.json())
    .then((data) => {
      setcharacters(data.results);
      setinfo(data.info); 
    }) 
    .catch (Error => console.log(Error))
  };

  const onPrevious = () =>{
    fetchCharacters(info.prev);
  }

  const onNext = () =>{
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(url)
  }, [])
  

  return (
  <>
   <Navbar alexis= "Ricky and Morty app" />
   <div className="container mt-5"> 
       <Pagination 
       prev={info.prev}
       next={info.next}
       onPrevious = {onPrevious}
       onNext = {onNext} />
       <Characters characters ={characters}/>
       <Pagination 
       prev={info.prev}
       next={info.next}
       onPrevious = {onPrevious}
       onNext = {onNext} />
   </div>
  </>
  ); 

}

export default App;
