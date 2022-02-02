import React,{useState,useEffect} from 'react';

function FetchAPI() {

  const [data, setdata]=useState([]);
    const apiGet=() =>  {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          
          console.log(json)
          setdata(json);
        });
       
    }
  

useEffect(()=> { 
  apiGet();
 },[]
)


    return (
    <div>
    My API <br/>

    <button onClick={apiGet}>Fetch API</button>
    <pre>{  JSON.stringify(data, null, 2)    } </pre>


    </div>
  );
};
export default FetchAPI;