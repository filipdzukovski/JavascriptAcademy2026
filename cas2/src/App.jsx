import React from 'react';
import { Welcome } from './components/Welcome';
import { Student } from './components/Student';
import { StudentFunction } from './components/StudentFunction';
import { Comments } from './components/Comments';
import {FruitList} from './components/FruitList';


export function App() {

    var ime = 'Filip';
    var prezime = 'Dzukovski';
    var age = 26;
    var student = {
        name: 'Ivan',
        address: 'Skopje',
        college: 'UKIM',
        index: 141088
    }

    var hasComments = false;
    var longComment = false;

    var listaNaOvosje = ['apple','banana','orange','apple'];

    

    return (
        <div id='app'>
            <FruitList listaNaOvosje={listaNaOvosje}/>
            <hr/>
            <Comments longComment={longComment} hasComments={hasComments} />
            <hr />
            <Welcome name="Panche" lastName="Panchev" />
            <hr />
            <Welcome name={ime} lastName={prezime} age={age} />
            <hr />
            <Student student={student} />
            <hr />
            <StudentFunction ucenik={student} nesto={'nesto'} />

        </div>
    )
}

{/* <input 
type="color"
name="inputFiled"
placeholder="Enter Something"
value="nesto"
moeProperty="nesto drugo"
/> */}