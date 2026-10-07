import React,{useState} from 'react';
import { Domashno } from './components/Domashno';
import { Comments } from './components/Comments';
import { Car } from './components/Car';
import {LifeCycleEvents} from './components/LifeCycleEvents';

export function App() {

  const [promenliva,setPromenliva] = useState('Vrednost 1');

  let user1 = { ime: 'Ivan', prezime: 'Ivanov', adresa: 'Skopje', godini: 15 }
  let user2 = { ime: 'Jovan', prezime: 'Jovanov', adresa: 'Debar', godini: 22 }
  let user3 = { ime: 'Milena', prezime: 'Dimoska', adresa: 'Skopje', godini: 40 }
  let user4 = { ime: 'Simona', prezime: 'Simonova', adresa: 'Gostivar', godini: 12 }

  let comments = [
    { id: 1, author: 'Filip', content: 'Comment 1' },
    { id: 2, author: 'Jovan', content: 'Comment 2' },
    { id: 3, author: 'Simona', content: 'Comment 3' },
  ];

  let registracija = [
    { grad: { naselba: 'N1', ulica: 'Ul.1' }, oznaka: 'SK-0000-AB' },
    { grad: { naselba: 'N2', ulica: 'Ul.2' }, oznaka: 'GV-0000-AB' },
    { grad: { naselba: 'N3', ulica: 'Ul.3' }, oznaka: 'TE-0000-AB' }
  ];


  let cars = [
    { brand: 'Ford', model: 'Fiesta', year: 2010, plates: registracija[0] },
    { brand: 'Opel', model: 'Astra', year: 2023, plates: registracija[1] },
    { brand: 'VW', model: 'Polo', year: 2026, plates: registracija[2] }
  ];

  function handleChange(){
    setPromenliva('Nova vrednost')
  }

  return (
    <div id='app'>
      <LifeCycleEvents/>
      <p>State: {promenliva}</p>
      <button onClick={handleChange}>Change value</button>
      {/* <Car vozila={cars} /> */}
      {/* <Domashno
        korisnik1={user1}
        korisnik2={user2}
        korisnik3={user3}
        korisnik4={user4}
      /> */}
      {/* <Comments listOfComments={comments} datum={'07/10/2026'} /> */}
    </div>
  )
}