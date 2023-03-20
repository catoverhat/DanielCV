import "./App.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Card from "./components/card/Card";
import ParticlesBkgrd from "./components/particles/ParticlesBkgrd";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

const App = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div style={{display:'flex', flexDirection: 'column', height:'100svh'}}>
      <Navbar></Navbar>
      <Main></Main>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={ParticlesBkgrd()}
      />
    </div>
  );
};

export default App;
