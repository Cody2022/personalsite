// import Navbar from "./Components/Navbar";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import SoftwareEngineer from "./Pages/SoftwareEngineer";
import PetroleumEngineer from "./Pages/PetroleumEngineer";
import Resume from "./Pages/Resume";
import Interests from "./Pages/Interests";
import Footer from "./Components/Footer";


function App() {

  return (
    <div>
      <header className="navbar">
        <Navbar />
      </header>
      <div>
        <Routes>
          <Route path="/" element={<SoftwareEngineer />} />
          <Route path="/softwareengineer" element={<SoftwareEngineer />} />
          <Route path="/petroleumengineer" element={<PetroleumEngineer />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
