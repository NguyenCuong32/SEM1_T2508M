
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
// import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className="App">
       <Router>
        <Header></Header>
        <main className="content">
          <Routes>
            <Route path="/home" element={<Home />}/>
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
