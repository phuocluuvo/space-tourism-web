import React from "react";
import "./CrewPage.css";
import data from "../../data.json";
function CrewPage() {
  return (
    <div className="crew page">
      <div>
        <h2 className="title">
          <span>02</span> MEET YOUR CREW
        </h2>
        <div
          id="carousel-slide"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-slide"
              data-slide-to="0"
              className="active"
            ></li>
            {data.crew.map(
              (c, i) =>
                i > 0 && (
                  <li
                    key={i}
                    data-target="#carousel-slide"
                    data-slide-to={i}
                  ></li>
                )
            )}
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <div className="content-container">
                <div className="bio-container">
                  <h2 className="role">{data.crew[0].role}</h2>
                  <h3 className="name header">{data.crew[0].name}</h3>
                  <h4
                    className="bio description"
                    style={{ color: "slategray", fontWeight: "400" }}
                  >
                    {data.crew[0].bio}
                  </h4>
                </div>

                <div className="image-container">
                <img src={data.crew[0].images.png} alt={data.crew[0].name} />
                      </div>
                
              </div>
            </div>
            {data.crew.map(
              (c, i) =>
                i > 0 && (
                  <div className="item">
                    <div className="content-container">
                      <div className="bio-container">
                        <h2 className="role">{c.role}</h2>
                        <h3 className="name">{c.name}</h3>
                        <p
                          className="bio description"
                          style={{ color: "slategray", fontWeight: "400" }}
                        >
                          {c.bio}
                        </p>
                      </div>
                      <div className="image-container" data-image={c.images.png}>
                        <img src={c.images.webp} alt={c.name} />
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrewPage;
