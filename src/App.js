import React from 'react';
import logo from './logo.svg';
import './App.css';
// put things in a fridge
import megaShark from './mega.jpg';
// use Camel case for naming variables ... instaed of PascalName or ke-Bap
// it was decided by STYLING STANDARD - ... air-bnb
import sharkFirst from './shark.jpeg';
import sharkSecond from './sharkexorcist.jpg';

// a component is just a piece of TAG ... which can be used several times. 
// props is a key-value pair .. 
function Movie(props){
  return <div>
<h5> {props.title} (Score: {props.score})</h5>
    <img src={props.image}/>
</div>
}


function App() {
  return (
    <div className="App">
       <h1> Best Movies</h1>
        <Movie title ='The First1 Movie' image={megaShark} score='7.5'/>
        <Movie title ='The Second2 Movie'image={sharkFirst}score='9.5'/>
        <Movie title ='The Third Movie' image={sharkSecond}score='10'/>
        <div>
          <h5> Megas vs Sagans </h5>
            <img src={megaShark}/>
        </div>
        <div>
          <h3> shark pic1 </h3>
            <img src={sharkFirst}/>
        </div>
        <div>
          <h3> shark pic2 </h3>
            <img src={sharkSecond}/>
        </div>

    </div>
  );
}

export default App;
