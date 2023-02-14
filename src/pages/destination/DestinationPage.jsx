import React, { useEffect } from "react";
import "./DestinationPage.css";
import dat from "../../data.json";
function DestinationPage({ data }) {
  useEffect(() => {
    var i, tabcontent, tabbtns;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabcontent[0].style.display = "block";
    document.getElementsByClassName("Moon")[1].style.display = "flex";
  }, []);
  const handleClick = (evt, planetName) => {
    var i, tabcontent, tabbtns;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabbtns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabbtns.length; i++) {
      tabbtns[i].className = tabbtns[i].className.replace(" active", "");
    }
    document.getElementById(planetName).style.display = "flex";
    const planet = document.getElementsByClassName(planetName);

    for (i = 0; i < planet.length; i++) {
      planet[i].style.display = "flex";
    }
    evt.currentTarget.className += " active";
  };
  return (
    <div className="destination page">
      <h2 className="title">
        <span>01</span> PICK YOUR DESTINATION
      </h2>
      <div className="tabs">
        {dat?.destinations.map((d) => (
          <div
          
            key={d.name}
            id={d.name}
            style={{
           
              padding: "3rem 5rem",
            }}
            className={`tab-content ${d.name}`}

          >
            <img src={d.images.png} alt={d.name} />
          </div>
        ))}
        <div>
          <div className="tab-btn-container">
            {dat?.destinations.map((d, i) => i === 0 ?(
              <button
                key={d.description}
                className="tab-btn underline-hover active"
                onClick={(e) => handleClick(e, d.name)}
              >
                <p color="white">{d.name}</p>
              </button>
            ):(
              <button
                key={d.description}
                className="tab-btn underline-hover"
                onClick={(e) => handleClick(e, d.name)}
              >
                <p color="white">{d.name}</p>
              </button>
            ))}
          </div>
          {dat?.destinations.map((d, index) => (
            <div key={d.name} id={d.name} className={`tab-content ${d.name}`}>
              <div className="tab-content_content">
                <h1 className="header">{d.name}</h1>
                <p color="white" className="description">
                  {d.description}
                </p>
                <hr></hr>
                <div className="container-bottom">
                  <div className="distance">
                    <h5>AVG DISTANCE</h5>
                    <h3>{d.distance}</h3>
                  </div>
                  <div className="travel">
                    <h5>EST. TRAVEL TIME</h5>
                    <h3>{d.travel}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DestinationPage;
