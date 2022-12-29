import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.component.jsx";
import ShopPage from "./pages/Shop/Shop.component.jsx";
import Header from "./components/Header/Header.component.jsx";
import Sign from "./pages/Sign/Sign.component.jsx";

import { auth } from "./firebase/firebase.utils";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      setCurrentUser(null);
    };
  }, []);

  return (
    <>
      <Router>
        <Header currentUser={currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<Sign />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
