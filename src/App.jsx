import { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import data from "./data.json";
import Navigation from "./navigation/Navigation";
import CrewPage from "./pages/crew/CrewPage";
import HomePage from "./pages/home/HomePage";
import DestinationPage from "./pages/destination/DestinationPage";
import TechnologyPage from "./pages/technology/TechnologyPage";
import Loading from "./custom/Loading";
function App() {
  let destinations,
    crew,
    technology = [];
    
  useEffect(() => {
    destinations = data.destinations;
    crew = data.crew;
    technology = data.technology;
  }, []);
  return (
    <div className="App">
      
      <Router>
      <Navigation />
        <Routes >
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            }
          ></Route>
          <Route exact path="/crew" element={ <Suspense fallback={<Loading />}>
          <CrewPage data={crew} /> </Suspense>}></Route>
          <Route
            exact
            path="/destination"
            element={ <Suspense fallback={<Loading />}><DestinationPage data={destinations} /></Suspense>}
          ></Route>
          <Route
            exact
            path="/technology"
            element={ <Suspense fallback={<Loading />}><TechnologyPage data={technology} /></Suspense>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
