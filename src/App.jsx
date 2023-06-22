import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />} />
          {/* <Route path="/photography" element={<Photography />} />
          <Route
            path="/photography/:photographyId"
            element={<PhotographyCategory />}
          />
          <Route path="/film-direction" element={<FilmDirection />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} /> */}
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
