import HomePage from "./pages/HomePage/HomePage.component.jsx";

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import "./App.css";

const HatsPage = () => (
  <div>
    <h1>Hats PAGE</h1>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
