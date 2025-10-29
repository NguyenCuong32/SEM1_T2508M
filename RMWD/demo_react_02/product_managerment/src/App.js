import './App.css';
// import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutMe from './pages/AboutMe';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Router>
        <Header></Header>
        <main className="content">
          <Routes>
            <Route path="/home" element={<HomePage />}/>
            <Route path="/product" element={<ProductPage />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
        </main>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
