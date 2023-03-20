import "./App.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Page from "./components/page/Page";
import ParticlesBkgrd from "./components/particles/ParticlesBkgrd";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

const App = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Page>
      <Navbar></Navbar>
      <Main></Main>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={ParticlesBkgrd()}
      />
    </Page>
  );
};

export default App;
