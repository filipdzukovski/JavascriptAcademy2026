import React,{useState,useEffect} from 'react';
import {Login} from './components/Login';
import "./css/App.css"
// import {Movies} from './components/Movies';

// da se prikaze vo dopolnitelen fajl lista od filmovi (minimum 5 po vash izbor)
// izdefinirana vo app so atributi {name,date,genre plot,imdbLink,imgUrl}
// listata na atributi prikaz i slika za filmot (slikata ne mora da bide od imdb),
// imdb.com e stranata za filmovite

// const filmovi = [
//   {name:"The Dark Knight",date:2008,genre:"Drama,Thriller,Action",plot:"When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",imdbLink:"https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_1_tt_5_nm_2_in_0_q_the%20dark",imgUrl:"https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF894,1000_QL80_.jpg"},
//   {name:"Pulp Fiction",date:1994,genre:"Dark Comedy,Crime,Drama",plot:"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",imdbLink:"https://www.imdb.com/title/tt0110912/?ref_=nv_sr_srsg_0_tt_4_nm_4_in_0_q_pulp",imgUrl:"https://m.media-amazon.com/images/I/81UTs3sC5hL.jpg"},
//   {name:"Reservoir Dogs",date:1992,genre:"Drama,Crime,Thriller",plot:"When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",imdbLink:"https://www.imdb.com/title/tt0105236/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_reservo",imgUrl:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13719_p_v8_aa.jpg"}
// ];


export function App(){

  // const [promenliva,setPromenliva] = useState('Vrednost 1');
  // const [brojac,setBrojac] = useState(0);

  useEffect(()=>{
    console.log("COMPONENT DID MOUNT");
  },[] ) //componentDidMount

  // function changeValue(){
  //   setPromenliva('Vrednost 2');
  // }

  console.log("THIS IS RENDER METHOD")
  return(
    <div id='app'>
      <Login/>
      {/* <h2>{promenliva}</h2>
      <button onClick={()=>{setPromenliva('Nova Vrednost')}} >Update State</button>
      <h2>Brojac: {brojac}</h2>
      <img 
        src={'https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF894,1000_QL80_.jpg'} 
        alt={"image"} 
        width={300}
        height={400}
        onClick={()=>{setBrojac(brojac + 1)}}
        /> 
      <Movies listaNaFilmovi = {filmovi}/> */}
    </div>
  )
}

// constructor() -- 1
// render() - method -- 2
// componentDidMount - Lifecycle Method -- 3 