import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { styled } from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Logo from "../src/assets/logo.png";
import { BarLoader } from "react-spinners";
import { selectSidebarState } from "./features/sidebarSlice";
import { useSelector } from "react-redux";

function App() {
  const [user, loading] = useAuthState(auth);
  const sidebarToggle = useSelector(selectSidebarState);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src={Logo} alt="" />

          <BarLoader
            color="purple"
            loading={loading}
            // cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  return (
    <Fragment>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <AppBody>
            {sidebarToggle && <Sidebar />}
            <Router>
              <Routes>
                <Route exact path="/" element={<Chat />} />
              </Routes>
            </Router>
          </AppBody>
        </>
      )}
    </Fragment>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 700px) {
    display: relative;
  }
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
