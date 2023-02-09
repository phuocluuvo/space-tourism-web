import React, { useEffect } from "react";
import dat from "../../data.json";
import "./TechnologyPage.css";
function TechnologyPage() {
  useEffect(() => {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabcontent[0].style.display = "flex";
    document.getElementsByClassName("alisudhausidhlkj")[1].style.display =
      "flex";
  }, []);
  const handleClick = (evt, idTech) => {
    var i, tabcontent, tabbtns;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabbtns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabbtns.length; i++) {
      tabbtns[i].className = tabbtns[i].className.replace(" active", "");
    }
    document.getElementById(idTech).style.display = "flex";
    const planet = document.getElementsByClassName(idTech);

    for (i = 0; i < planet.length; i++) {
      planet[i].style.display = "flex";
    }
    evt.currentTarget.className += " active";
  };
  return (
    <div className="technology page">
      <h2 className="title">
        <span>03</span> SPACE LAUNCH 101
      </h2>
      <div className="tabs">
        <div>
          {dat?.technology.map((d) => (
            <div key={d.name} id={d.id} className={`tab-content ${d.id}`}>
              <img
                className="landscape"
                src={d.images.landscape}
                alt={d.name}
              />
            </div>
          ))}
          <div className="tab-btn-container">
            {dat?.technology.map((d, i) =>
              i === 0 ? (
                <button
                  key={d.description}
                  className="tab-btn active"
                  onClick={(e) => handleClick(e, d.id)}
                >
                  <p
                    className="centered"
                    color="white"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "30px",
                    }}
                  >
                    {i + 1}
                  </p>
                </button>
              ) : (
                <button
                  key={d.description}
                  className="tab-btn"
                  onClick={(e) => handleClick(e, d.id)}
                >
                  <p
                    className="centered"
                    color="white"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "30px",
                    }}
                  >
                    {i + 1}
                  </p>
                </button>
              )
            )}
          </div>
          {dat?.technology.map((d) => (
            <div key={d.name} id={d.id} className={`tab-content ${d.id}`}>
              <div className="tab-content_content">
                <h3>The Terminology</h3>
                <h1 className="header">{d.name}</h1>
                <h4 color="white" className="description">
                  {d.description}
                </h4>
              </div>
              <img className="portrait" src={d.images.portrait} alt={d.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
