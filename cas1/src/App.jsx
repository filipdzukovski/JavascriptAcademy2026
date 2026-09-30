// const ImeNaBiblioteka = require('ImeNaBiblioteka') import so ES5 na biblioteka
import React from 'react';
import {Hello} from './components/Hello';

export function App() {

  var broj = 1;
  const fraza = 'nekoja vrednost123';
  let karakter = 'c';


  return (
    //<React.Fragment>
    <div id='app'>
      <h1>My first React App today</h1>
      <Hello/>
      <p>thanks for visiting</p>
      <hr/>
      <p>{5 + 3}</p>
      <h2>Fraza: {fraza}</h2>
      <h4>Broj: {broj}</h4>
      <h6>Karakter na denot: {karakter}</h6>
    </div>
  )

}

