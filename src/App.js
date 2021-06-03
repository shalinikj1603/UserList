import React,{useState} from 'react';
//import Axios from 'axios'; 
import './App.css';


function App() {
const [name,setname] = useState("");
const [results,setResults] = useState([])

const getUser =() =>{
  // Axios.get(`https://swapi.dev/api/people/?search=${name}`).then((response)=>JSON.parse(response.data)).then((data)=>{
  //  console.log(data.results)
  //  setResults(data.results)
  // })
  fetch(`https://swapi.dev/api/people/?search=${name}`).then((response)=>response.json()).then((responseJson)=>{
    console.log(responseJson.results)
    setResults(responseJson.results)
   })
}

const mystyle = {
  alignContent:'center',
  justifyContent:'center',
  display:'flex',
  fontFamily: "Arial"
};

const button={
  backgroundColor:'Blue',
  margin: '2px',
  padding: '3px',
  fontWeight: 'bold'
}

const instyle={
Text:'bold',
padding:'12px 20px',
border: '1px solid #ccc'
}

const label={
  color: '#fffff', 
  fontWeight: 'bold'
}
const result={
  padding:'10px',
  margin:'20px',
  color:'Black',
  fontWeight: 'bold',
  backgroundColor:'grey'
}


const warsfunc =(e) =>{
  setname(e.target.value)
}


 return (<div>
   <p style={mystyle}>
   <label style={label}>Name</label>
  <input type="text" id="name" style={instyle} onChange={(e)=>warsfunc(e) }/><br/>
   <button style={button} onClick={getUser}>Get User</button><br/>
   </p>
   <div>
     {results.map((res,i)=>(
    <div style={result} key={i}>
      <p>{res.name}<br/>
     {res.eye_color}<br/>
     {res.hair_color}<br/>
     {res.gender}<br/>
     {res.mass}</p>
     </div> ))}

    </div>
 </div>
 )
}

export default App;
