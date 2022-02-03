

import images1 from './p.jpg';



import React, { useState, useEffect } from 'react';


function FetchAPI() {

  const [data, setdata] = useState([]);
  const apiGet = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
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
      <main>


        <div className='container-fluid d-flex justify-content-center'>
          <div className="row">

            <div className="col-sm-4">
              <div className="card">

                <center> <img src={images1} /></center>

                <h2>Card title</h2>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button><a href={FetchAPI}> View Details</a></button>

              </div>
            </div>


          </div>
        </div>


      </main>

      <br />

      <button onClick={apiGet}>Fetch API</button>
      <pre>{JSON.stringify(data, null, 2)} </pre>


    </div>
  );
};
export default FetchAPI;
