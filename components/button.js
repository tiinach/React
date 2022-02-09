import react from "react";
import "./button.css";
import React, { useState, useEffect } from 'react';


function FetchAPI() {
  const [data, setdata] = useState([]);
  const apiGet = () => {

    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => {

      console.log(json)
      setdata(json);
    });

  }

  
  



  useEffect(() => {
    apiGet();
  }, []
  )

return (
<div> 
  <button target="_blank" onClick={apiGet} className="b" >View Detail</button>
<h2>The Information</h2>
  <pre>{JSON.stringify(data, null, 2)} </pre>

</div>

)

}




  export default FetchAPI








