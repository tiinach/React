import react from "react";
import "./card.css";
import FetchAPI from "./button";
import images1 from "./L.jpg";


function Card() {
  return (
    <div>
      <main>
        <div className=" justify-content-center">
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <center>
                  {" "}
                  <img src={images1} />
                </center>

                <h2>Card title</h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <FetchAPI />
             
              </div>
            </div>

           
          </div>
        </div>
      </main>
    </div>
  );
}

export default Card;
