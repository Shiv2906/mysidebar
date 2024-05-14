import { useState } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu";

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

const Dashboard = () => {
  return <h1>Dashboard</h1>;
};
const About = () => {
  return <h1>About</h1>;
};
const Basic_Info = () => {
  return <h1>Basic Information</h1>;
};
const Resume = () => {
  return <h1>Resume</h1>;
};
const Contact = () => {
  return <h1>Contact</h1>;
};

function App() {

  const [inactive , setInactive] = useState(false);


  return (
    <div className="App">
      <Router>
        <SideMenu onCollapse={(inactive)=>{
          console.log(inactive);
          setInactive(inactive)
        }} />

        <div className={`container ${inactive ? "inactive" : ''}`}>
          <Routes>
            <Route path="/" element={  <Dashboard />}>
            
            </Route>
            <Route path="/about" element={<About />}>
              
            </Route>
            <Route path="/about/basic_info" element={ <Basic_Info />}>
             
            </Route>
            <Route path="/about/Resume" element={<Resume />}>
              
            </Route>
            <Route path="/contact" element={ <Contact />}> 
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
