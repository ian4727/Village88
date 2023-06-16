import React from 'react';
import RachelImage from "../assets/images/rachel.jpg";
import RossImage from "../assets/images/ross.jpg";
import JoeyImage from "../assets/images/joey.jpg";

function SimpleList() {
    const images = [RachelImage, RossImage, JoeyImage];
    const names = ["Rachel Green", "Ross Geller", "Joey Tribbiani"];
    const dates = ["January 25, 2022 3:00 PM", "January 25, 2022 3:30 PM", "January 25, 2022 4:00 PM"];
    const messages = ["React is amazing!", "This website is cool!", "I love ReactJS!"];
    
    return (
      <div>
        {images.map((image, index) => (
            <div className="card mb-3" style={{ maxWidth: "1000px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={image} alt={names[index]} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{names[index]}</h5>
                    <p className="card-text">{messages[index]}</p>
                    <div className="card-text">
                      <small className="text-body-secondary">{dates[index]}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    );
  }
  
  export default SimpleList;