import './App.css';
import Home from "./pages/Home";
import CandidatesPage from "./pages/CandidatesPage";
import DetailedView from "./pages/DetailedView";
import JobsPage from "./pages/JobsPage";
import { Routes, Route } from "react-router-dom"
import NavBar from './pages/NavBar';
import ExternalPage from './pages/ExternalPage';

function App() {
  return (
    <div className="App">
       <header>
       <h1>UnLinked</h1>
       <NavBar/>
       </header>
       
       <footer>© 2022 Jacob Hastings </footer>

        <Routes>
          <Route  path="/" element={<Home />}  />  
          <Route  path="/candidates" element={<CandidatesPage />}  />  
          <Route  path="/detailedView" element={<DetailedView />}  /> 
          <Route  path="/jobs" element={<JobsPage />}  />
          <Route  path="/external" element={<ExternalPage />}  />   
        </Routes>
    </div>
  );
}

export default App;
