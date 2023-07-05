import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { styled } from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
  return (
    <Fragment>
      <Header />
      <AppBody>
        <Sidebar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Chat />} />
            {/* <Route path="/photography" element={<Photography />} />
          <Route
            path="/photography/:photographyId"
            element={<PhotographyCategory />}
          />
          <Route path="/film-direction" element={<FilmDirection />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} /> */}
          </Routes>
        </Router>
      </AppBody>
    </Fragment>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
