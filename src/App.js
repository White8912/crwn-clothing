import HomePage from "./pages/HomePage/HomePage.component.jsx";
import ShopPage from "./pages/Shop/Shop.component.jsx";
import Header  from "./components/Header/Header.component.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
