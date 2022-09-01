import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Story from "./components/Story";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";
import Releasedcollection from "./components/Releasedcollection";
import Trial from "./components/Trial";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="overflow">
      <Story />
      <Benefits />
      <Releasedcollection />
      <Roadmap />
      <Team />
      <Footer />
      {/* <Accordion />
       <Trial /> */}
    </div>
  );
}

export default App;
