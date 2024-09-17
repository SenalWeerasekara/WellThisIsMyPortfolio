import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./pages/home";
import PortfolioDisplay from "./pages/portfolioDisplay";
import YoutubeDisplay from "./pages/youtubeDisplay";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#121212",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ea0042",
        },
        links: {
          color: "#adadad",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 2,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 75,
        },
        opacity: {
          value: .7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 7 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          className="particles-background"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
      <div className="app-content">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioDisplay />} />
            <Route path="/youtube" element={<YoutubeDisplay />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
